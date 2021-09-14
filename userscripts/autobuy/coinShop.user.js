// ==UserScript==
// @name        Coin Shop
// @namespace   Neopets Auto Buy
// @match       *://www.neopets.com/objects.phtml?obj_type=68&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=68
// @match       *://www.neopets.com/haggle.phtml
// @match       *://www.neopets.com/haggle.phtml*
// @grant       none
// @version     1.0.0
// @author      -
// @require     https://raw.githubusercontent.com/themagicteeth/newneo/main/userscripts/autobuy/autoBuy.js
// @description Auto buy for Coin Shop
// ==/UserScript==

const itemsToBuy = [
  "Money Tree Coin",
  "Paint Brush Coin",
  "Crystal Kauvara Coin",
  "Defenders Of Neopia Coin",
  "Dr Sloth Coin",
  "Giant Ghostkerchief Coin",
  "Rainbow Pool Coin",
  "Larnikin Coin",
  "Hasee Coin",
  "Brass Usuki Coin",
  "Turtum Coin",
  "Eliv Thade Coin",
  "Book Coin",
  "Snow Paint Brush Coin",
  "Silver Buzzer Coin",
  "Goo Blaster Coin",
  "Golden Scarab Coin",
  "Chocolate Factory Coin"
]

if (document.URL.includes("objects")) {
 const FROM = 9000
 const TO = 17000

 const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

 buyItem(itemsToBuy, refreshTimes) 
}
