// ==UserScript==
// @name           Cheeseroller Autofudger
// @namespace      Neoscripts
// @description	   Autoplays Cheeseroller
// @version        1.0.0
// @author         -
// @match          *://www.neopets.com/medieval/cheeseroller.phtml*
// @grant          none
// ==/UserScript==

const x = 1000; //change the page delay here; 1000 = 1 second
let cheese;

function submitAction() {
    cheese.click(); 
    cheese.form.submit();
}

function getXPath(node) {
    return document.evaluate(node, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
}

function delay() {
    if (document.body.innerHTML.indexOf('DISTANCE TO FINISH LINE') != -1) {
        const lists = document.getElementsByTagName("select"); 
        for (let i = 0; i < lists.length; i++) { 
            if (lists[i].name == "cheese_action") { lists[i].options[3].selected = true; } 
        }
        cheese = getXPath('//form[@action="cheeseroller.phtml"]/input[@type = "submit" and @value = "Go!"]')
    }

    if (document.body.innerHTML.indexOf('GO!!!!') != -1) {
        cheese = getXPath('//input[@type = "submit" and @value = "GO!!!!"]') 
    }

    if (document.body.innerHTML.indexOf('Play Again') != -1) {
        cheese = getXPath('//input[@type = "submit" and @value = "Play Again?"]')
    }

    if (document.body.innerHTML.indexOf('Quadruple Fudge Cheese at 1800 NP') != -1) {
        cheese = getXPath('//input[@type = "submit" and @value = "Buy Quadruple Fudge Cheese at 1800 NP"]')
    }

    if (document.body.innerHTML.indexOf('Which cheese do you wish to purchase?') != -1) {
        const fudge = "Quadruple Fudge"; document.getElementsByName("cheese_name")[0].value = fudge;
        cheese = getXPath('//input[@type = "submit" and @value = "Submit"]') 
    }

    submitAction()
} window.setTimeout(delay, x)