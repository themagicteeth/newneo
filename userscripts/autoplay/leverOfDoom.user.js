// ==UserScript==
// @name           Lever of Doom Autopuller
// @namespace      Neoscripts
// @description    Pulls the Lever of Doom!
// @version        1.0.0
// @author         -
// @match          *://www.neopets.com/space/strangelever.phtml
// @match          *://www.neopets.com/space/leverofdoom.phtml
// @grant          none
// ==/UserScript==

function findLinkContainingString(myStr) {
    const aTags = document.getElementsByTagName("input");
    const searchText = myStr;
    let found;

    for (let i = 0; i < aTags.length; i++) {
        if (aTags[i].value.search(searchText) != -1) {
            found = aTags[i];
            break;
        }
    }
    return found;
}

const pullLever = findLinkContainingString("Pull the Lever Anyway");

if (document.body.innerHTML.search("You are now eligible to use") < 0) {
    if (!document.querySelector("a[href='strangelever.phtml']")) {
        pullLever.click();
    } else {
        document.querySelector("a[href='strangelever.phtml']").click()
    }
}