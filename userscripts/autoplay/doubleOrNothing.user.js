// ==UserScript==
// @name           Double Or Nothing Autoplayer
// @namespace      Neoscripts
// @description    Plays Double or Nothing for you.
// @version        1.0.0
// @author         -
// @match        *://www.neopets.com/medieval/doubleornothing.phtml*
// @grant          none
// ==/UserScript==

const seconds = 1000 //Change the page delay here; 1000 = 1 second

function timeout() {	//timeout function 
    if (document.body.innerHTML.indexOf('81,920 NP') != -1) {
        return
    }

    if (document.body.innerHTML.indexOf('Continue') != -1) {
        const button = document.evaluate('//form[contains(@action,"doubleornothing.phtml")]/input[@type = "submit" and @value = "Continue"]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0)
        button.click()
        button.form.submit()
    }

    if (document.body.innerHTML.indexOf('Try again...') != -1) {
        const button = document.evaluate('//form[contains(@action,"doubleornothing.phtml")]/input[@type = "submit" and @value = "Try again..."]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0)
        button.click()
        button.form.submit()
    }

    const links = document.evaluate("//a[@href]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null)

    for (let i = 0; i < links.snapshotLength; ++i) {
        flip = links.snapshotItem(i)

        if (flip.href.match('doubleornothing.phtml.type=cointoss')) {
            document.location = flip.href
            return
        }
    }

}

window.setTimeout(timeout, seconds)