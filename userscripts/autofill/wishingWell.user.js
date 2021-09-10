// ==UserScript==
// @name           Wishing Well Automater
// @namespace      Neoscripts
// @description    Fills in Amount of donation and item
// @version        1.0.0
// @author         -
// @match          *://www.neopets.com/wishing.phtml*
// @grant          none
// ==/UserScript==


// Set these to whatever you want
const BET = 21;
const ITEM = 'Usukicon Y23 Goodie Bag';

$("input[name='donation']").val(BET);
$("input[name='wish']").val(ITEM);
