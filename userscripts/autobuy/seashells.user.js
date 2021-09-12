// ==UserScript==
// @name        Seashells Auto Buy
// @namespace   Neoscripts
// @match       *://www.neopets.com/objects.phtml?obj_type=86&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=86
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
    "Anklet of the Deep",
    "Choker of the Deep",
    "Dazzling Blue Mussel Shell",
    "Diadem of the Deep",
    "Floral Maractite Coin",
    "Golden Shell",
    "Maraquan Draik Maractite Coin",
    "Purple Twirly Shell",
    "Royal Orange Cowry Shell",
    "Streaked Maractite Coin",
    "Tiny Golden Shell"
]

if (document.URL.includes("objects")) {
    const FROM = 9000
    const TO = 17000

    const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

    buyItem(itemsToBuy, refreshTimes)
}
