// ==UserScript==
// @name           Mysterious Symol Hole
// @namespace      Neoscripts
// @description    Plays Mysterious Symol Hole
// @author         -
// @version        1.0.1
// @match         *://www.neopets.com/medieval/symolhole.phtml
// @grant          none
// ==/UserScript==


setTimeout(() => {
    window.location = "http://www.neopets.com/medieval/symolhole.phtml";
}, 8_000);

document.getElementById("enterhole").click()
