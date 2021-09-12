// ==UserScript==
// @name        Ice Fun Shop Auto Buy
// @namespace   Neoscripts
// @match       *://www.neopets.com/objects.phtml?obj_type=37&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=37
// @match       *://www.neopets.com/haggle.phtml
// @match       *://www.neopets.com/haggle.phtml*
// @require     https://pastebin.com/raw/f6ENUjLQ
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Neopian Fresh Foods
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
// http://www.neocodex.us/forum/topic/119039-ab-lists-share-your-up-to-date-lists/#entry2032905
const itemsToBuy = [
    "Magical Pea Chia Pop",
    "Angelic Ice Lolly",
    "Hamarama Ice Lolly",
    "Magical Asparagus Chia Pop",
    "Banana Split Chia Pop",
    "Magical Carrot Chia Pop",
    "Magical Grape Chia Pop",
    "Magical Pineapple Chia Pop",
    "Magical Onion Chia Pop",
    "Magical Peach Chia Pop",
    "Magical Chokato Chia Pop",
    "Magical Apple Chia Pop",
    "Magical Tomato Chia Pop",
    "Magical Durian Chia Pop",
    "Magical Thornberry Chia Pop",
    "Magical Blueberry Chia Pop",
    "Magical Strawberry Chia Pop",
    "Magical Plum Chia Pop",
    "Magical Lime Chia Pop",
    "Magical Orange Chia Pop",
    "Magical Pepper Chia Pop",
    "Magical Agueena Chia Pop",
    "Magical Aubergine Chia Pop",
    "Magical Lemon Chia Pop",
    "Magical Avocado Chia Pop",
    "Magical Pear Chia Pop",
    "Crystal Turkey",
    "Frozen Negg",
    "Tartan Chia Pop",
    "Magical Gooseberry Chia Pop",
    "Crystal Taco",
    "Ice Ice Cream",
    "Snow Burrito",
    "Moehog Lollypop",
    "Borovan in a Cone",
    "Royal Ice Lolly",
    "Mint Kyrii Ice Cream",
    "Spicey Ice Soup",
    "Faerie Kougra Ice Lolly",
    "Snot Brucicle",
    "Snow Gyro",
    "Lenny Lime Lutari Pop"
]

if (document.URL.includes("objects")) {
    const FROM = 9000
    const TO = 17000

    const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

    buyItem(itemsToBuy, refreshTimes)
}
