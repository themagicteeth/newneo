// ==UserScript==
// @name           Mysterious Symol Hole
// @namespace      Neoscripts
// @description    Plays Mysterious Symol Hole
// @author         -
// @version        1.0.0
// @match         *://www.neopets.com/medieval/symolhole.phtml
// @grant          none
// ==/UserScript==


setTimeout(() => {
    window.location = "https://www.neopets.com/medieval/symolhole.phtml";
}, 8000);

document.getElementById("enterhole").click()
