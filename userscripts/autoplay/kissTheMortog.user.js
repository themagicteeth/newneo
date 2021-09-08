// ==UserScript==
// @name           Kiss the Mortog Autoplayer
// @namespace      Neoscripts
// @description    Plays Kiss the Mortog until it reaches the score of 5,900.
// @version        1.0.0
// @author         -
// @match          *://www.neopets.com/medieval/kissthemortog.phtml*
// @grant          none
// ==/UserScript==

const x = 1000; //change the delay here; 1000 = 1 second
const np = '5,900' // set to neopoints, put a comma

function delay() {
    if (document.body.innerHTML.indexOf(`${np} NP`) != -1) {
        return
    }

    if (document.body.innerHTML.indexOf('Continue') != -1) {
        var button = document.evaluate('//form[contains(@action,"kissthemortog.phtml")]/input[@type = "submit" and @value = "Continue"]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
        button.click();
        button.form.submit();
    }
    if (document.body.innerHTML.indexOf('Try again...') != -1) {
        var button = document.evaluate('//form[contains(@action,"kissthemortog.phtml")]/input[@type = "submit" and @value = "Try again..."]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
        button.click();
        button.form.submit();
    }

    if (document.body.innerHTML.indexOf('Select your Mortog') != -1) {
        const links = document.evaluate("//a[@href]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

        for (let i = 0; i < links.snapshotLength; ++i) {
            flip = links.snapshotItem(i);

            if (flip.href.match('kissthemortog.phtml.type=frogprince&num=1')) {
                document.location = flip.href;
                return;
            }
        }
    }
}
window.setTimeout(delay, x)