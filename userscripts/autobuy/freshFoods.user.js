// ==UserScript==
// @name        Neopian Fresh Foods Auto Buy
// @namespace   Neoscripts
// @match       *://www.neopets.com/objects.phtml?obj_type=1&type=shop
// @match       *://www.neopets.com/objects.phtml?type=shop&obj_type=1
// @match       *://www.neopets.com/haggle.phtml
// @match       *://www.neopets.com/haggle.phtml*
// @require     https://raw.githubusercontent.com/themagicteeth/newneo/main/userscripts/autobuy/autoBuy.js
// @grant       none
// @version     1.0
// @author      -
// @description Auto buy for Neopian Fresh Foods
// ==/UserScript==

// Modify this list for your desired items
// Items in list from https://neopets-cheats.com/neopets-restocking-guide/
// http://www.neocodex.us/forum/topic/119039-ab-lists-share-your-up-to-date-lists/#entry2032905
const itemsToBuy = [
  "Rainbow Carrot",
  "Christmas Pattern Negg",
  "Puzzle Fruit",
  "Container of Purple Liquid",
  "Pretty Purple Princess Negg",
  "Blue Cybunny Negg",
  "Cheesy Chokato Pie",
  "Blue Picnic Hamper",
  "Upside Down Ice Cream",
  "Fun Icy Cheese Pop",
  "Rainbow Apple",
  "Pirate Negg",
  "Plum",
  "Grey Toast",
  "Tigersquash Custard",
  "Chokato Toffee Apple",
  "Cheesy Carrot Chunks",
  "Cheesy Strawberry Slice",
  "Tchea Toffee Apple",
  "Steak Surprise",
  "Honey and Bacon Burger",
  "Le Sausage",
  "Super Icy Custard",
  "Raspberry Toffee Apple",
  "Funnydew Neggnog",
  "Starry Scorchipepper",
  "Meerca Apertif",
  "Chilli Salmon Souffle",
  "Welsh Rarebit",
  "Rainbow Neggnog",
  "Black Caviar",
  "Mega Pipper Sandwich",
  "Peach Jelly",
  "Island Meatloaf",
  "Mutated Negg",
  "Zeenana Toffee Apple",
  "Starry Cupcake",
  "Acara Ice Cream Surprise",
  "Bangers and Mash",
  "Heart Shaped Negg",
  "Rainbow Negg",
  "Kau Waffles",
  "Chokato Neggnog",
  "Mega Manoroot Sandwich",
  "Flaming Tuskaninny Ice Cream",
  "Frozen Veggie Delight",
  "Cybunny Day Canape",
  "Square Meat",
  "Steak Negg",
  "Tasty Guacamole",
  "Ruki Salad",
  "Lenny Salad",
  "Mynci Surprise Ice Cream",
  "Lutari Fizz",
  "Ice Apple",
  "Peanut Dash Stir Fry",
  "Seaweed Flotsam Burger",
  "Twin Salad",
  "Puntec Parcel",
  "Fire Apple",
  "Petpet Crackers",
  "Mega Tuna Sandwich",
  "Fire Carrot",
  "Cawl",
  "Grey Eggs and Bacon",
  "Battle Duck Negg",
  "Red Picnic Hamper",
  "Deluxe Peophin Burger",
  "Raspberry Jam",
  "Glowing Apple",
  "Techo Jelly Surprise",
  "JubJub Coconut Juice",
  "Chocolate Shoyru Meatball",
  "Watermelon Roll",
  "Flotsam Fin Soup",
  "Green Ham",
  "Purple Carrot",
  "Flied Rice",
  "Unripe Puntec Wrap",
  "Rock Negg",
  "Fruit Tart",
  "Maple Syrup Negg",
  "Squibble Berry Sandwich",
  "Noil Candy Floss",
  "Meerca Bolognese",
  "Grey Waffles",
  "Turkey Drumstick Dinner",
  "Buzz Sandwich",
  "Thistleberry Sandwich",
  "Nimmo Day Fruit Cake",
  "Baby Elephante Milk Bottle",
  "Congratulations Negg",
  "Grapeade",
  "Roast Chestnut Neggnog",
  "Snotty Vira Onion",
  "Mynci Fruit Kebab",
  "Cookie Negg",
  "Kau Ice Lolly",
  "Raspberry Sundae",
  "Squid Sauce",
  "Pickled Onion",
  "Buzz Bread Salad",
  "Strawberry JubJub Sundae",
  "Mosaic Negg",
  "Stuffed Chokatos",
  "Swirly Chocolate Milk",
  "Star Shaped Cheeseburger",
  "Gooey Green Shake",
  "Quadruple Scoop of Sorbet",
  "Cybunny Carrot Stew",
  "Shell Lollypop",
  "Clam and Meatball Pizza",
  "Buzz Dung Cone",
  "Apple Rigamaroll",
  "Caramel Chia Parfait",
  "Cheese Rigamaroll",
  "Tall Stack of Mutant Pancakes",
  "Spicy Purblare Juice",
  "Chocolate Kau Milk",
  "Chocolate Covered Toffee",
  "Festive Faerie Fizz"
]

if (document.URL.includes("objects")) {
  const FROM = 9000
  const TO = 17000

  const refreshTimes = Math.floor(Math.random() * parseFloat(TO - FROM)) + parseFloat(FROM)

  buyItem(itemsToBuy, refreshTimes)
}
