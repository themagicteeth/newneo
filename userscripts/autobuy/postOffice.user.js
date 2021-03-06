// ==UserScript==
// @name        Post Office Auto Buy
// @namespace   Neoscripts
// @match       *://www.neopets.com/objects.phtml?obj_type=58&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=58
// @match       *://www.neopets.com/haggle.phtml
// @match       *://www.neopets.com/haggle.phtml*
// @require     https://raw.githubusercontent.com/themagicteeth/newneo/main/userscripts/autobuy/autoBuy.js
// @grant       none
// @version     1.0
// @author      -
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
// http://www.neocodex.us/forum/topic/119039-ab-lists-share-your-up-to-date-lists/#entry2032905
const itemsToBuy = [
    "Evil Fuzzles Stamp",
    "Eleus Stamp",
    "The Revenge Stamp",
    "Jelly World Stamp",
    "Spyder Stamp",
    "Lost Desert Scroll Stamp",
    "Zyrolon Stamp",
    "Fyora Faerie Doll Stamp",
    "RIP Lucy Stamp",
    "Thoughtful Linae Stamp",
    "Dorak Stamp",
    "Razul Stamp",
    "Sentient Headstones Stamp",
    "Lupe Shopkeeper Stamp",
    "Orrin Stamp",
    "Tangor Stamp",
    "Shenkuu Mask Stamp",
    "Zurroball Stamp",
    "Green Knight Stamp",
    "Cogs Togs Stamp",
    "The Krawken Stamp",
    "Wheel of Monotony Stamp",
    "Hot Dog Hero Stamp",
    "Destruction of Faerieland Stamp",
    "Lava Monster Stamp",
    "Blumaroo Court Jester Stamp",
    "Luperus Left Head Stamp",
    "Moltara Town Hall Stamp",
    "Mr. Krawley Stamp",
    "Shumi Telescope Stamp",
    "Zombified Heroes Stamp",
    "Meridell Castle Stamp",
    "Singed Tyrannian Volcano Stamp",
    "Gargarox Isafuhlarg Stamp",
    "Dr. Sloth Stamp",
    "Dark Qasala Stamp",
    "The Academy Stamp",
    "Space Faerie Stamp",
    "Haunted Mansion Stamp",
    "Dark Faerie Stamp",
    "Darigan Citadel Stamp",
    "Talinia Stamp",
    "Luperus Centre Head Stamp",
    "Shenkuu Helmet Stamp",
    "Altador Magic Stamp",
    "Dark Ilere Stamp",
    "Commemorative Defenders Stamp #4",
    "Tyrannian Victory Day Stamp",
    "Scordrax Stamp",
    "Cybunny on a Cycle Stamp",
    "Lost City of Phorofor Stamp",
    "Rainbow Pteri Feather Stamp",
    "Lampwyck Stamp",
    "Faerie Slorg Stamp",
    "Luperus Right Head Stamp",
    "Forgotten Shore Stamp",
    "Biyako Stamp",
    "Meridell Heroes Stamp",
    "Shadow Gulch Stamp",
    "Yellow Knight Stamp",
    "Tomos Stamp",
    "Capn Threelegs Stamp",
    "Fyoras Castle Stamp",
    "Altador Travel Stamp",
    "The Cyodrakes Gaze Stamp",
    "Swordsmaster Talek Stamp",
    "Anshu Fishing Stamp",
    "The Sleeper Constellation Stamp",
    "Aethia Stamp",
    "Nabile Stamp",
    "Zafara Double Agent Stamp",
    "Blugthak Stamp",
    "Northern Watch Tower Stamp",
    "Torakor Stamp",
    "Gold Mote Stamp",
    "Golden Dubloon Stamp",
    "Igenots Cavern Stamp",
    "Mipsy Stamp",
    "Morris Stamp",
    "Anubits Stamp",
    "Battle Uni Stamp",
    "Gors the Mighty Stamp",
    "Lucky Coin Stamp",
    "Grundo Warehouse Stamp",
    "Rainbow Sticky Hand Stamp",
    "Shiny Monoceraptor Stamp",
    "Usuki Doll Stamp",
    "Von Roos Castle Stamp",
    "Jacques Stamp",
    "Hadrak Stamp",
    "Darkest Faerie Stamp",
    "Drackonack Stamp",
    "Geraptiku Stamp",
    "Meerca Spy Stamp",
    "NeoQuest Logo Stamp",
    "Darigan Moehog Stamp",
    "Stone Stamp",
    "Court Dancer Stamp",
    "Neoquest Hero Stamp",
    "Count Von Roo Plushie Stamp",
    "Isca Stamp",
    "NeoQuest II Esophagor Stamp",
    "Wise Gnorbu Stamp",
    "Nightsteed Stamp",
    "Morguss Stamp",
    "Ramtor Stamp",
    "Count Von Roo Stamp",
    "Virtupets Space Station Stamp",
    "Sword of Apocalypse Stamp",
    "Jahbal Stamp",
    "Garin Stamp",
    "Guardian of Spectral Magic Stamp",
    "Grimtooth Stamp",
    "Ready to Roll Stamp",
    "Skeith Defender Stamp",
    "Quilin Stamp",
    "Holographic Virtupets Stamp",
    "Dark Battle Duck Stamp",
    "Scuzzy Stamp",
    "The Great Battle Stamp",
    "Misaligned Printer Stamp",
    "Lord Kass Stamp",
    "Terask Stamp",
    "Sticky Snowflake Stamp",
    "ARGH!!!! DONNA STAMP",
    "Sasha Stamp",
    "King Altador Stamp",
    "The Three Stamp",
    "One Hundred Million Neopoint Stamp",
    "Upside Down Island Acara Stamp",
    "Battle Slices Stamp",
    "Holographic Coltzans Shrine Stamp",
    "Shenkuu Stamp",
    "Nibbled Cooking Pot Stamp",
    "Foil Slorg Stamp",
    "Holographic Magax Stamp",
    "Misprint Meuka Stamp",
    "Double Printed Evil Fuzzle Stamp",
    "Need a Better Printer Stamp",
    "Captain Scarblade Stamp",
    "Xantan Stamp",
    "Inverted Space Faerie Stamp",
    "Snowbunny Stamp",
    "Battle Slices stamp",
    "Foil Food Shop Stamp",
    "Sticky Snowflake Stamp",
    "Igneot Stamp",
    "King Kelpbeard Stamp",
    "Lab Ray Stamp",
    "Queen Fyora Stamp",
    "The Great Battle Stamp"
]

if (document.URL.includes("objects")) {
    const FROM = 9_000
    const TO = 17_000

    const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

    buyItem(itemsToBuy, refreshTimes)
}
