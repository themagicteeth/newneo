// ==UserScript==
// @name        Defense Magic
// @namespace   Neopetscripts
// @match       *://www.neopets.com/objects.phtml?obj_type=10&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=10
// @match       *://www.neopets.com/haggle.phtml
// @match       *://www.neopets.com/haggle.phtml*
// @grant       none
// @version     1.0
// @author      -
// @require     https://raw.githubusercontent.com/themagicteeth/newneo/main/userscripts/autobuy/autoBuy.js
// @description Auto buy for Defense
// ==/UserScript==

const itemsToBuy = [
  "Thyoras Tear",
  "Rainbow Scorchstone",
  "Purple Scorchstone",
  "Squishy Shoyru Healing Stone",
  "Bag of Lenny Healing Seeds",
  "Kaylas Magic Cloak",
  "Superior Reflection Shield",
  "Ultra Dual Shovel",
  "Ultimate Dark Reflectorb",
  "Flame Reflectozap",
  "Mega U-Bend",
  "Triple Turbo Dryer"
]

if (document.URL.includes("objects")) {
  const FROM = 9_000
  const TO = 17_000

  const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

  buyItem(itemsToBuy, refreshTimes)
}