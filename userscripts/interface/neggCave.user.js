// ==UserScript==
// @name         Negg Cave Solver
// @namespace    Neopets
// @version      1.0.1
// @description  Adds a button to automatically copy page source, and open solution page
// @match        *://www.neopets.com/shenkuu/neggcave/
// @grant        GM_openInTab
// @grant        GM_setClipboard
// @author       -
// ==/UserScript==

/*
 PLEASE BE AWARE THAT WHEN YOU CLICK THE BUTTON
 IT WILL OVERWRITE WHATEVER IS IN YOUR CLIPBOARD!!!!
 
 YOU HAVE BEEN WARNED!
*/

// Create the button
const itemCheckerButton = document.createElement("button")  // Create the button element
itemCheckerButton.innerText = "Get the solution" // Button text
itemCheckerButton.style.margin = "0 0.5em"  // Styling for the button

const titleArea = document.getElementById("mnc_popup_generic_wrongdate")  // Location to place the button
titleArea.after(itemCheckerButton) // Place the button


// Add an onClick event to the button to open the solver page
itemCheckerButton.onclick = e => {
  // Copy page source to clipboard
  GM_setClipboard(document.documentElement.outerHTML)

  // Open the puzzle solver page in a new tab
  GM_openInTab("https://thedailyneopets.com/articles/negg-solver/")
}
