#!/usr/bin/env python3
"""
fill-music-links.py
Extracts track URLs from a SoundCloud playlist/album and fills the empty
placeholder entries (url: "") in music-links.js.
Also fills matching entries in music-list.js with:
    "Song Name - Game Name"
and inferred tags.

Usage:
    python fill-music-links.py <soundcloud-playlist-url> [options]

Options:
    --start-id <N>       Answer ID to start filling from  (default: first empty entry)
    --min-duration <N>   Minimum track duration in seconds (default: 16)
    --no-comment         Skip inserting a playlist comment block in the JS file
    --dry-run            Preview changes without modifying JS files
"""

import sys
import os
import re
import json
import urllib.request
import urllib.parse
import urllib.error
from pathlib import Path

MUSIC_LINKS_PATH = Path(__file__).parent / "music-links.js"
MUSIC_LIST_PATH = Path(__file__).parent / "music-list.js"
DEFAULT_MIN_DURATION = 16   # seconds


# ---------------------------------------------------------------------------
# Argument parsing
# ---------------------------------------------------------------------------
def parse_args(argv):
    opts = {
        "playlist_url": None,
        "start_id": None,
        "min_duration": DEFAULT_MIN_DURATION,
        "add_comment": True,
        "dry_run": False,
    }
    i = 0
    while i < len(argv):
        a = argv[i]
        if a == "--start-id" and i + 1 < len(argv):
            opts["start_id"] = int(argv[i + 1]); i += 2
        elif a == "--min-duration" and i + 1 < len(argv):
            opts["min_duration"] = int(argv[i + 1]); i += 2
        elif a == "--no-comment":
            opts["add_comment"] = False; i += 1
        elif a == "--dry-run":
            opts["dry_run"] = True; i += 1
        elif not a.startswith("--"):
            opts["playlist_url"] = a; i += 1
        else:
            i += 1
    return opts


# ---------------------------------------------------------------------------
# HTTP helper (follows redirects, no third-party deps)
# ---------------------------------------------------------------------------
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept": "application/json, text/html, */*",
}


def fetch(url: str, depth: int = 0) -> str:
    if depth > 6:
        raise RuntimeError("Too many redirects")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            return resp.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"HTTP {e.code} — {url}") from e


# ---------------------------------------------------------------------------
# SoundCloud client_id extraction
# ---------------------------------------------------------------------------
def get_client_id() -> str:
    print("Fetching SoundCloud client_id … ", end="", flush=True)
    html = fetch("https://soundcloud.com/")

    # Collect all <script src="..."> URLs
    script_urls = re.findall(r'src="(https://[^"]+\.js)"', html)

    # Try from last to first (newer bundles are more likely to contain client_id)
    for url in reversed(script_urls):
        try:
            js = fetch(url)
        except Exception:
            continue
        for pattern in [
            r'client_id\s*:\s*"([a-zA-Z0-9]{20,40})"',
            r'client_id:"([a-zA-Z0-9]{20,40})"',
            r'client_id=([a-zA-Z0-9]{20,40})\b',
        ]:
            m = re.search(pattern, js)
            if m:
                print(f"found ({m.group(1)[:8]}…)")
                return m.group(1)

    raise RuntimeError(
        "Could not extract client_id from SoundCloud scripts. "
        "SoundCloud may have changed their page structure."
    )


# ---------------------------------------------------------------------------
# SoundCloud API helpers
# ---------------------------------------------------------------------------
def resolve_playlist(playlist_url: str, client_id: str) -> dict:
    api = (
        "https://api-v2.soundcloud.com/resolve"
        f"?url={urllib.parse.quote(playlist_url, safe='')}"
        f"&client_id={client_id}"
    )
    return json.loads(fetch(api))


def fetch_tracks_by_ids(ids: list, client_id: str) -> list:
    """Batch-fetch full track objects by IDs (max 50 per request)."""
    result = []
    for i in range(0, len(ids), 50):
        batch = ",".join(str(x) for x in ids[i:i + 50])
        url = f"https://api-v2.soundcloud.com/tracks?ids={batch}&client_id={client_id}"
        resp = json.loads(fetch(url))
        result.extend(resp if isinstance(resp, list) else [])
        print(f"\r  Fetched {len(result)} tracks…", end="", flush=True)
    return result


def fetch_all_tracks(playlist: dict, client_id: str) -> list:
    """
    Extract all tracks from an already-resolved playlist dict.

    SoundCloud returns tracks directly in the resolved playlist object.
    Full track objects have 'permalink_url'; stubs have only 'id'.
    Stubs are batch-fetched via /tracks?ids=...
    """
    raw_tracks = playlist.get("tracks") or []

    full   = [t for t in raw_tracks if t.get("permalink_url")]
    stubs  = [t["id"] for t in raw_tracks if not t.get("permalink_url") and t.get("id")]
    print(f"\r  {len(full)} full tracks, {len(stubs)} stubs to fetch…", end="", flush=True)

    if stubs:
        fetched = fetch_tracks_by_ids(stubs, client_id)
        # Build lookup by id to preserve playlist order
        fetched_map = {t["id"]: t for t in fetched}
        full_set = {t["id"] for t in full}
        for t in raw_tracks:
            tid = t.get("id")
            if tid and tid not in full_set and tid in fetched_map:
                full.append(fetched_map[tid])

    # Restore original playlist order
    order = {t.get("id"): i for i, t in enumerate(raw_tracks)}
    full.sort(key=lambda t: order.get(t.get("id"), 9999))

    print(f"\r  Fetched {len(full)} tracks total.   ")
    return full


# ---------------------------------------------------------------------------
# Name/tag formatting helpers
# ---------------------------------------------------------------------------
def escape_js_string(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def title_case_words(text: str) -> str:
    small_words = {"a", "an", "and", "as", "at", "by", "for", "from", "in", "of", "on", "or", "the", "to", "vs"}
    uppercase_words = {"nes", "snes", "n64", "gba", "gb", "gc", "wii", "wiiu", "ds", "3ds", "cdi", "hd", "ost"}
    tokens = re.split(r"(\s+)", text.strip())
    out = []
    word_index = 0
    words_only = [t for t in tokens if t.strip() and not t.isspace()]

    for t in tokens:
        if not t.strip() or t.isspace():
            out.append(t)
            continue

        token = t
        lower = token.lower()
        is_first = word_index == 0
        is_last = word_index == len(words_only) - 1

        if re.fullmatch(r"[ivxlcdm]+", lower):
            out.append(lower.upper())
        elif lower in uppercase_words:
            out.append(lower.upper())
        elif not is_first and not is_last and lower in small_words:
            out.append(lower)
        else:
            out.append(token[:1].upper() + token[1:].lower())

        word_index += 1

    return "".join(out)


def song_name_from_url(track_url: str) -> str:
    clean = track_url.split("?", 1)[0].rstrip("/")
    slug = clean.rsplit("/", 1)[-1]
    slug = slug.replace("_", "-")
    slug = re.sub(r"[^a-zA-Z0-9\-]+", "-", slug)
    slug = re.sub(r"-{2,}", "-", slug).strip("-")
    words = [w for w in slug.split("-") if w]
    while words and words[0].lower() in {"nes", "snes", "n64", "gba", "gb", "gc", "wii", "wiiu", "switch", "3ds", "ds", "cdi"}:
        words.pop(0)
    if not words:
        return "Unknown Track"
    return title_case_words(" ".join(words))


def game_name_from_playlist_title(title: str) -> str:
    game = re.sub(r"\b(OST|Original\s+Soundtrack|Soundtrack|Album|Playlist)\b", "", title, flags=re.IGNORECASE)
    game = re.sub(r"^\s*(?:The\s+)?Legend\s+of\s+Zelda\b\s*(?:[:\-]\s*)?", "", game, flags=re.IGNORECASE)
    game = re.sub(r"\s{2,}", " ", game).strip(" -")
    if re.fullmatch(r"\([^\)]+\)", game):
        game = game.strip("() ")
    if not game:
        return "Unknown Game"
    game = title_case_words(game)
    game = re.sub(r"\(([a-zA-Z0-9]{2,5})\)", lambda m: f"({m.group(1).upper()})", game)
    return game


def infer_tags(song_name: str, game_name: str, original_title: str) -> list:
    text = f"{song_name} {game_name} {original_title}".lower()
    tags = []

    def add(tag):
        if tag not in tags:
            tags.append(tag)

    if re.search(r"\b(battle|boss|fight|duel|combat|enemy|final\s+boss)\b", text):
        add("Battle")

    if re.search(r"\b(town|village|market|shop|inn|stable|bazaar|ranch|city|milk\s*bar)\b", text):
        add("Town")

    if re.search(r"\b(dungeon|temple|palace|shrine|cave|crypt|catacomb|fort|hideout|ruins|tower|labyrinth)\b", text):
        add("Dungeon")

    if re.search(r"\b(story|prologue|epilogue|fanfare|jingle|secret|rescue|event|cutscene|cinematic|scene|our\s+story\s+begins)\b", text):
        add("Event")

    if re.search(r"\b(link|zelda|ganondorf|midna|impa|hilda|yuga|fi|linebeck|epona|hylia)\b", text):
        add("Character")

    if re.search(r"\b(overworld|field|forest|woods|mountain|lake|river|desert|island|sea|volcano|valley|hyrule|lorule|skyloft|hytopia|castle)\b", text):
        add("Area")

    if re.search(r"\b(main\s*theme|theme|title|menu|ending|credits|staff\s*roll|game\s*over|opening|intro)\b", text):
        add("Other")

    if not tags:
        add("Event")

    return tags


# ---------------------------------------------------------------------------
# music-links.js patching
# ---------------------------------------------------------------------------
def detect_first_empty_id(content: str):
    """Return the answer ID of the first entry with url: \"\"."""
    m = re.search(r'url:\s*"",\s*[\r\n]+\s*answer:\s*(\d+)', content)
    return int(m.group(1)) if m else None


def detect_max_answer_id(content: str):
    """Return the maximum answer ID currently present in music-links.js."""
    ids = [int(x) for x in re.findall(r'answer:\s*(\d+),', content)]
    return max(ids) if ids else -1


def replace_placeholder(content: str, answer_id: int, track_url: str):
    """
    Replace the empty url inside the object with answer_id.
    Returns updated content or None if not found.
    """
    # Build the exact substring to find (try both LF and CRLF)
    for nl in ("\n", "\r\n"):
        old = f'url: "",{nl}        answer: {answer_id},'
        if old in content:
            new = f'url: "{track_url}",{nl}        answer: {answer_id},'
            return content.replace(old, new, 1)
    return None


def append_placeholder_entry(content: str, answer_id: int) -> str:
    """Append a new placeholder object before the final array closing bracket."""
    nl = "\r\n" if "\r\n" in content else "\n"
    close_pos = content.rfind("];")
    if close_pos == -1:
        raise RuntimeError("Could not find array closing bracket in music-links.js")

    entry = (
        f"    {{{nl}"
        f"        url: \"\",{nl}"
        f"        answer: {answer_id},{nl}"
        f"    }},{nl}"
    )

    return content[:close_pos] + entry + content[close_pos:]


def update_music_list_entry(content: str, answer_id: int, full_name: str, tags: list):
    """
    Update the object with id == answer_id in music-list.js.
    Returns updated content or None if entry not found.
    """
    tags_str = ", ".join(f'"{escape_js_string(t)}"' for t in tags)
    tags_literal = f"[{tags_str}]"

    pattern = re.compile(
        rf'(\{{\s*[\r\n]+\s*id:\s*{answer_id},\s*[\r\n]+\s*name:\s*")([^"]*)(",\s*[\r\n]+\s*tags:\s*)(\[[^\]]*\])(\s*,\s*[\r\n]+\s*\}},)',
        re.MULTILINE,
    )

    def repl(m):
        return f"{m.group(1)}{escape_js_string(full_name)}{m.group(3)}{tags_literal}{m.group(5)}"

    updated, count = pattern.subn(repl, content, count=1)
    return updated if count == 1 else None


def append_music_list_placeholder(content: str, answer_id: int) -> str:
    """Append a new placeholder object before the final array closing bracket."""
    nl = "\r\n" if "\r\n" in content else "\n"
    close_pos = content.rfind("];")
    if close_pos == -1:
        raise RuntimeError("Could not find array closing bracket in music-list.js")

    entry = (
        f"    {{{nl}"
        f"        id: {answer_id},{nl}"
        f"        name: \"\",{nl}"
        f"        tags: [],{nl}"
        f"    }},{nl}"
    )

    return content[:close_pos] + entry + content[close_pos:]


def insert_comment(content: str, item_id: int, game_name: str, playlist_url: str, key_name: str) -> str:
    """Insert a // comment block just before the object with the given id/answer."""
    comment = f"    // {game_name}\n    // {playlist_url}\n"
    needle = f"{key_name}: {item_id},"
    pos = content.find(needle)
    if pos == -1:
        return content
    brace_pos = content.rfind("    {", 0, pos)
    if brace_pos == -1:
        return content
    return content[:brace_pos] + comment + content[brace_pos:]


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    opts = parse_args(sys.argv[1:])

    if not opts["playlist_url"]:
        print(__doc__)
        sys.exit(0)

    min_ms = opts["min_duration"] * 1000

    # --- Step 1: client_id ---
    client_id = get_client_id()

    # --- Step 2: Resolve playlist ---
    print(f"Resolving: {opts['playlist_url']}")
    playlist = resolve_playlist(opts["playlist_url"], client_id)
    if not playlist or "id" not in playlist:
        print("ERROR: Could not resolve playlist. Got:", json.dumps(playlist)[:300])
        sys.exit(1)

    track_count = playlist.get("track_count") or len(playlist.get("tracks", []))
    print(f"Playlist : \"{playlist['title']}\" — {track_count} tracks")

    # --- Step 3: Fetch tracks ---
    print("Fetching track list:")
    all_tracks = fetch_all_tracks(playlist, client_id)

    # --- Step 4: Filter by duration ---
    def keep(t):
        dur = t.get("duration")
        return dur is None or dur >= min_ms   # keep if duration unknown

    tracks = [t for t in all_tracks if keep(t)]
    skipped = len(all_tracks) - len(tracks)
    print(
        f"Tracks   : {len(all_tracks)} total, "
        f"{skipped} skipped (< {opts['min_duration']}s), "
        f"{len(tracks)} to fill"
    )

    if not tracks:
        print("Nothing to fill.")
        sys.exit(0)

    # --- Step 5: Determine start ID ---
    links_content = MUSIC_LINKS_PATH.read_text(encoding="utf-8")
    list_content = MUSIC_LIST_PATH.read_text(encoding="utf-8")
    start_id = opts["start_id"]
    if start_id is None:
        start_id = detect_first_empty_id(links_content)
        if start_id is None:
            start_id = detect_max_answer_id(links_content) + 1
            print(f"Start ID : {start_id} (no empty slots found; appending new placeholders)")
        else:
            print(f"Start ID : {start_id} (auto-detected)")
    else:
        print(f"Start ID : {start_id} (from --start-id)")

    # --- Step 6: Apply replacements ---
    print()
    filled   = []
    created_link_placeholders = []
    created_name_placeholders = []
    cur_id   = start_id
    game_name = game_name_from_playlist_title(playlist.get("title", ""))

    for track in tracks:
        user_slug  = (track.get("user") or {}).get("permalink", "unknown")
        track_slug = track.get("permalink", "unknown")
        url = (
            track.get("permalink_url")
            or f"https://soundcloud.com/{user_slug}/{track_slug}"
        )
        title = track.get("title", "(no title)")
        dur_s = f"{track['duration'] // 1000}s" if track.get("duration") else "?s"
        song_name = song_name_from_url(url)
        full_name = f"{song_name} - {game_name}"
        tags = infer_tags(song_name, game_name, title)
        print(f"  [{cur_id}] {title} ({dur_s})")
        print(f"       → {url}")
        print(f"       name: {full_name}")
        print(f"       tags: {tags}")

        updated = replace_placeholder(links_content, cur_id, url)
        if updated is None:
            links_content = append_placeholder_entry(links_content, cur_id)
            created_link_placeholders.append(cur_id)
            updated = replace_placeholder(links_content, cur_id, url)
            if updated is None:
                raise RuntimeError(f"Failed to fill newly created placeholder for answer {cur_id}")
        links_content = updated

        updated_list = update_music_list_entry(list_content, cur_id, full_name, tags)
        if updated_list is None:
            list_content = append_music_list_placeholder(list_content, cur_id)
            created_name_placeholders.append(cur_id)
            updated_list = update_music_list_entry(list_content, cur_id, full_name, tags)
            if updated_list is None:
                raise RuntimeError(f"Failed to fill newly created music-list entry for id {cur_id}")
        list_content = updated_list

        filled.append(cur_id)

        cur_id += 1

    # --- Step 7: Optionally insert comment block ---
    if opts["add_comment"] and filled:
        links_content = insert_comment(links_content, filled[0], game_name, opts["playlist_url"], "answer")
        list_content = insert_comment(list_content, filled[0], game_name, opts["playlist_url"], "id")

    # --- Summary ---
    print()
    if filled:
        print(f"Filled   : {len(filled)} entries (IDs {filled[0]}–{filled[-1]})")
    if created_link_placeholders:
        print(f"Links +  : {len(created_link_placeholders)} new placeholder(s) — {created_link_placeholders}")
    if created_name_placeholders:
        print(f"Names +  : {len(created_name_placeholders)} new placeholder(s) — {created_name_placeholders}")
    print(f"Next open: {cur_id}")

    if opts["dry_run"]:
        print("\n[dry-run] No changes written.")
        return

    MUSIC_LINKS_PATH.write_text(links_content, encoding="utf-8")
    MUSIC_LIST_PATH.write_text(list_content, encoding="utf-8")
    print(f"\nWrote {MUSIC_LINKS_PATH}")
    print(f"Wrote {MUSIC_LIST_PATH}")


if __name__ == "__main__":
    main()
