#!/usr/bin/env python3
"""
cleanup-music-ids.py

Normalizes ID holes across:
- music-list.js   (id)
- music-links.js  (answer)

Behavior:
1. Reads IDs from music-list.js in file order.
2. Renumbers them to be contiguous (shifts holes), starting from the first ID in file.
3. Updates music-list.js IDs to the new contiguous sequence.
4. Updates music-links.js answers using the same old->new mapping.
5. Removes music-links.js entries whose answer ID is not present in the original
   music-list.js IDs.

Usage:
    python cleanup-music-ids.py [--dry-run]
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
MUSIC_LIST_PATH = ROOT / "music-list.js"
MUSIC_LINKS_PATH = ROOT / "music-links.js"


def renumber_list_ids(list_text: str):
    """
    Return:
    - updated list text
    - old IDs in file order
    - new IDs in file order
    - old->new mapping
    """
    id_matches = list(re.finditer(r"(\bid:\s*)(\d+)(\s*,)", list_text))
    if not id_matches:
        raise RuntimeError("No 'id' entries found in music-list.js")

    old_ids = [int(m.group(2)) for m in id_matches]

    # IDs should be unique in music-list; enforce to avoid ambiguous mapping.
    if len(old_ids) != len(set(old_ids)):
        dupes = sorted({x for x in old_ids if old_ids.count(x) > 1})
        raise RuntimeError(f"Duplicate ids in music-list.js; cannot build safe mapping: {dupes[:10]}")

    start = old_ids[0]
    new_ids = list(range(start, start + len(old_ids)))
    id_map = {old: new for old, new in zip(old_ids, new_ids)}

    parts = []
    cursor = 0
    for m, new_id in zip(id_matches, new_ids):
        parts.append(list_text[cursor:m.start(2)])
        parts.append(str(new_id))
        cursor = m.end(2)
    parts.append(list_text[cursor:])

    return "".join(parts), old_ids, new_ids, id_map


def update_links_text(links_text: str, valid_old_ids: set[int], id_map: dict[int, int]):
    """
    Update answer IDs and remove link objects that reference IDs not present in
    original music-list IDs.

    Returns:
    - updated links text
    - kept count
    - removed count
    - updated count (answer changed)
    """
    obj_pattern = re.compile(r"\{[\s\S]*?\banswer:\s*(\d+)\s*,[\s\S]*?\},\s*", re.MULTILINE)

    pieces = []
    cursor = 0
    kept = 0
    removed = 0
    updated = 0

    for m in obj_pattern.finditer(links_text):
        block = m.group(0)
        old_answer = int(m.group(1))

        pieces.append(links_text[cursor:m.start()])

        if old_answer not in valid_old_ids:
            removed += 1
        else:
            new_answer = id_map[old_answer]
            if new_answer != old_answer:
                updated += 1
            block = re.sub(r"(\banswer:\s*)\d+(\s*,)", rf"\g<1>{new_answer}\2", block, count=1)
            pieces.append(block)
            kept += 1

        cursor = m.end()

    pieces.append(links_text[cursor:])
    return "".join(pieces), kept, removed, updated


def count_holes(ids: list[int]) -> int:
    if not ids:
        return 0
    s = set(ids)
    return sum(1 for i in range(min(ids), max(ids) + 1) if i not in s)


def main() -> int:
    parser = argparse.ArgumentParser(description="Normalize ID holes in music list/links")
    parser.add_argument("--dry-run", action="store_true", help="Preview changes without writing files")
    args = parser.parse_args()

    if not MUSIC_LIST_PATH.exists() or not MUSIC_LINKS_PATH.exists():
        print("ERROR: music-list.js and/or music-links.js not found next to this script")
        return 1

    list_text = MUSIC_LIST_PATH.read_text(encoding="utf-8")
    links_text = MUSIC_LINKS_PATH.read_text(encoding="utf-8")

    old_list_ids = [int(x) for x in re.findall(r"\bid:\s*(\d+)\s*,", list_text)]
    old_links_answers = [int(x) for x in re.findall(r"\banswer:\s*(\d+)\s*,", links_text)]

    new_list_text, old_ids, new_ids, id_map = renumber_list_ids(list_text)
    valid_old_ids = set(old_ids)

    new_links_text, kept, removed, updated = update_links_text(links_text, valid_old_ids, id_map)

    old_holes = count_holes(old_ids)
    new_holes = count_holes(new_ids)

    print(f"music-list.js: {len(old_ids)} ids, holes before={old_holes}, holes after={new_holes}")
    print(f"music-links.js: {len(old_links_answers)} answers, kept={kept}, removed={removed}, answers shifted={updated}")

    if args.dry_run:
        print("[dry-run] No files written.")
        return 0

    MUSIC_LIST_PATH.write_text(new_list_text, encoding="utf-8")
    MUSIC_LINKS_PATH.write_text(new_links_text, encoding="utf-8")

    print(f"Wrote {MUSIC_LIST_PATH}")
    print(f"Wrote {MUSIC_LINKS_PATH}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
