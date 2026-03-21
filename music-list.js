const allTags = ["Battle", "Town", "Dungeon", "Event", "Character", "Area", "Other"];

var musicNameList = [
    // The Legend of Zelda
    // https://soundcloud.com/zelda-soundtracks/sets/legend-of-zelda-nes
    {
        id: 0,
        name: "Death Mountain - The Legend of Zelda",
        tags: ["Dungeon"],
    },
    {
        id: 1,
        name: "Dungeon - The Legend of Zelda",
        tags: ["Dungeon"],
    },
    {
        id: 2,
        name: "Overworld - The Legend of Zelda",
        tags: ["Area"],
    },
    {
        id: 3,
        name: "Intro/Main Theme - The Legend of Zelda",
        tags: ["Other"],
    },
    {
        id: 4,
        name: "Ending Theme - The Legend of Zelda",
        tags: ["Other"],
    },
    {
        id: 5,
        name: "Menu/Game Over - The Legend of Zelda",
        tags: ["Other", "Event"],
    },
    // The Adventure of Link
    // https://soundcloud.com/zhtotk2
    {
        id: 6,
        name: "Battle Theme - The Adventure of Link",
        tags: ["Battle"],
    },
    {
        id: 7,
        name: "Boss Battle - The Adventure of Link",
        tags: ["Battle"],
    },
    {
        id: 8,
        name: "Dark Link Battle - The Adventure of Link",
        tags: ["Battle"],
    },
    {
        id: 9,
        name: "Ending Theme - The Adventure of Link",
        tags: ["Other"],
    },
    {
        id: 10,
        name: "Ending Theme - Part 2 - The Adventure of Link",
        tags: ["Other"],
    },
    {
        id: 11,
        name: "Great Palace - The Adventure of Link",
        tags: ["Dungeon"],
    },
    {
        id: 12,
        name: "Inside a House - The Adventure of Link",
        tags: ["Area", "Town"],
    },
    {
        id: 13,
        name: "Overworld - The Adventure of Link",
        tags: ["Area"],
    },
    {
        id: 14,
        name: "Palace - The Adventure of Link",
        tags: ["Dungeon"],
    },
    {
        id: 15,
        name: "Title Screen/Prologue - The Adventure of Link",
        tags: ["Other"],
    },
    {
        id: 16,
        name: "Town - The Adventure of Link",
        tags: ["Town"],
    },
    //// A Link to the Past
    // https://soundcloud.com/anderouspi/sets/the-legend-of-zelda-a-link-to-the-past
    {
        id: 17,
        name: "Cave - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 18,
        name: "Forest of Mystery (Lost Woods) - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 19,
        name: "Hyrule Castle - A Link to the Past",
        tags: ["Dungeon"],
    },
    {
        id: 20,
        name: "Overworld - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 21,
        name: "Princess Zelda's Rescue - A Link to the Past",
        tags: ["Event", "Character"],
    },
    {
        id: 22,
        name: "Dark World - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 23,
        name: "Beautiful Hyrule (Ending Theme) - A Link to the Past",
        tags: ["Other"],
    },
    {
        id: 24,
        name: "Boss Battle - A Link to the Past",
        tags: ["Battle"],
    },
    {
        id: 25,
        name: "Soldier's Chase - A Link to the Past",
        tags: ["Battle", "Event"],
    },
    {
        id: 26,
        name: "Dark Dungeon - A Link to the Past",
        tags: ["Dungeon"],
    },
    {
        id: 27,
        name: "Death Mountain/Forest - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 28,
        name: "File Select/Fairy's Fountain - A Link to the Past",
        tags: ["Area", "Other"],
    },
    {
        id: 29,
        name: "Fortune Teller - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 30,
        name: "Ganon Battle - A Link to the Past",
        tags: ["Battle"],
    },
    {
        id: 31,
        name: "Guessing-Game House - A Link to the Past",
        tags: ["Area", "Town"],
    },
    {
        id: 32,
        name: "Sanctuary - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 33,
        name: "Kakariko Village - A Link to the Past",
        tags: ["Town"],
    },
    {
        id: 34,
        name: "Dungeon - A Link to the Past",
        tags: ["Dungeon"],
    },
    {
        id: 35,
        name: "Maiden's Rescue - A Link to the Past",
        tags: ["Event"],
    },
    {
        id: 36,
        name: "Time of the Falling Rain - A Link to the Past",
        tags: ["Area", "Event"],
    },
    {
        id: 37,
        name: "A Rabbit in the Dark World - A Link to the Past",
        tags: ["Area", "Event"],
    },
    {
        id: 38,
        name: "Ganon - A Link to the Past",
        tags: ["Character", "Event"],
    },
    {
        id: 39,
        name: "Prologue Theme - Seal of the Seven Maidens - A Link to the Past",
        tags: ["Other"],
    },
    {
        id: 40,
        name: "Triforce Room - A Link to the Past",
        tags: ["Area", "Event"],
    },
    {
        id: 41,
        name: "Title Theme - A Link to the Past",
        tags: ["Other"],
    },
    {
        id: 42,
        name: "Staff Credits (Ending Theme - Part 2) - A Link to the Past",
        tags: ["Other"],
    },
    // Link's Awakening
    // https://soundcloud.com/kevhann/sets/disc-3-gb-the-legend-of-zelda-links-awakening-ost-rare-4-disc-switchgb
    // https://soundcloud.com/kevhann/sets/disc-4-gb-the-legend-of-zelda-links-awakening-ost-rare-4-disc-switchgb
    {
        id: 43,
        name: "Prologue Theme - Link's Awakening",
        tags: ["Other", "Event"],
    },
    {
        id: 44,
        name: "Opening/Title Theme - Link's Awakening",
        tags: ["Other", "Event"],
    },
    {
        id: 45,
        name: "Menu - Link's Awakening",
        tags: ["Other"],
    },
    {
        id: 46,
        name: "Waking Up at Talin's House - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 47,
        name: "Owl - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 48,
        name: "Overworld - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 49,
        name: "Mabe Village - Link's Awakening",
        tags: ["Town"],
    },
    {
        id: 50,
        name: "Mysterious Forest - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 51,
        name: "Guardian Acorn - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 52,
        name: "Shop - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 53,
        name: "Fairy's Fountain - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 54,
        name: "Trendy Game - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 55,
        name: "Inside a House - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 56,
        name: "Ballad of the Wind Fish (Marin) - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 57,
        name: "Cave - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 58,
        name: "Level 1 - Tail Cave - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 59,
        name: "Underground Passage - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 60,
        name: "Mini Boss Battle - Link's Awakening",
        tags: ["Battle"],
    },
    {
        id: 61,
        name: "Boss Battle - Link's Awakening",
        tags: ["Battle"],
    },
    {
        id: 62,
        name: "Victory Fanfare - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 63,
        name: "Rescue Bow Wow Mission - Link's Awakening",
        tags: ["Event", "Battle"],
    },
    {
        id: 64,
        name: "Mr. Write's House - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 65,
        name: "Telephone Booth - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 66,
        name: "Level 2 - Bottle Grotto - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 67,
        name: "Richard's Villa - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 68,
        name: "Kiki's Bridge - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 69,
        name: "Kanalet Castle - Link's Awakening",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 70,
        name: "Level 3 - Key Cave - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 71,
        name: "Chased by Bees - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 72,
        name: "Animal Village - Link's Awakening",
        tags: ["Town"],
    },
    {
        id: 73,
        name: "Christine's House - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 74,
        name: "Dream Shrine - Link's Awakening",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 75,
        name: "Ballad of the Wind Fish (Shore) - Link's Awakening",
        tags: ["Event", "Area"],
    },
    {
        id: 76,
        name: "Ballad of the Wind Fish - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 77,
        name: "Tal Tal Heights - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 78,
        name: "Level 4 - Angler's Tunnel - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 79,
        name: "Manbo's Mambo - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 80,
        name: "House by the Cove - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 81,
        name: "Under the Bridge - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 82,
        name: "Level 5 - Catfish's Maw - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 83,
        name: "Frog's Song of Soul - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 84,
        name: "Southern Face Shrine - Link's Awakening",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 85,
        name: "Level 6 - Face Shrine - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 86,
        name: "Color Dungeon - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 87,
        name: "Cucco House - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 88,
        name: "Level 7 - Eagle's Tower - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 89,
        name: "Turtle Rock Battle - Link's Awakening",
        tags: ["Battle"],
    },
    {
        id: 90,
        name: "Level 8 - Turtle Rock - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 91,
        name: "Rapids Ride - Link's Awakening",
        tags: ["Event", "Area"],
    },
    {
        id: 92,
        name: "Ballad of the Wind Fish (Instruments) - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 93,
        name: "Wind Fish's Egg - Link's Awakening",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 94,
        name: "Shadow Nightmare - Link's Awakening",
        tags: ["Character", "Event"],
    },
    {
        id: 95,
        name: "Shadow Nightmare Battle - Link's Awakening",
        tags: ["Battle"],
    },
    {
        id: 96,
        name: "Victory Fanfare (Shadow Nightmare) - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 97,
        name: "Epilogue Theme (Koholint Island Disappears) - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 98,
        name: "Ending Theme - Link's Awakening",
        tags: ["Other"],
    },
    {
        id: 99,
        name: "Game Over - Link's Awakening",
        tags: ["Other", "Event"],
    },
    {
        id: 100,
        name: "Menu (Totakeke) - Link's Awakening",
        tags: ["Other"],
    },
    {
        id: 101,
        name: "Menu (Zelda) - Link's Awakening",
        tags: ["Other"],
    },
    {
        id: 102,
        name: "Sword Search on the Beach - Link's Awakening",
        tags: ["Area", "Event"],
    },
    {
        id: 103,
        name: "The Wind Fish - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 104,
        name: "Menu (Lolo) - Link's Awakening",
        tags: ["Other"],
    },
    {
        id: 105,
        name: "Menu (Moyse) - Link's Awakening",
        tags: ["Other"],
    },
    // Ocarina of Time
    // https://soundcloud.com/ocarina-of-time-ost/sets/ocarina-of-time-ost
    // https://soundcloud.com/moi666007/sets/tloz-oot
    {
        id: 106,
        name: "Title Theme - Ocarina of Time",
        tags: ["Other"],
    },
    {
        id: 107,
        name: "Ganondorf (Entrance) - Ocarina of Time",
        tags: ["Character", "Event"],
    },
    {
        id: 108,
        name: "Great Deku Tree - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 109,
        name: "Navi the Fairy - Ocarina of Time",
        tags: ["Event", "Character"],
    },
    {
        id: 110,
        name: "Inside a House - Ocarina of Time",
        tags: ["Area", "Town"],
    },
    {
        id: 111,
        name: "Kokiri Forest - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 112,
        name: "Shop - Ocarina of Time",
        tags: ["Area", "Town"],
    },
    {
        id: 113,
        name: "Kaepora Gaebora - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 114,
        name: "Shooting Gallery - Ocarina of Time",
        tags: ["Area", "Town"],
    },
    {
        id: 115,
        name: "Hyrule Market - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 116,
        name: "Hyrule Castle Courtyard - Ocarina of Time",
        tags: ["Area", "Town"],
    },
    {
        id: 117,
        name: "Kakariko Village - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 118,
        name: "Zelda's Lullaby - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 119,
        name: "Lon Lon Ranch - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 120,
        name: "Mini Game - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 121,
        name: "Goron City - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 122,
        name: "File Select/Fairy's Fountain - Ocarina of Time",
        tags: ["Area", "Other"],
    },
    {
        id: 123,
        name: "Middle Boss Battle - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 124,
        name: "Potion Shop - Ocarina of Time",
        tags: ["Area", "Town"],
    },
    {
        id: 125,
        name: "Lost Woods - Ocarina of Time",
        tags: ["Area"],
    },
    {
        id: 126,
        name: "Dodongo Boss Battle - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 127,
        name: "Temple of Time - Ocarina of Time",
        tags: ["Area"],
    },
    {
        id: 128,
        name: "Dodongo's Cavern - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 129,
        name: "Zora's Domain - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 130,
        name: "Inside Jabu Jabu's Belly - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 131,
        name: "Chamber of the Sages - Ocarina of Time",
        tags: ["Area", "Event"],
    },
    {
        id: 132,
        name: "Ganondorf - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 133,
        name: "Sheik - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 134,
        name: "Boss Battle - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 135,
        name: "The Legend of Hyrule - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 136,
        name: "Inside the Great Deku Tree - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 137,
        name: "Battle - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 138,
        name: "Shadow Temple - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 139,
        name: "Requiem of Spirit - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 140,
        name: "Gerudo Valley - Ocarina of Time",
        tags: ["Area"],
    },
    {
        id: 141,
        name: "Water Temple - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 142,
        name: "Spirit Temple - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 143,
        name: "Ice Cavern - Ocarina of Time",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 144,
        name: "Bolero of Fire - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 145,
        name: "Serenade of Water - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 146,
        name: "Prelude of Light - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 147,
        name: "Forest Temple - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 148,
        name: "Ingo - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 149,
        name: "Windmill Hut/Song of Storms - Ocarina of Time",
        tags: ["Area", "Event", "Town"],
    },
    {
        id: 150,
        name: "Kakariko Village (Orchestra) - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 151,
        name: "Minuet of Forest - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 152,
        name: "Horse Race - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 153,
        name: "Koume and Kotake - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 154,
        name: "Meeting Again with Zelda - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 155,
        name: "Ganon's Castle Bridge - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 156,
        name: "Ganon's Castle - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 157,
        name: "Ganon's Tower - Ocarina of Time",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 158,
        name: "Ganondorf Battle - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 159,
        name: "Escape from Ganon's Castle - Ocarina of Time",
        tags: ["Event", "Area"],
    },
    {
        id: 160,
        name: "Ganon Battle (Final Battle) - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 161,
        name: "Seal of the Seven Sages - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 162,
        name: "Zelda's Last Good-bye - Ocarina of Time",
        tags: ["Event", "Character"],
    },
    {
        id: 163,
        name: "Ending Theme - Ocarina of Time",
        tags: ["Other"],
    },
    {
        id: 164,
        name: "Hyrule Field - Ocarina of Time",
        tags: ["Area"],
    },
    {
        id: 165,
        name: "Nocturne of Shadow - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 166,
        name: "Ending Theme/Staff Credits - Ocarina of Time",
        tags: ["Other"],
    },
    {
        id: 167,
        name: "Fire Temple - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 168,
        name: "Fire Temple (Beta version) - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 169,
        name: "Trailer Theme - Riders of Doom - Ocarina of Time",
        tags: ["Other"],
    },
    {
        id: 170,
        name: "Lon Lon Ranch (Orchestra) - Ocarina of Time",
        tags: ["Town"],
    },
    // Majora's Mask
    // https://soundcloud.com/code-masterv/sets/the-legend-of-zelda-majoras-mask
    // https://soundcloud.com/tas-runs/sets/majoras-mask-japanese-ost
    {
        id: 171,
        name: "Title Theme - Majora's Mask",
        tags: ["Other"],
    },
    {
        id: 172,
        name: "Opening Theme - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 173,
        name: "Chase - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 174,
        name: "Cave - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 175,
        name: "Majora - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 176,
        name: "Clock Tower - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 177,
        name: "Happy Mask Salesman - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 178,
        name: "Clock Town - First Day - Majora's Mask",
        tags: ["Town"],
    },
    {
        id: 179,
        name: "Mayor's Meeting - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 180,
        name: "Milk Bar - Majora's Mask",
        tags: ["Area", "Town"],
    },
    {
        id: 181,
        name: "Clock Town - Second Day - Majora's Mask",
        tags: ["Town"],
    },
    {
        id: 182,
        name: "Kamaro - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 183,
        name: "Swordsman's School - Majora's Mask",
        tags: ["Area", "Town"],
    },
    {
        id: 184,
        name: "Clock Town - Third Day - Majora's Mask",
        tags: ["Town"],
    },
    {
        id: 185,
        name: "Keaton - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 186,
        name: "Rosa Sisters - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 187,
        name: "Final Hours - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 188,
        name: "Astral Observatory - Majora's Mask",
        tags: ["Area", "Town"],
    },
    {
        id: 189,
        name: "Song of Healing - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 190,
        name: "Termina Field - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 191,
        name: "Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 192,
        name: "Southern Swamp - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 193,
        name: "Boat Cruise - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 194,
        name: "Deku Palace - Majora's Mask",
        tags: ["Area", "Town"],
    },
    {
        id: 195,
        name: "Sonata of Awakening - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 196,
        name: "Woodfall Temple - Majora's Mask",
        tags: ["Dungeon"],
    },
    {
        id: 197,
        name: "Middle Boss Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 198,
        name: "Calling the Four Giants - Majora's Mask",
        tags: ["Event", "Character"],
    },
    {
        id: 199,
        name: "Oath to Order - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 200,
        name: "Goron Lullaby - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 201,
        name: "Snowhead Temple - Majora's Mask",
        tags: ["Dungeon"],
    },
    {
        id: 202,
        name: "Boss Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 203,
        name: "Goron Race - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 204,
        name: "Frog Song - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 205,
        name: "Ghosts Raid - Majora's Mask",
        tags: ["Event", "Battle"],
    },
    {
        id: 206,
        name: "Cremia - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 207,
        name: "Great Bay Coast - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 208,
        name: "Pirate Fortress - Majora's Mask",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 209,
        name: "Zora Band - Piano Practice - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 210,
        name: "Zora Band - Bass & Guitar Session - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 211,
        name: "Zora Band - Piano Solo - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 212,
        name: "New Wave Bossa Nova - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 213,
        name: "Great Bay Temple - Majora's Mask",
        tags: ["Dungeon"],
    },
    {
        id: 214,
        name: "Ballad of the Wind Fish - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 215,
        name: "Sharp's Curse - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 216,
        name: "Music Box House - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 217,
        name: "Elegy of Emptiness - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 218,
        name: "Stone Tower Temple - Majora's Mask",
        tags: ["Dungeon"],
    },
    {
        id: 219,
        name: "Stone Tower Temple (Inverted) - Majora's Mask",
        tags: ["Dungeon"],
    },
    {
        id: 220,
        name: "The Moon Decends - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 221,
        name: "Majora's Mask Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 222,
        name: "Majora's Incarnate Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 223,
        name: "Majora's Wrath Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 224,
        name: "Epilogue Theme (The Moon Disappears) - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 225,
        name: "Epilogue Theme (The Giants Exit) - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 226,
        name: "Ending Theme - Majora's Mask",
        tags: ["Other"],
    },
    {
        id: 227,
        name: "Zora Band - Bass Practice - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 228,
        name: "Zora Band - Drums Practice - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 229,
        name: "Happy Reunion - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 230,
        name: "Ikana Valley - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 231,
        name: "Ikana's Ancient Castle - Majora's Mask",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 232,
        name: "Mikau - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 233,
        name: "Snow Mountain - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 234,
        name: "Bremen March - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 235,
        name: "The Indigo-Go's - Majora's Mask",
        tags: ["Event", "Character"],
    },
    {
        id: 236,
        name: "Trailer Intro Theme - Majora's Mask",
        tags: ["Other"],
    },
    // Oracle of Ages/Seasons
    {
        id: 237,
        name: "Temple of Seasons - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 238,
        name: "Inside a House - Oracle of Ages/Seasons",
        tags: ["Area", "Town"],
    },
    {
        id: 239,
        name: "Game Over - Oracle of Ages/Seasons",
        tags: ["Event", "Other"],
    },
    {
        id: 240,
        name: "Veran - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 241,
        name: "Final Confrontation - Oracle of Ages/Seasons",
        tags: ["Event", "Battle"],
    },
    {
        id: 242,
        name: "Room of Rites - Oracle of Ages/Seasons",
        tags: ["Area", "Event"],
    },
    {
        id: 243,
        name: "Maku Tree - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 244,
        name: "Sadness - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 245,
        name: "Secret Maze on the Sea of No Returns - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 246,
        name: "Darkness Spreads - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 247,
        name: "The Pirates - Oracle of Ages/Seasons",
        tags: ["Character", "Area"],
    },
    {
        id: 248,
        name: "Date with Rosa - Oracle of Ages/Seasons",
        tags: ["Event", "Character"],
    },
    {
        id: 249,
        name: "Epilogue Theme - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 250,
        name: "Ending Theme - Oracle of Ages/Seasons",
        tags: ["Other"],
    },
    {
        id: 251,
        name: "Ending Theme - Part 2 - Oracle of Ages/Seasons",
        tags: ["Other"],
    },
    {
        id: 252,
        name: "Maple - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 253,
        name: "Rush for Maple's Items - Oracle of Ages/Seasons",
        tags: ["Event", "Character"],
    },
    {
        id: 254,
        name: "Boss Battle - Oracle of Ages/Seasons",
        tags: ["Battle"],
    },
    {
        id: 255,
        name: "Dark Dragon/Spider Veran Battle - Oracle of Ages/Seasons",
        tags: ["Battle"],
    },
    {
        id: 256,
        name: "Twinrova Battle - Oracle of Ages/Seasons",
        tags: ["Battle"],
    },
    {
        id: 257,
        name: "Ganon Battle - Oracle of Ages/Seasons",
        tags: ["Battle"],
    },
    {
        id: 258,
        name: "Zelda Awakens - Oracle of Ages/Seasons",
        tags: ["Event", "Character"],
    },
    {
        id: 259,
        name: "Great Moblin Keep - Oracle of Ages/Seasons",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 260,
        name: "Windmill Hut/Song of Storms - Oracle of Ages/Seasons",
        tags: ["Area", "Town"],
    },
    {
        id: 261,
        name: "Goron Mountain - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 262,
        name: "Intro Theme - Oracle of Ages/Seasons",
        tags: ["Other", "Event"],
    },
    {
        id: 263,
        name: "Ominous Message/Northern Peak - Oracle of Ages/Seasons",
        tags: ["Event", "Area"],
    },
    {
        id: 264,
        name: "Overworld (Past) - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 265,
        name: "Temple of Seasons - Ruins - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 266,
        name: "Tokay Island - Oracle of Ages/Seasons",
        tags: ["Area", "Town"],
    },
    {
        id: 267,
        name: "Tarm Ruins/Lost Woods - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 268,
        name: "Ambi's Palace - Oracle of Ages/Seasons",
        tags: ["Area", "Town"],
    },
    {
        id: 269,
        name: "Trouble on the Raft! - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 270,
        name: "Nayru's Song - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 271,
        name: "Dancing with Din - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 272,
        name: "Lynna City - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 273,
        name: "Lynna Village - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 274,
        name: "Horon Village - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 275,
        name: "Hide 'n' Seek - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 276,
        name: "Zora Village - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 277,
        name: "Sunken Village - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 278,
        name: "Level 0 (Ages) - Maku Road - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 279,
        name: "Level 1 (Ages) - Spirit's Grave - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 280,
        name: "Level 2 (Ages) - Wing Dungeon - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 281,
        name: "Level 3 (Ages) - Moonlit Grotto - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 282,
        name: "Level 4 (Ages) - Skull Dungeon - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 283,
        name: "Level 5 (Ages) - Crown Dungeon - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 284,
        name: "Level 6 (Ages) - Mermaid Cave - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 285,
        name: "Level 7 (Ages) - Jabu Jabu's Belly - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 286,
        name: "Level 8 (Ages) - Ancient Tomb - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 287,
        name: "Level 0 (Seasons) - Hero's Cave - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 288,
        name: "Level 1 (Seasons) - Gnarled Root Dungeon - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 289,
        name: "Level 2 (Seasons) - Snake's Remains - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 290,
        name: "Level 3 (Seasons) - Poison Moth's Lair - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 291,
        name: "Level 4 (Seasons) - Dancing Dragon Dungeon - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 292,
        name: "Level 5 (Seasons) - Unicorn's Cave - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 293,
        name: "Level 6 (Seasons) - Ancient Ruins - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 294,
        name: "Level 7 (Seasons) - Explorer's Crypt - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 295,
        name: "Level 8 (Seasons) - Sword & Shield Maze - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 296,
        name: "Under the Sea - Oracle of Ages/Seasons",
        tags: ["Event", "Area"],
    },
    {
        id: 297,
        name: "Subrosian Dance - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 298,
        name: "Symmetry City - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 299,
        name: "Symmetry City (Past) - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 300,
        name: "Ralph - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 301,
        name: "Subrosian House - Oracle of Ages/Seasons",
        tags: ["Town", "Area"],
    },
    {
        id: 302,
        name: "Tokay's House - Oracle of Ages/Seasons",
        tags: ["Town", "Area"],
    },
    {
        id: 303,
        name: "Black Tower - Oracle of Ages/Seasons",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 304,
        name: "Fairy Forest - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 305,
        name: "Samasa Desert - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 306,
        name: "Castle of Despair - Oracle of Ages/Seasons",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 307,
        name: "Sunken Pirate Ship - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    // Four Swords
    {
        id: 308,
        name: "Game Select/Ending Theme - Four Swords",
        tags: ["Other"],
    },
    {
        id: 309,
        name: "File Select/Great Fairy - Four Swords",
        tags: ["Other", "Area"],
    },
    {
        id: 310,
        name: "Labyrinth - Four Swords",
        tags: ["Dungeon"],
    },
    {
        id: 311,
        name: "Talus Cave - Four Swords",
        tags: ["Area"],
    },
    {
        id: 312,
        name: "Sea of Trees - Four Swords",
        tags: ["Area"],
    },
    {
        id: 313,
        name: "Death Mountain - Four Swords",
        tags: ["Area"],
    },
    {
        id: 314,
        name: "Vaati's Palace - Four Swords",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 315,
        name: "Boss Battle - Four Swords",
        tags: ["Battle"],
    },
    {
        id: 316,
        name: "Game Over - Four Swords",
        tags: ["Event"],
    },
    {
        id: 317,
        name: "Vaati Battle - Four Swords",
        tags: ["Battle"],
    },
    {
        id: 318,
        name: "Chamber of Insight - Four Swords",
        tags: ["Area"],
    },
    {
        id: 319,
        name: "Rupee Fever - Four Swords",
        tags: ["Event"],
    },
    {
        id: 320,
        name: "Battle - Four Swords",
        tags: ["Battle"],
    },
    {
        id: 321,
        name: "Prologue Theme - Four Swords",
        tags: ["Other", "Event"],
    },
    {
        id: 322,
        name: "Four Links - Four Swords",
        tags: ["Event", "Character"],
    },
    {
        id: 323,
        name: "Title Theme - Four Swords",
        tags: ["Other"],
    },
    {
        id: 324,
        name: "Princess Zelda - Four Swords",
        tags: ["Character"],
    },
    {
        id: 325,
        name: "Trap Room - Four Swords",
        tags: ["Event", "Battle"],
    },
    {
        id: 326,
        name: "Title Theme (Anniversary) - Four Swords",
        tags: ["Other"],
    },
    // The Wind Waker
    // https://soundcloud.com/user-405995293/sets/the-legend-of-zelda-the-wind-1
    {
        id: 327,
        name: "File Select - The Wind Waker",
        tags: ["Other"],
    },
    {
        id: 328,
        name: "The Legendary Hero - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 329,
        name: "Outset Island - The Wind Waker",
        tags: ["Town"],
    },
    {
        id: 330,
        name: "Inside a House - The Wind Waker",
        tags: ["Area", "Town"],
    },
    {
        id: 331,
        name: "Orca's House - The Wind Waker",
        tags: ["Area", "Town"],
    },
    {
        id: 332,
        name: "Sword Training - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 333,
        name: "Beedle's Shop - The Wind Waker",
        tags: ["Area", "Character"],
    },
    {
        id: 334,
        name: "Mysterious Giant Bird - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 335,
        name: "Outset Island Forest - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 336,
        name: "Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 337,
        name: "Encounter with Tetra - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 338,
        name: "Aryll's Kidnapping - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 339,
        name: "Grandma - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 340,
        name: "Departure - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 341,
        name: "Pirate Ship - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 342,
        name: "Pirate Ship - Inside - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 343,
        name: "Forsaken Fortress - Infiltration - The Wind Waker",
        tags: ["Area", "Event"],
    },
    {
        id: 344,
        name: "Forsaken Fortress - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 345,
        name: "Aryll's Reunion/Giant Bird Trap - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 346,
        name: "King of Red Lions - The Wind Waker",
        tags: ["Character", "Event"],
    },
    {
        id: 347,
        name: "Windfall Island - The Wind Waker",
        tags: ["Town"],
    },
    {
        id: 348,
        name: "Potion Shop - The Wind Waker",
        tags: ["Area", "Town"],
    },
    {
        id: 349,
        name: "Dawn - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 350,
        name: "The Great Sea - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 351,
        name: "Maritime Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 352,
        name: "Maritime Boss Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 353,
        name: "Cave/Shrine - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 354,
        name: "To Hyrule - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 355,
        name: "Dragon Roost Island - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 356,
        name: "Dragon Roost Cavern - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 357,
        name: "Mini Boss Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 358,
        name: "Gohma Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 359,
        name: "Gohma Battle - Second Phase - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 360,
        name: "Victory Fanfare - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 361,
        name: "Forest Haven - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 362,
        name: "Forest Haven - Inside - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 363,
        name: "Great Deku Tree - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 364,
        name: "Forbidden Woods - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 365,
        name: "Kalle Demos Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 366,
        name: "Kalle Demos Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 367,
        name: "Korok Ceremony - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 368,
        name: "Song of the Korok Ceremony - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 369,
        name: "The Great Sea is Cursed - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 370,
        name: "Jabun - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 371,
        name: "Tower of the Gods Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 372,
        name: "Tower of the Gods - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 373,
        name: "Gohdan Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 374,
        name: "Gohdan Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 375,
        name: "Sealed Hyrule Castle - The Wind Waker",
        tags: ["Event", "Area"],
    },
    {
        id: 376,
        name: "Hyrule Castle - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 377,
        name: "Phantom Ganon Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 378,
        name: "Aryll's Rescue - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 379,
        name: "Aryll's Rescue/To the Tower - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 380,
        name: "Escape the Tower - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 381,
        name: "Helmaroc King Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 382,
        name: "Ganondorf - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 383,
        name: "Hyrule King - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 384,
        name: "Zelda Awakens - The Wind Waker",
        tags: ["Character", "Event"],
    },
    {
        id: 385,
        name: "Princess Zelda - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 386,
        name: "Fairy's Fountain - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 387,
        name: "Fairy Queen - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 388,
        name: "Sage Laruto - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 389,
        name: "Medli's Awakening - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 390,
        name: "Boat Game - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 391,
        name: "Earth Temple - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 392,
        name: "Jalhalla Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 393,
        name: "Jalhalla Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 394,
        name: "Medli's Prayer - The Wind Waker",
        tags: ["Character", "Event"],
    },
    {
        id: 395,
        name: "Sage Fado - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 396,
        name: "Makar's Awakening - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 397,
        name: "Wind Temple - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 398,
        name: "Molgera Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 399,
        name: "Molgera Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 400,
        name: "Makar's Prayer - The Wind Waker",
        tags: ["Character", "Event"],
    },
    {
        id: 401,
        name: "Ghost Ship - The Wind Waker",
        tags: ["Event", "Area"],
    },
    {
        id: 402,
        name: "Hero of the Winds - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 403,
        name: "Ganon's Tower - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 404,
        name: "Gohma Battle (Ganon's Tower) - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 405,
        name: "Gohma Battle - Second Phase (Ganon's Tower) - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 406,
        name: "Kalle Demos Battle (Ganon's Tower) - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 407,
        name: "Jalhalla Battle (Ganon's Tower) - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 408,
        name: "Phantom Ganon's Maze - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 409,
        name: "Molgera Battle (Ganon's Tower) - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 410,
        name: "Puppet Ganon Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 411,
        name: "Gohma Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 412,
        name: "Puppet Ganon Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 413,
        name: "Puppet Ganon Spider Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 414,
        name: "Puppet Ganon Snake Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 415,
        name: "Puppet Ganon Death - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 416,
        name: "Ganondorf - Before the Showdown - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 417,
        name: "Ganondorf Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 418,
        name: "Hyrule King - Farewell - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 419,
        name: "Ending Theme - The Wind Waker",
        tags: ["Other"],
    },
    {
        id: 420,
        name: "Aryll - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 421,
        name: "Demo Trailer - The Wind Waker",
        tags: ["Other"],
    },
    {
        id: 422,
        name: "Demo Trailer 2 - The Wind Waker",
        tags: ["Other"],
    },
    {
        id: 423,
        name: "Title Theme - The Wind Waker",
        tags: ["Other"],
    },
    // The Wind Waker HD
    // https://soundcloud.com/user-405995293/sets/the-legend-of-zelda-the-wind-1
    {
        id: 424,
        name: "File Select - The Wind Waker HD",
        tags: ["Other"],
    },
    {
        id: 425,
        name: "Outset Island - The Wind Waker HD",
        tags: ["Town"],
    },
    {
        id: 426,
        name: "Grandma - The Wind Waker HD",
        tags: ["Character"],
    },
    {
        id: 427,
        name: "Pirate Ship - The Wind Waker HD",
        tags: ["Area"],
    },
    {
        id: 428,
        name: "Forsaken Fortress - The Wind Waker HD",
        tags: ["Area"],
    },
    {
        id: 429,
        name: "Windfall Island - The Wind Waker HD",
        tags: ["Town"],
    },
    {
        id: 430,
        name: "Gohma Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 431,
        name: "Gohma Battle - Second Phase - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 432,
        name: "Phantom Ganon Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 433,
        name: "Helmaroc King Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 434,
        name: "Fairy's Fountain - The Wind Waker HD",
        tags: ["Area"],
    },
    {
        id: 435,
        name: "Molgera Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 436,
        name: "Puppet Ganon Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 437,
        name: "Puppet Ganon Spider Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 438,
        name: "Puppet Ganon Snake Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    // Four Swords Adventures
    {
        id: 439,
        name: "Title Theme - Four Swords Adventures",
        tags: ["Other"],
    },
    {
        id: 440,
        name: "File Select/Fairy's Fountain - Four Swords Adventures",
        tags: ["Other", "Area"],
    },
    {
        id: 441,
        name: "Intro - Old Legend - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 442,
        name: "Intro - Dark Clouds - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 443,
        name: "Intro - Shade - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 444,
        name: "Field/Lake Hylia - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 445,
        name: "Inside a House - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 446,
        name: "Mini Boss Battle - Four Swords Adventures",
        tags: ["Battle"],
    },
    {
        id: 447,
        name: "Cave - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 448,
        name: "Fortune Teller - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 449,
        name: "Shadow Link Battle - Four Swords Adventures",
        tags: ["Battle"],
    },
    {
        id: 450,
        name: "Tingle - Four Swords Adventures",
        tags: ["Character"],
    },
    {
        id: 451,
        name: "Overworld - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 452,
        name: "Dungeon - Four Swords Adventures",
        tags: ["Dungeon"],
    },
    {
        id: 453,
        name: "Hyrule Castle - Four Swords Adventures",
        tags: ["Dungeon"],
    },
    {
        id: 454,
        name: "Boss Battle - Four Swords Adventures",
        tags: ["Battle"],
    },
    {
        id: 455,
        name: "Crystal Room - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 456,
        name: "Maiden's Rescue - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 457,
        name: "Guessing-Game House - Four Swords Adventures",
        tags: ["Area", "Town"],
    },
    {
        id: 458,
        name: "Village of the Blue Maiden (Mystery) - Four Swords Adventures",
        tags: ["Town"],
    },
    {
        id: 459,
        name: "Village of the Blue Maiden - Four Swords Adventures",
        tags: ["Town"],
    },
    {
        id: 460,
        name: "Temple - Four Swords Adventures",
        tags: ["Dungeon"],
    },
    {
        id: 461,
        name: "Tower of Flames - Four Swords Adventures",
        tags: ["Dungeon"],
    },
    {
        id: 462,
        name: "Overworld (Rain) - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 463,
        name: "Horse Boost - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 464,
        name: "Hyrule Castle (Return) - Four Swords Adventures",
        tags: ["Dungeon"],
    },
    {
        id: 465,
        name: "Graveyard - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 466,
        name: "Inside a House (Dark) - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 467,
        name: "Woods - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 468,
        name: "Desert - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 469,
        name: "Snow Field - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 470,
        name: "Zelda's Rescue - Four Swords Adventures",
        tags: ["Event", "Character"],
    },
    {
        id: 471,
        name: "Skies - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 472,
        name: "Ganon/Palace of Winds - Four Swords Adventures",
        tags: ["Dungeon", "Event", "Character"],
    },
    {
        id: 473,
        name: "Escape - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 474,
        name: "Ganon Battle - Four Swords Adventures",
        tags: ["Battle"],
    },
    {
        id: 475,
        name: "Ending Theme - Four Swords Adventures",
        tags: ["Other"],
    },
    {
        id: 476,
        name: "Zelda's Lullaby - Four Swords Adventures",
        tags: ["Area", "Event", "Character"],
    },
    {
        id: 477,
        name: "Inside a House/Kakariko Village (Unused) - Four Swords Adventures",
        tags: ["Area", "Town"],
    },
    {
        id: 478,
        name: "Map - Four Swords Adventures",
        tags: ["Area", "Other"],
    },
    // The Minish Cap
    // https://soundcloud.com/cow-ravine/sets/legend-of-zelda-minish-cap-ost
    // https://soundcloud.com/user-411498138/sets/the-legend-of-zelda-the-minish
    {
        id: 479,
        name: "Introduction - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 480,
        name: "Picori Festival - The Minish Cap",
        tags: ["Event", "Town"],
    },
    {
        id: 481,
        name: "Princess Zelda - The Minish Cap",
        tags: ["Character"],
    },
    {
        id: 482,
        name: "Vaati Attacks - The Minish Cap",
        tags: ["Character", "Event"],
    },
    {
        id: 483,
        name: "Vaati - The Minish Cap",
        tags: ["Character"],
    },
    {
        id: 484,
        name: "Minish Woods - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 485,
        name: "Cucco Chase! - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 486,
        name: "Ezlo - The Minish Cap",
        tags: ["Character"],
    },
    {
        id: 487,
        name: "Boss Battle - The Minish Cap",
        tags: ["Battle"],
    },
    {
        id: 488,
        name: "Elemental Sanctuary - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 489,
        name: "Cave of Flames - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 490,
        name: "Mt. Crenel - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 491,
        name: "Ezlo's Flashback - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 492,
        name: "Into the Skies - The Minish Cap",
        tags: ["Area", "Event"],
    },
    {
        id: 493,
        name: "Wind Ruins - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 494,
        name: "Royal Crypt - The Minish Cap",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 495,
        name: "Palace of Winds - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 496,
        name: "Temple of Droplets - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 497,
        name: "Hurry! - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 498,
        name: "Dark Hyrule Castle - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 499,
        name: "Vaati Battle - The Minish Cap",
        tags: ["Battle"],
    },
    {
        id: 500,
        name: "Vaati's Wrath Battle - The Minish Cap",
        tags: ["Battle"],
    },
    {
        id: 501,
        name: "Great Fairy's Fountain - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 502,
        name: "Hyrule Castle - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 503,
        name: "Hyrule Town - The Minish Cap",
        tags: ["Town"],
    },
    {
        id: 504,
        name: "Hyrule Field - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 505,
        name: "Minish Village - The Minish Cap",
        tags: ["Town"],
    },
    {
        id: 506,
        name: "Cave - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 507,
        name: "Danger!/Battle - The Minish Cap",
        tags: ["Event", "Battle"],
    },
    {
        id: 508,
        name: "Blade Brothers Dojo - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 509,
        name: "Cloud Tops - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 510,
        name: "Lost Woods (Unused) - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 511,
        name: "File Select - The Minish Cap",
        tags: ["Other"],
    },
    {
        id: 512,
        name: "Inside a House - The Minish Cap",
        tags: ["Area", "Town"],
    },
    {
        id: 513,
        name: "Royal Valley - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 514,
        name: "Deepwood Shrine - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 515,
        name: "Mini Boss Battle - The Minish Cap",
        tags: ["Battle"],
    },
    {
        id: 516,
        name: "Fairy's Fountain - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 517,
        name: "Element Appears - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 518,
        name: "Castor Wilds - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 519,
        name: "Mt. Crenel Summit - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 520,
        name: "Fortress of Winds - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 521,
        name: "Mole Mitts Cave - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 522,
        name: "Secret Castle Passage - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 523,
        name: "Witch's Hut - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 524,
        name: "Zelda Awakens - The Minish Cap",
        tags: ["Character", "Event"],
    },
    {
        id: 525,
        name: "Destroyed Hyrule - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 526,
        name: "Game Over - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 527,
        name: "Ending Theme - The Minish Cap",
        tags: ["Other"],
    },
    // Twilight Princess
    // https://soundcloud.com/formidable-782415076/sets/the-legend-of-zelda-twilight-princess-ost
    {
        id: 528,
        name: "Title Theme - Twilight Princess",
        tags: ["Other"],
    },
    {
        id: 529,
        name: "Orchestra Piece #1 - Twilight Princess",
        tags: ["Other"],
    },
    {
        id: 530,
        name: "Orchestra Piece #2 - Twilight Princess",
        tags: ["Other"],
    },
    {
        id: 531,
        name: "File Select/Great Fairy's Fountain - Twilight Princess",
        tags: ["Other", "Area"],
    },
    {
        id: 532,
        name: "Opening - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 533,
        name: "Meet Ilia - Twilight Princess",
        tags: ["Character", "Event"],
    },
    {
        id: 534,
        name: "Ordon Village - Twilight Princess",
        tags: ["Town"],
    },
    {
        id: 535,
        name: "Ordon Ranch - Twilight Princess",
        tags: ["Area", "Town"],
    },
    {
        id: 536,
        name: "Herd Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 537,
        name: "Inside a House - Twilight Princess",
        tags: ["Area", "Town"],
    },
    {
        id: 538,
        name: "Shop - Twilight Princess",
        tags: ["Area", "Town"],
    },
    {
        id: 539,
        name: "Ways of the Sword - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 540,
        name: "Battle (Part 1) - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 541,
        name: "Battle (Part 2) - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 542,
        name: "Cave - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 543,
        name: "Departure - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 544,
        name: "Ilia - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 545,
        name: "Enter the Darkness - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 546,
        name: "Link's Transformation - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 547,
        name: "Midna - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 548,
        name: "Twilight - Twilight Princess",
        tags: ["Event", "Area"],
    },
    {
        id: 549,
        name: "Twilit Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 550,
        name: "Meet Princess Zelda - Twilight Princess",
        tags: ["Character", "Event"],
    },
    {
        id: 551,
        name: "Succumbed to Twilight - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 552,
        name: "Beast in the Village - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 553,
        name: "Shadow Beast Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 554,
        name: "Spirit's Lament - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 555,
        name: "Chosen Hero - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 556,
        name: "Faron Woods - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 557,
        name: "Hidden Skill Training - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 558,
        name: "Forest Temple - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 559,
        name: "Ooccoo - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 560,
        name: "Ook Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 561,
        name: "Diababa Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 562,
        name: "Diababa Battle - Second Phase - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 563,
        name: "Victory Fanfare - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 564,
        name: "Boss Defeated - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 565,
        name: "Light Spirit - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 566,
        name: "Out Children Taken - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 567,
        name: "Hyrule Field - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 568,
        name: "Hyrule Field (Night) - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 569,
        name: "Postman - Twilight Princess",
        tags: ["Character", "Event"],
    },
    {
        id: 570,
        name: "Scared - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 571,
        name: "Link Will Save Us - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 572,
        name: "On Fire! - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 573,
        name: "Song of Healing - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 574,
        name: "Kakariko is Saved - Twilight Princess",
        tags: ["Event", "Town"],
    },
    {
        id: 575,
        name: "To the Mountains - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 576,
        name: "Kakariko Village - Twilight Princess",
        tags: ["Town"],
    },
    {
        id: 577,
        name: "Sanctuary - Twilight Princess",
        tags: ["Area", "Town"],
    },
    {
        id: 578,
        name: "Graveyard - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 579,
        name: "Death Mountain - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 580,
        name: "Epona Appears - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 581,
        name: "Rodeo Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 582,
        name: "Sumo Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 583,
        name: "King Bulblin Appears - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 584,
        name: "King Bulblin Attacks - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 585,
        name: "King Bulblin Horse Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 586,
        name: "King Bulblin Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 587,
        name: "Victory Fanfare (King Bulblin) - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 588,
        name: "Courage - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 589,
        name: "Goron Mines - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 590,
        name: "Yeti Love - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 591,
        name: "Mini-Boss Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 592,
        name: "Fyrus Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 593,
        name: "Save Ilia - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 594,
        name: "River Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 595,
        name: "Twilit Cargo Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 596,
        name: "Queen Rutela - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 597,
        name: "Requiem of Spirit - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 598,
        name: "Shadow Insect Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 599,
        name: "The Legend of Hyrule - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 600,
        name: "Lake Hylia - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 601,
        name: "Fyer's Cannon - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 602,
        name: "Falbi's House - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 603,
        name: "Hyrule Castle Town - Twilight Princess",
        tags: ["Town"],
    },
    {
        id: 604,
        name: "STAR Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 605,
        name: "Agitha's Castle - Twilight Princess",
        tags: ["Area", "Character"],
    },
    {
        id: 606,
        name: "Fortune Teller - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 607,
        name: "Escort the Horse Cart - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 608,
        name: "Prince Ralis is Saved - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 609,
        name: "Lakebed Temple - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 610,
        name: "Deku Toad Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 611,
        name: "Morpheel Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 612,
        name: "Morpheel Battle - Second Phase - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 613,
        name: "Zant - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 614,
        name: "Light and Darkness - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 615,
        name: "Midna's Lament - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 616,
        name: "Zelda's Sacrifice - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 617,
        name: "Prelude of Light - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 618,
        name: "Sacred Grove - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 619,
        name: "Statue Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 620,
        name: "Get Master Sword - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 621,
        name: "Song of Heroes - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 622,
        name: "Palace of Twilight - Twilight Princess",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 623,
        name: "Gerudo Desert - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 624,
        name: "Arbiter's Grounds - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 625,
        name: "Death Sword Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 626,
        name: "Stallord Appears - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 627,
        name: "Stallord Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 628,
        name: "The Sages - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 629,
        name: "The Demon Thief - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 630,
        name: "Fishing Hit! - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 631,
        name: "Rollgoal Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 632,
        name: "Zora's Domain - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 633,
        name: "Snowpeak - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 634,
        name: "Ballad of Gales - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 635,
        name: "Snowpeak Ruins - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 636,
        name: "Blizzeta Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 637,
        name: "Blizzeta Battle - Second Phase - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 638,
        name: "Sled Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 639,
        name: "Temple of Time - Chamber of Stone - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 640,
        name: "Temple of Time - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 641,
        name: "Armogohma Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 642,
        name: "Armogohma Battle - Second Phase - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 643,
        name: "Hidden Village - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 644,
        name: "Ballad of Twilight - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 645,
        name: "Ilia's Memory Restored - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 646,
        name: "Jovani's House - Twilight Princess",
        tags: ["Area", "Event"],
    },
    {
        id: 647,
        name: "Malo Mart - Twilight Princess",
        tags: ["Area", "Town"],
    },
    {
        id: 648,
        name: "Cannon Repair - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 649,
        name: "City in the Sky - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 650,
        name: "Argorok Appears - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 651,
        name: "Argorok Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 652,
        name: "Mirror of Twilight - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 653,
        name: "Phantom Zant Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 654,
        name: "Zant's Fate - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 655,
        name: "Zant Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 656,
        name: "Fused Shadows Returned - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 657,
        name: "Hyrule Castle - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 658,
        name: "The Resistance - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 659,
        name: "Hyrule Castle Tower - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 660,
        name: "Meet Ganondorf - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 661,
        name: "Puppet Zelda Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 662,
        name: "Ganon Appears - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 663,
        name: "Ganon Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 664,
        name: "Zelda Awakens - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 665,
        name: "Midna's Sacrifice - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 666,
        name: "Zelda's Lullaby - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 667,
        name: "Horseback Ganondorf Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 668,
        name: "Ganondorf Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 669,
        name: "Ending Theme - Twilight Princess",
        tags: ["Other"],
    },
    {
        id: 670,
        name: "Trailer Theme (Hyrule Field March) - Twilight Princess",
        tags: ["Other"],
    },
    {
        id: 671,
        name: "Fishing Hole - Twilight Princess",
        tags: ["Area"],
    },
    // Phantom Hourglass
    {
        id: 672,
        name: "Oshus, King of the Oceans - Phantom Hourglass",
        tags: ["Character"],
    },
    {
        id: 673,
        name: "The Virtue of a Hero (Ending Theme) - Phantom Hourglass",
        tags: ["Other"],
    },
    {
        id: 674,
        name: "Island - Phantom Hourglass",
        tags: ["Town"],
    },
    {
        id: 675,
        name: "Ocean King - Phantom Hourglass",
        tags: ["Character"],
    },
    {
        id: 676,
        name: "Storyteller's Memories - Tetra and the Pirates - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 677,
        name: "Jolene - Phantom Hourglass",
        tags: ["Character", "Event"],
    },
    {
        id: 678,
        name: "Storyteller's Memories - Dark King Ganon - Phantom Hourglass",
        tags: ["Event", "Character"],
    },
    {
        id: 679,
        name: "Bellum - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 680,
        name: "Attack Dirge - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 681,
        name: "Astrid - Phantom Hourglass",
        tags: ["Character"],
    },
    {
        id: 682,
        name: "Inside a House - Phantom Hourglass",
        tags: ["Area", "Town"],
    },
    {
        id: 683,
        name: "The Great Sea - Phantom Hourglass",
        tags: ["Area"],
    },
    {
        id: 684,
        name: "Dark Memories - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 685,
        name: "Goron House - Phantom Hourglass",
        tags: ["Area", "Town"],
    },
    {
        id: 686,
        name: "Phantom Chase - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 687,
        name: "Phantom Linebeck Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 688,
        name: "Set Sail for Adventure (Title Theme) - Phantom Hourglass",
        tags: ["Other"],
    },
    {
        id: 689,
        name: "Storyteller's Memories - Hero of the Winds - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 690,
        name: "Storyteller's Memories - Outset Island - Phantom Hourglass",
        tags: ["Event", "Area"],
    },
    {
        id: 691,
        name: "Storyteller's Memories - Zelda's Lullaby - Phantom Hourglass",
        tags: ["Event", "Character"],
    },
    {
        id: 692,
        name: "Storyteller's Memories - Departure - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 693,
        name: "Pirate Ship - Phantom Hourglass",
        tags: ["Area"],
    },
    {
        id: 694,
        name: "Dungeon - Phantom Hourglass",
        tags: ["Dungeon"],
    },
    {
        id: 695,
        name: "Linebeck - Phantom Hourglass",
        tags: ["Character"],
    },
    {
        id: 696,
        name: "Magic in the Air - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 697,
        name: "Sands of Time - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 698,
        name: "Island Life - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 699,
        name: "Oshus, King of the Oceans (Return) - Phantom Hourglass",
        tags: ["Character"],
    },
    {
        id: 700,
        name: "Zelda's Lullaby - Phantom Hourglass",
        tags: ["Event", "Character"],
    },
    {
        id: 701,
        name: "Dark Waters - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 702,
        name: "File Select - Phantom Hourglass",
        tags: ["Other"],
    },
    {
        id: 703,
        name: "Beedle's Shop - Phantom Hourglass",
        tags: ["Area", "Character"],
    },
    {
        id: 704,
        name: "Maritime Boss Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 705,
        name: "Cave - Phantom Hourglass",
        tags: ["Area"],
    },
    {
        id: 706,
        name: "Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 707,
        name: "Uncharted Territory - Phantom Hourglass",
        tags: ["Area"],
    },
    {
        id: 708,
        name: "Goron Village - Phantom Hourglass",
        tags: ["Town"],
    },
    {
        id: 709,
        name: "Ghost Ship - Phantom Hourglass",
        tags: ["Area", "Event"],
    },
    {
        id: 710,
        name: "Chasing the Ghost Ship - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 711,
        name: "Sword Training - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 712,
        name: "Jolene Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 713,
        name: "Tropical Slacking - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 714,
        name: "Bellum Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 715,
        name: "Dread of Sorrow - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 716,
        name: "Time Stopped - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 717,
        name: "Ghost Ship Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 718,
        name: "Boss Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 719,
        name: "A Battle Across the World - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 720,
        name: "Ranked Amongst the World's Best - Phantom Hourglass",
        tags: ["Event"],
    },
    // Spirit Tracks
    // https://soundcloud.com/haden-carter/sets/the-legend-of-zelda-spirit
    {
        id: 721,
        name: "Opening Theme - Spirit Tracks",
        tags: ["Other"],
    },
    {
        id: 722,
        name: "File Select - Spirit Tracks",
        tags: ["Other"],
    },
    {
        id: 723,
        name: "Aboda Village - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 724,
        name: "Final Exam - Spirit Tracks",
        tags: ["Event", "Area"],
    },
    {
        id: 725,
        name: "Castle Town - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 726,
        name: "Stealthy Zelda - Spirit Tracks",
        tags: ["Event", "Character"],
    },
    {
        id: 727,
        name: "Byrne - Spirit Tracks",
        tags: ["Character"],
    },
    {
        id: 728,
        name: "Realm Overworld - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 729,
        name: "In the Fields - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 730,
        name: "Tower of Spirits: Entrance - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 731,
        name: "Tower of Spirits: Staircase - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 732,
        name: "Tower of Spirits: Dungeon - Spirit Tracks",
        tags: ["Dungeon"],
    },
    {
        id: 733,
        name: "Troubled Realm - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 734,
        name: "Sanctuary - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 735,
        name: "Underwater - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 736,
        name: "Fire/Sand Temples - Spirit Tracks",
        tags: ["Dungeon"],
    },
    {
        id: 737,
        name: "Byrne Comes to the Rescue - Spirit Tracks",
        tags: ["Event", "Character"],
    },
    {
        id: 738,
        name: "Facing the Demon Train - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 739,
        name: "Colde & Malladus Battle - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 740,
        name: "The Unenterable Body - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 741,
        name: "Before the Final Battle - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 742,
        name: "The Sacred Duet - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 743,
        name: "Final Battle - Malladus - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 744,
        name: "Ending Theme - Spirit Tracks",
        tags: ["Other"],
    },
    {
        id: 745,
        name: "Anouki Village - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 746,
        name: "Dark Train Approaching - Spirit Tracks",
        tags: ["Event", "Battle"],
    },
    {
        id: 747,
        name: "Final Battle - Protecting Zelda - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 748,
        name: "Forest/Snow/Ocean Temples - Spirit Tracks",
        tags: ["Dungeon"],
    },
    {
        id: 749,
        name: "Goron Village - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 750,
        name: "Lost Woods - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 751,
        name: "Papuchia Village - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 752,
        name: "Tank/Pirates Attack - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 753,
        name: "The Dark Realm - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 754,
        name: "The Force Gem Awakens - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 755,
        name: "Boss Battle - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 756,
        name: "Boss Battle 2 - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 757,
        name: "Mini Boss Battle - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 758,
        name: "Hyrule Castle - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 759,
        name: "Introduction (Old Legends) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 760,
        name: "Princess Zelda - Spirit Tracks",
        tags: ["Character"],
    },
    {
        id: 761,
        name: "Mystery - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 762,
        name: "Tower of Spirits Destroyed - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 763,
        name: "Chancellor Cole - Spirit Tracks",
        tags: ["Character"],
    },
    {
        id: 764,
        name: "Alfonzo vs Byrne - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 765,
        name: "Ghost Zelda - Spirit Tracks",
        tags: ["Character"],
    },
    {
        id: 766,
        name: "The Spirit Flute - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 767,
        name: "Panicking Zelda - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 768,
        name: "Zelda Possesses a Phantom - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 769,
        name: "Battle on Tracks - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 770,
        name: "Selecting a Rail Route - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 771,
        name: "Whittleton Village - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 772,
        name: "Battle - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 773,
        name: "Key Masters Chase - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 774,
        name: "Sword Training - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 775,
        name: "Restoring the Spirit Tracks - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 776,
        name: "The Great Eye in the Dark - Spirit Tracks",
        tags: ["Event", "Battle"],
    },
    {
        id: 777,
        name: "Snurgle Battle (Stolen Keys) - Spirit Tracks",
        tags: ["Battle", "Event"],
    },
    {
        id: 778,
        name: "Resurrection of Malladus - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 779,
        name: "Lokomo Song: Gage (Forest) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 780,
        name: "Lokomo Song: Steem (Snow) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 781,
        name: "Lokomo Song: Carben (Ocean) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 782,
        name: "Lokomo Song: Embrose (Fire) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 783,
        name: "Lokomo Song: Rael (Sand) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 784,
        name: "Zelda's Dashed Hopes - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 785,
        name: "Battle Mode: Battle! - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 786,
        name: "Battle Mode: Phantoms - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 787,
        name: "Malladus Revival is Complete - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 788,
        name: "Byrne's Sacrifice - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 789,
        name: "Malladus Transformation - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 790,
        name: "Saying Goodbye - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 791,
        name: "Epilogue - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 792,
        name: "Battle Mode: Results - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 793,
        name: "Battle Mode: Linebeck Remix - Spirit Tracks",
        tags: ["Event"],
    },
    // Skyward Sword
    // https://soundcloud.com/extrapolation/sets/skyward-sword-ost
    // https://soundcloud.com/sunniea-416990841/sets/skyward-sword-full-ost
    {
        id: 794,
        name: "Ballad of the Goddess - Skyward Sword",
        tags: ["Other"],
    },
    {
        id: 795,
        name: "File Select - Skyward Sword",
        tags: ["Other"],
    },
    {
        id: 796,
        name: "Overture - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 797,
        name: "Link's Nightmare - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 798,
        name: "Knight's Academy - Skyward Sword",
        tags: ["Town", "Area"],
    },
    {
        id: 799,
        name: "Skyloft - Skyward Sword",
        tags: ["Town"],
    },
    {
        id: 800,
        name: "Legend of the Goddess - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 801,
        name: "Inside a House - Skyward Sword",
        tags: ["Area", "Town"],
    },
    {
        id: 802,
        name: "Ballad of the Goddess ~Zelda Solo~ - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 803,
        name: "Zelda - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 804,
        name: "Groose - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 805,
        name: "Groose's Insolence - Skyward Sword",
        tags: ["Character", "Event"],
    },
    {
        id: 806,
        name: "Groose's Daze - Skyward Sword",
        tags: ["Character", "Event"],
    },
    {
        id: 807,
        name: "Cave - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 808,
        name: "Preparation - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 809,
        name: "Crimson Loftwing - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 810,
        name: "Leaping from the Clouds - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 811,
        name: "Loftwing Training - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 812,
        name: "Loftwing Race - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 813,
        name: "Romance in the Air - Skyward Sword",
        tags: ["Event", "Character"],
    },
    {
        id: 814,
        name: "Blessing of the Goddess - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 815,
        name: "Tension - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 816,
        name: "Gaepora's Lament - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 817,
        name: "Chasing Fi - Skyward Sword",
        tags: ["Event", "Character"],
    },
    {
        id: 818,
        name: "Fi - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 819,
        name: "Lady of the Sealed Grounds - Skyward Sword",
        tags: ["Event", "Character"],
    },
    {
        id: 820,
        name: "Bazaar - Skyward Sword",
        tags: ["Area", "Town"],
    },
    {
        id: 821,
        name: "Exploring the Skies - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 822,
        name: "Skyloft (Piano Arrange) - Skyward Sword",
        tags: ["Town"],
    },
    {
        id: 823,
        name: "Sealed Grounds - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 824,
        name: "Sealed Temple - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 825,
        name: "The Kikwis - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 826,
        name: "Faron Woods - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 827,
        name: "Enemy Attacks - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 828,
        name: "Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 829,
        name: "Bucha, Kikwi Elder - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 830,
        name: "Entering a Dungeon - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 831,
        name: "Skyview Temple - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 832,
        name: "Mini Boss Battle (Stalfos/Stalmaster) - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 833,
        name: "Ghirahim - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 834,
        name: "Demon Lord Ghirahim Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 835,
        name: "Temple Spring - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 836,
        name: "Dance of the Godesses - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 837,
        name: "The Lumpy Pumpkin - Skyward Sword",
        tags: ["Area", "Town"],
    },
    {
        id: 838,
        name: "Bamboo Island - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 839,
        name: "Batreaux Introduction - Skyward Sword",
        tags: ["Character", "Event"],
    },
    {
        id: 840,
        name: "Eldin Volcano - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 841,
        name: "The Mogmas - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 842,
        name: "Mogma Mines - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 843,
        name: "Tubert's Cave - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 844,
        name: "Thrill Digger - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 845,
        name: "Earth Temple - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 846,
        name: "Mini Boss Battle (Lizalfos/Magmanos/Moldorm) - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 847,
        name: "Rolling Rock Escape - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 848,
        name: "Scaldera & Tentalus Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 849,
        name: "Memories of Zelda - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 850,
        name: "Lanayru Desert - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 851,
        name: "Lanayru Desert (Past) - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 852,
        name: "Lanayru Mining Facility - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 853,
        name: "Lanayru Mining Facility (Past) - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 854,
        name: "Disrupted Ritual - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 855,
        name: "A Sudden Crashlanding - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 856,
        name: "Fire Sanctuary - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 857,
        name: "Ballad of the Goddess ~Harp~ - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 858,
        name: "Scrapper - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 859,
        name: "Isle of Songs - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 860,
        name: "Farore's Courage - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 861,
        name: "Farore's Silent Realm - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 862,
        name: "Inside the Great Tree - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 863,
        name: "Lake Floria - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 864,
        name: "Guardians Pursuit - Skyward Sword",
        tags: ["Event", "Battle"],
    },
    {
        id: 865,
        name: "Sacred Dragons - Skyward Sword",
        tags: ["Character", "Event"],
    },
    {
        id: 866,
        name: "Ancient Cistern - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 867,
        name: "Koloktos & Moldarach Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 868,
        name: "Skydiving at Fun Fun Island - Skyward Sword",
        tags: ["Area", "Event"],
    },
    {
        id: 869,
        name: "Lake Floria (Underwater) - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 870,
        name: "Sealing the Imprisoned - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 871,
        name: "The Imprisoned Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 872,
        name: "Bug Heaven - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 873,
        name: "Nayru's Wisdom - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 874,
        name: "Nayru's Silent Realm - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 875,
        name: "Lanayru Sand Sea - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 876,
        name: "Sailing the Sand Sea - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 877,
        name: "Minecart Ride - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 878,
        name: "Pirate Stronghold - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 879,
        name: "Sandship - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 880,
        name: "Sandship (Inside) - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 881,
        name: "Din's Power - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 882,
        name: "Din's Silent Realm - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 883,
        name: "Volcano Summit - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 884,
        name: "Guld, Mogma Elder - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 885,
        name: "Chase the Mogma Underground - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 886,
        name: "Demon Lord Ghirahim Battle 2 - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 887,
        name: "The Imprisoned Battle 2 - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 888,
        name: "Groosenator - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 889,
        name: "Dejected Groose - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 890,
        name: "Temple of Hylia - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 891,
        name: "Great Spirit of the Skies Levias Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 892,
        name: "Bilocyte Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 893,
        name: "The Imprisoned Battle 3 - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 894,
        name: "Faron Woods (Underwater) - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 895,
        name: "Tadtones Underwater Hunt - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 896,
        name: "Eldin Volcano (Infiltration) - Skyward Sword",
        tags: ["Area", "Event"],
    },
    {
        id: 897,
        name: "Song of the Hero - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 898,
        name: "Goddess' Silent Realm - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 899,
        name: "Sky Keep - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 900,
        name: "Peace - Isle of the Goddess - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 901,
        name: "Hordes of Darkness - Skyward Sword",
        tags: ["Battle", "Event"],
    },
    {
        id: 902,
        name: "Demon Lord Ghirahim Battle 3 - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 903,
        name: "Demise - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 904,
        name: "Demon King Demise Battle ~Rising~ - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 905,
        name: "Demon King Demise Battle ~Finale~ - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 906,
        name: "Peace - Link's Return - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 907,
        name: "Fi's Farewell - Skyward Sword",
        tags: ["Event", "Character"],
    },
    {
        id: 908,
        name: "Eternal Gratitude ~Fi~ - Skyward Sword",
        tags: ["Event", "Character"],
    },
    {
        id: 909,
        name: "The Master Sword is Sealed - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 910,
        name: "Staff Credits (Ending Theme) - Skyward Sword",
        tags: ["Other"],
    },
    {
        id: 911,
        name: "Batreaux - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 912,
        name: "Sky Islands - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 913,
        name: "The Pumpkin Song - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 914,
        name: "Pumpkin Harvest Game - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 915,
        name: "Ancient Cistern (Cave) - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 916,
        name: "Cursed Bokoblins Chase - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 917,
        name: "Mini Game - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 918,
        name: "Zelda's Lullaby - Skyward Sword",
        tags: ["Character"],
    },
    // A Link Between Worlds
    // https://soundcloud.com/user-411498138/sets/the-legend-of-zelda-a-link
    {
        id: 919,
        name: "Title Theme - A Link Between Worlds",
        tags: ["Other"],
    },
    {
        id: 920,
        name: "File Select - A Link Between Worlds",
        tags: ["Other"],
    },
    {
        id: 921,
        name: "Prologue - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 922,
        name: "Link's Nightmare - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 923,
        name: "Adventure Begins - A Link Between Worlds",
        tags: ["Event", "Area"],
    },
    {
        id: 924,
        name: "Hyrule Castle (First Visit) - A Link Between Worlds",
        tags: ["Area", "Town"],
    },
    {
        id: 925,
        name: "Princess Zelda - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 926,
        name: "Hyrule Overworld - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 927,
        name: "Anxious Sahasrahla - A Link Between Worlds",
        tags: ["Character", "Event"],
    },
    {
        id: 928,
        name: "Cave - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 929,
        name: "Crisis at the Sanctuary - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 930,
        name: "Sanctuary - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 931,
        name: "Yuga - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 932,
        name: "Ravio - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 933,
        name: "Kakariko Village - A Link Between Worlds",
        tags: ["Town"],
    },
    {
        id: 934,
        name: "Milk Bar - A Link Between Worlds",
        tags: ["Area", "Town"],
    },
    {
        id: 935,
        name: "Inside a House - A Link Between Worlds",
        tags: ["Area", "Town"],
    },
    {
        id: 936,
        name: "Mother Maiamai - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 937,
        name: "Dungeon - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 938,
        name: "Yuga Appears - A Link Between Worlds",
        tags: ["Character", "Event"],
    },
    {
        id: 939,
        name: "Boss Battle (Hyrule) - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 940,
        name: "Mini Boss Battle - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 941,
        name: "Yuga Battle (Eastern Palace) - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 942,
        name: "Irene - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 943,
        name: "Witch's Hut - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 944,
        name: "Oren's Trouble - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 945,
        name: "Queen Oren - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 946,
        name: "Ravio's Shop - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 947,
        name: "Fairy's Fountain - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 948,
        name: "Fortune Teller - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 949,
        name: "Death Mountain - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 950,
        name: "Final Battle - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 951,
        name: "Forest of Mystery (Lost Woods) - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 952,
        name: "Following the Poes in the Woods - A Link Between Worlds",
        tags: ["Event", "Area"],
    },
    {
        id: 953,
        name: "Hyrule Castle - A Link Between Worlds",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 954,
        name: "Yuga Battle (Hyrule Castle) - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 955,
        name: "Hilda - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 956,
        name: "Ganon Revival - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 957,
        name: "Lorule Overworld - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 958,
        name: "Thieves' Hideout - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 959,
        name: "Desert Palace - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 960,
        name: "Skull Woods - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 961,
        name: "Sneaking into the Dark Palace - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 962,
        name: "Dark Palace - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 963,
        name: "Ice Ruins - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 964,
        name: "Turtle Rock - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 965,
        name: "Octoball Derby - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 966,
        name: "Lorule Castle - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 967,
        name: "Yuga Ganon Battle - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 968,
        name: "Light Arrows - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 969,
        name: "Ending Theme - A Link Between Worlds",
        tags: ["Other"],
    },
    {
        id: 970,
        name: "Hyrule Footrace - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 971,
        name: "Treacherous Tower - A Link Between Worlds",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 972,
        name: "Escaping Thieves' Hideout - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 973,
        name: "Boss Battle (Lorule) - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 974,
        name: "Chamber of the Sages - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 975,
        name: "Swamp Palace - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 976,
        name: "Dark Link Battle - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 977,
        name: "Dark Link Battle (Result) - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 978,
        name: "Guessing-Game House - A Link Between Worlds",
        tags: ["Area", "Town"],
    },
    {
        id: 979,
        name: "Treacherous Tower (Victory) - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 980,
        name: "Link and Zelda's Wish - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 981,
        name: "Story of Lorule - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 982,
        name: "Milk Bar - Zelda's Lullaby - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 983,
        name: "Milk Bar - Death Mountain - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 984,
        name: "Milk Bar - Ballad of the Goddess - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 985,
        name: "Milk Bar - Hilda - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 986,
        name: "Milk Bar - Kakariko Village - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 987,
        name: "Milk Bar - Lorule Overworld - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 988,
        name: "Milk Bar - Hyrule Castle - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 989,
        name: "Milk Bar - Thieves' Hideout - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 990,
        name: "Milk Bar - Lorule Castle - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 991,
        name: "Milk Bar - Hyrule Overworld - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 992,
        name: "Milk Bar - Ganon Battle - A Link Between Worlds",
        tags: ["Event"],
    },
    // Tri Force Heroes
    // https://soundcloud.com/trilliby-510875556/sets/the-legend-of-zelda-tri-force
    {
        id: 993,
        name: "Title Theme - Tri Force Heroes",
        tags: ["Other"],
    },
    {
        id: 994,
        name: "Our Story Begins - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 995,
        name: "Hytopia Town - Tri Force Heroes",
        tags: ["Town"],
    },
    {
        id: 996,
        name: "Madame Couture - Tri Force Heroes",
        tags: ["Character"],
    },
    {
        id: 997,
        name: "Daily Riches - Tri Force Heroes",
        tags: ["Area", "Town"],
    },
    {
        id: 998,
        name: "Miiverse Gallery - Tri Force Heroes",
        tags: ["Area", "Town"],
    },
    {
        id: 999,
        name: "Sir Combsly - Tri Force Heroes",
        tags: ["Character"],
    },
    {
        id: 1000,
        name: "King Tuft - Tri Force Heroes",
        tags: ["Character"],
    },
    {
        id: 1001,
        name: "Hytopia Castle - Tri Force Heroes",
        tags: ["Area", "Town"],
    },
    {
        id: 1002,
        name: "Stage Select - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1003,
        name: "Woodlands - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1004,
        name: "Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1005,
        name: "Mini Boss Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1006,
        name: "Treasure Room - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1007,
        name: "Riverside - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1008,
        name: "Boss Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1009,
        name: "Volcano - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1010,
        name: "Hinox Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1011,
        name: "Ice Cavern - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1012,
        name: "Fortress - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1013,
        name: "Lady Maud - Tri Force Heroes",
        tags: ["Character"],
    },
    {
        id: 1014,
        name: "Lady's Pets Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1015,
        name: "Dunes - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1016,
        name: "Ruins - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1017,
        name: "Sky Realm - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1018,
        name: "Sky Temple - Tri Force Heroes",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 1019,
        name: "Lady Maud Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1020,
        name: "Lady Maud Battle - Second Phase - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1021,
        name: "Lifting the Curse - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1022,
        name: "Ending Theme - Tri Force Heroes",
        tags: ["Other"],
    },
    {
        id: 1023,
        name: "Den of Trials - Entrance - Tri Force Heroes",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 1024,
        name: "Den of Trials - Tri Force Heroes",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 1025,
        name: "Dark Links Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1026,
        name: "Treasure Room (Den of Trials) - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1027,
        name: "Arena - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1028,
        name: "Arena Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1029,
        name: "Arena Results - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1030,
        name: "Game Over - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1031,
        name: "Lucky Ball: Overworld (A Link to the Past) - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1032,
        name: "Lucky Ball: Ballad of the Goddess - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1033,
        name: "Lucky Ball: Ballad of the Wind Fish - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1034,
        name: "Lucky Ball: Clock Town - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1035,
        name: "Lucky Ball: Dark World - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1036,
        name: "Lucky Ball: Fairy's Fountain - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1037,
        name: "Lucky Ball: Realm Overworld - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1038,
        name: "Lucky Ball: Hyrule Field (Twilight Princess) - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1039,
        name: "Lucky Ball: Lon Lon Ranch - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1040,
        name: "Lucky Ball: Lorule Castle - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1041,
        name: "Lucky Ball: Lost Woods - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1042,
        name: "Lucky Ball: Skyloft - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1043,
        name: "Lucky Ball: Song of Storms - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1044,
        name: "Lucky Ball: The Great Sea - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1045,
        name: "Lucky Ball: Title Theme (The Wind Waker) - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1046,
        name: "Lucky Ball: Hilda - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1047,
        name: "Lucky Ball: Linebeck - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1048,
        name: "Lucky Ball: Madame Couture - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1049,
        name: "Lucky Ball: Mother Maiamai - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1050,
        name: "Lucky Ball: Title Theme (Tri Force Heroes) - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1051,
        name: "Lucky Ball: Yuga Castle - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1052,
        name: "Lucky Ball: Zelda's Lullaby - Tri Force Heroes",
        tags: ["Event"],
    },
    // Breath of the Wild
    // https://soundcloud.com/infiniteshadow23/sets/the-legend-of-zelda-breath-of
    {
        id: 1053,
        name: "Main Theme - Breath of the Wild",
        tags: ["Other"],
    },
    {
        id: 1055,
        name: "The Towers Rise - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1057,
        name: "Shrine - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1058,
        name: "Battle (Shrine) - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1059,
        name: "Mountains - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1060,
        name: "Stationary Guardian Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1061,
        name: "Temple of Time - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1062,
        name: "The Last King of Hyrule - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1063,
        name: "A King's Request - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1064,
        name: "Lynel / Yiga Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1065,
        name: "Shiekah Tower Activated - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1066,
        name: "Talus Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1067,
        name: "Kakariko Village - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1068,
        name: "Impa - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1069,
        name: "The 10 000 Year Old Legend - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1070,
        name: "Hateno Ancient Tech Lab - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1072,
        name: "Great Fairy's Fountain - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1073,
        name: "Field (Night) - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1074,
        name: "Kass - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1075,
        name: "Kass Quest - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1076,
        name: "Stables - Breath of the Wild",
        tags: ["Area", "Town"],
    },
    {
        id: 1078,
        name: "Riding (Night) - Breath of the Wild",
        tags: ["Event", "Area"],
    },
    {
        id: 1079,
        name: "Blessing Shrine - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1080,
        name: "Hinox Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1081,
        name: "Seaside - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1082,
        name: "The Crazy Flower Lady - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1084,
        name: "Sidon - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1085,
        name: "Zora's Domain - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1086,
        name: "The Divine Beast of the Lake - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1088,
        name: "Attack on Vah Ruta - Breath of the Wild",
        tags: ["Battle", "Event"],
    },
    {
        id: 1089,
        name: "Sidon's Promise - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1090,
        name: "Divine Beast Vah Ruta - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1091,
        name: "Battle (Divine Beast) - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1092,
        name: "Blight Ganon Appears - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1093,
        name: "Waterblight Ganon Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1094,
        name: "Heart Container Appears - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1095,
        name: "Mipha - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1096,
        name: "The Champions Power - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1097,
        name: "Divine Beast Rising - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1099,
        name: "Snow Field - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1100,
        name: "Cave - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1101,
        name: "The Divine Beast of the Sky - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1102,
        name: "Rito Village - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1104,
        name: "Meeting Teba - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1105,
        name: "Rito Flight Range - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1106,
        name: "Flight Training - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1107,
        name: "Attack on Vah Medoh - Breath of the Wild",
        tags: ["Battle", "Event"],
    },
    {
        id: 1108,
        name: "Teba's Encouragement - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1109,
        name: "Divine Beast Vah Medoh - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1110,
        name: "Windblight Ganon Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1111,
        name: "Revali - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1113,
        name: "Mountain House - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1114,
        name: "Snowball Minigame - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1115,
        name: "Rito Sisters - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1118,
        name: "Death Mountain - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1119,
        name: "Goron Area - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1120,
        name: "Goron Humming - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1121,
        name: "The Divine Beast of the Volcano - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1122,
        name: "Goron City - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1123,
        name: "Abandoned North Mine - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1124,
        name: "Meeting Yunobo - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1126,
        name: "Attack on Vah Rudania - Breath of the Wild",
        tags: ["Battle", "Event"],
    },
    {
        id: 1127,
        name: "Yunobo's Opportunity - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1128,
        name: "Divine Beast Vah Rudania - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1129,
        name: "Fireblight Ganon Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1130,
        name: "Daruk - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1132,
        name: "Desert - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1133,
        name: "The Divine Beast of the Desert - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1134,
        name: "Kara Kara Bazaar - Breath of the Wild",
        tags: ["Town", "Area"],
    },
    {
        id: 1135,
        name: "Gerudo Town - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1136,
        name: "Meeting Riju - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1137,
        name: "Yiga Hideout - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1138,
        name: "Kohga - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1139,
        name: "Master Kohga Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1141,
        name: "Observation Post - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1142,
        name: "Attack on Vah Naboris - Breath of the Wild",
        tags: ["Battle", "Event"],
    },
    {
        id: 1143,
        name: "Riju's Trust - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1144,
        name: "Divine Beast Vah Naboris - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1145,
        name: "Thunderblight Ganon Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1146,
        name: "Urbosa - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1149,
        name: "Race Minigame - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1150,
        name: "Gerudo Race Award Ceremony - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1151,
        name: "Heat Test - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1152,
        name: "Molduga Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1153,
        name: "Ruins - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1154,
        name: "Labyrinth/Lost Woods - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1155,
        name: "Korok Forest - Breath of the Wild",
        tags: ["Area", "Town"],
    },
    {
        id: 1156,
        name: "Great Deku Tree - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1157,
        name: "Get Master Sword - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1160,
        name: "Akkala Ancient Tech Lab - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1161,
        name: "Possessed Dragon - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1162,
        name: "Dragons - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1163,
        name: "Omen of the Blood Moon - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1164,
        name: "Memory - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1169,
        name: "Silent Princess - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1170,
        name: "Father and Daughter - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1174,
        name: "Flee and Despair - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1175,
        name: "Zelda's Power Awakens - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1176,
        name: "Zelda's Wish - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1177,
        name: "Hyrule Castle Town Ruins - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1178,
        name: "Guardian Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1179,
        name: "Entering Hyrule Castle - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1180,
        name: "Hyrule Castle - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1181,
        name: "Calamity Ganon Appears - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1182,
        name: "The Divine Beasts Strike! - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1183,
        name: "Calamity Ganon Battle - Phase 1 - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1184,
        name: "Calamity Ganon Battle - Phase 2 - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1185,
        name: "Dark Beast Ganon Appears - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1186,
        name: "Dark Beast Ganon Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1187,
        name: "Do You Remember Me? - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1188,
        name: "Ending Theme - Breath of the Wild",
        tags: ["Other"],
    },
    {
        id: 1189,
        name: "Epilogue - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1190,
        name: "Lurelin Village - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1191,
        name: "Kilton - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1192,
        name: "Wedding at Tarrey Town - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1193,
        name: "Tarrey Town - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1194,
        name: "Canyon - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1195,
        name: "Hunting Minigame - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1197,
        name: "Horse God Malanya's Fountain - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1198,
        name: "Satori Mountain - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1199,
        name: "Gliding Minigame - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1200,
        name: "Trial of the Sword Completed - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1203,
        name: "Shrine Monument's Arise - Breath of the Wild",
        tags: ["Event", "Area"],
    },
    {
        id: 1205,
        name: "Shrine Monument - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1206,
        name: "Champion Mipha's Song - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1209,
        name: "Champion Revali's Song - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1212,
        name: "Champion Daruk's Song - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1215,
        name: "Champion Urbosa's Song - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1217,
        name: "Final Trial - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1218,
        name: "Monk Maz Koshia Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1220,
        name: "Princess Zelda and The Champions - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1222,
        name: "Framed Picture - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1223,
        name: "The Champion's Ballad - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1225,
        name: "Nintendo Switch Presentation - Breath of the Wild",
        tags: ["Other"],
    },
    {
        id: 1226,
        name: "Field - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1227,
        name: "Riding - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1228,
        name: "Zora's Domain (Night) - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1229,
        name: "Gerudo Town (Night) - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1230,
        name: "Rito Village (Night) - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1231,
        name: "Hateno Village (Night) - Breath of the Wild",
        tags: ["Town"],
    },
];