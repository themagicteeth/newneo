// ==UserScript==
// @name        Battle Magic Auto Buy
// @namespace   Neoscripts
// @match       *://www.neopets.com/objects.phtml?obj_type=9&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=9
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
    "Bony Grarrl Club",
    "Hand Carved Draik Slingshot",
    "Kacheek Flour",
    "Draik Enhancement Brew",
    "Icy Chia Goggles",
    "Water Faerie Token",
    "Golden Peophin Harp",
    "Kaylas Hat",
    "Illusens Gems",
    "Chilli Sword",
    "Battle Faerie Sword",
    "Taelias Snowball",
    "Battle Quill",
    "Glittery Scorchstone"
]

if (document.URL.includes("objects")) {
    const FROM = 9000
    const TO = 17000

    const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

    buyItem(itemsToBuy, refreshTimes)
}
