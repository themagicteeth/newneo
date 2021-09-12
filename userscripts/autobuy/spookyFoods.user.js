// ==UserScript==
// @name        Spooky Foods Auto Buy
// @namespace   Neoscripts
// @match       *://www.neopets.com/objects.phtml?obj_type=30&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=30
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
    "Cadaverous Cola",
    "Elderly Apple",
    "Snorkle Pudding",
    "Jelly Finger",
    "Coco Pumpkin",
    "Forgotten Apple",
    "Poison Apples",
    "Rotting Veggies Salad",
    "Pumpkin Scoopings",
    "Mouldy Cheese",
    "Parts on a Pizza",
    "Gorerito",
    "Jelly Spider Eyeball",
    "Halloween Candy Cane",
    "Runny Snot",
    "Blue Pepper Porridge",
    "Pink Apple Lantern",
    "Crunchy Snotball",
    "Wing of Korbat",
    "Meerca Pie",
    "Apple Lantern",
    "Spoooky Muffin",
    "Pink Spooky Ice Cream",
    "Grundo Toe Lint",
    "Ghost Puff",
    "Coffee of the Dead"
]

if (document.URL.includes("objects")) {
    const FROM = 9000
    const TO = 17000

    const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

    buyItem(itemsToBuy, refreshTimes)
}
