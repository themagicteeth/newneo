// ==UserScript==
// @name        Toy Shop Auto Buy
// @namespace   Neoscripts
// @match       *://www.neopets.com/objects.phtml?obj_type=3&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=3
// @match       *://www.neopets.com/haggle.phtml
// @match       *://www.neopets.com/haggle.phtml*
// @require     https://raw.githubusercontent.com/themagicteeth/newneo/main/userscripts/autobuy/autoBuy.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for the Toy Shop
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
// http://www.neocodex.us/forum/topic/119039-ab-lists-share-your-up-to-date-lists/#entry2032905
const itemsToBuy = [
  "Usukicon Y22 Goodie Bag",
  "Neopets 21st Birthday Goodie Bag",
  "Halloween Y14 Goodie Bag",
  "Elephante Lamp Collectable Charm",
  "Sloth Collectable Charm",
  "Techo Statue Collectable Charm",
  "Gallion Collectable Charm",
  "Taiko Standing Drum Collectable Charm",
  "Princess Terrana Collectable Charm",
  "Wherfy Collectable Charm",
  "Spite Doll",
  "Malice Doll",
  "Vanity Doll",
  "Space Faerie Doll",
  "Soup Faerie Doll",
  "Water Faerie Doll",
  "Fire Faerie Doll",
  "Negg Faerie Doll",
  "Tooth Faerie Doll",
  "Air Faerie Doll",
  "Dark Faerie Doll",
  "Light Faerie Doll",
  "A Grey Faerie Doll",
  "Illusen Faerie Doll",
  "Taelia Quiguki",
  "Lost Desert Quiguki",
  "Year 9 Quiguki",
  "Jeran Quiguki",
  "Quiguki Mermaid",
  "Blushing Bride Quiguki Doll",
  "King Skarl Quiguki",
  "Hannah Quiguki",
  "Beautiful Hair Quiguki Doll",
  "Luxury Faerie Festival Snowglobe",
  "Luxury Beach Scene Faerie Snowglobe",
  "Luxury Dark and Light Faerie Snowglobe",
  "Luxury Dark and Earth Faerie Snowglobe",
  "Negg Faerie Snowglobe",
  "Cyodrake Collectable Charm",
  "Baby Techo Bobblehead",
  "Floud Balloon",
  "Glowing Mushrooms"
]

if (document.URL.includes("objects")) {
  const FROM = 9_000
  const TO = 17_000

  const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

  buyItem(itemsToBuy, refreshTimes)
}
