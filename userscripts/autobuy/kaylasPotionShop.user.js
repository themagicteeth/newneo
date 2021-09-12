// ==UserScript==
// @name        Kaylas Potion Shop
// @namespace   Neopets Auto Buy
// @match       *://www.neopets.com/objects.phtml?obj_type=73&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=73
// @match       *://www.neopets.com/haggle.phtml
// @match       *://www.neopets.com/haggle.phtml*
// @grant       none
// @version     1.0.1
// @author      -
// @require     https://raw.githubusercontent.com/themagicteeth/newneo/main/userscripts/autobuy/autoBuy.js
// @description Auto buy for Kaylas
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
const itemsToBuy = [
  "Kaylas Super Special Potion",
  "Elixir of Levelling",
  "Energising Elixir",
  "Meridellian Potion of Defence",
  "Potato Potion",
  "Potion of Doldrums",
  "Strength Serum",
  "Illusens Forest Essence",
  "Essence of Mortog",
  "Twisted Potion of Strength",
  "Mano Root Elixir",
  "Kaylas Golden Brew",
  "Bubbling Fungus",
  "Jar of Forest Earth",
  "Bullseye Potion",
  "Powder of Everlasting Wit",
  "Bomberry Elixir",
  "Cooling Balm of the Warrior",
  "Essence of Drackonack"
]

if (document.URL.includes("objects")) {
  const FROM = 9000
  const TO = 17000
  const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

  buyItem(itemsToBuy, refreshTimes)
}
