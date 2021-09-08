// ==UserScript==
// @name           Dice-A-Roo Autoplayer
// @namespace      Neoscripts
// @description    Plays Dice-a-Roo for you.
// @version        1.0.0
// @author         -
// @match          *://www.neopets.com/games/play_dicearoo.phtml
// @match          *://www.neopets.com/games/dicearoo.phtml
// @grant          none
// ==/UserScript==

function findLinkContainingString(myStr) {
    const aTags = document.getElementsByTagName("input")
    const searchText = myStr
    let found = null

    for (let i = 0; i < aTags.length; i++) {
        if (aTags[i].value.search(searchText) != -1) {
            console.log(`Found tag with textContent: ${aTags[i].value}`)
            found = aTags[i]
            break
        }
    }
    return found
}

setTimeout(() => { Main() }, 2000)

function Main() {
    const resetear = findLinkContainingString("Lets Play!")
    const play = findLinkContainingString("Play Dice-A-Roo")
    const rollAgain = findLinkContainingString("Roll Again")
    const pressMe = findLinkContainingString("Press Me")

    if (resetear !== null) {
        resetear.click()
    } if (play !== null) {
        play.click()
    } else if (document.body.innerHTML.search("You are now eligible to use") < 0) {
        if (rollAgain !== null) {
            rollAgain.click()
        } else {
            pressMe.click()
        }
    }
}