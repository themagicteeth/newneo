// ==UserScript==
// @name           NeoQuest II Trainer
// @namespace      Neoscripts
// @description    Automatically battles for you.
// @grant          GM_log
// @grant          GM_addStyle
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_openInTab
// @grant          GM_deleteValue
// @grant          GM_xmlhttpRequest
// @grant          GM_getResourceText
// @include        *://www.neopets.com/games/nq2/nq2.phtml*
// @version        1.0.0
// ==/UserScript==

//Check for annoying server hiccup before bothering to make any more variables
let hiccup = 1;
const divs = document.getElementsByTagName('div');

for (let i = 0; i < divs.length; i++) {
    if (divs[i].className == "contentModuleHeader") {
        hiccup = 0;
    }
}

if (hiccup) {
    document.location.href = "http://www.neopets.com/games/nq2/nq2.phtml";
}
else {
    //begin real battling!!
    var useid = -1; // use special item??
    var nxactor = 1; // who fightsS??' default =1: rohane
    var fact = 3; // default is attack , will override for low health
    var hitTarget = GM_getValue("hitTarget", 5); //hittargets 1-4 are reserved for allies
    var healingItem = GM_getValue("healingItem", 30011); // get the healing item in case HP turns red or yellow
    var isHasted = GM_getValue("isHasted", false);
    const elements = document.getElementsByTagName('img'); 

    for (let i = 0; i < elements.length; i++) {
        switch (elements[i].src) {
            case "http://images.neopets.com/nq2/x/com_begin.gif":
                GM_setValue("hitTarget", 5);
                GM_setValue("isHasted", false);
                document.location.href = "http://www.neopets.com/games/nq2/nq2.phtml?start=1";
            break;

            case "http://images.neopets.com/nq2/x/com_atk.gif":
                var texts = document.getElementsByTagName("font");

                for (let j = 0; j < texts.length; j++) {
                    //check to increment target
                    if (((texts[j].innerHTML.search(/for it has already been defeated!/)) != -1) || (texts[j].innerHTML == "You must select a valid target to cast on!<BR>")) {
                        hitTarget++;
                        if (hitTarget >= 9) {
                            GM_setValue("hitTarget", 5);
                        }
                        else {
                            GM_setValue("hitTarget", hitTarget);
                        }
                    }
                    //check character's status
                    switch (texts[j].innerHTML) {
                        case "<b>Rohane</b>":
                            if ((texts[j + 1].color == "#d0d000") || (texts[j + 1].color == "red")) {
                                fact = 5;
                                useid = healingItem;
                            }
                        break;

                        case "<b>Mipsy</b>":
                            nxactor = 2;
                            fact = 9201; //use direct damage
                            if (!isHasted) {
                                fact = 9203;
                                GM_setValue("isHasted", true);
                            }
                            if ((texts[j + 1].color == "#d0d000") || (texts[j + 1].color == "red")) {
                                fact = 5;
                                useid = healingItem;
                            }
                        break;

                        case "<b>Talinia</b>":
                            const multipleTargets = /Multiple Targets/;
                            const links = document.getElementsByTagName('a');
                            for (let k = 0; k < links.length; k++) {
                                if ((links[k].innerHTML.search(multipleTargets)) != -1) {
                                    fact = 9302;
                                }
                            }
                            nxactor = 3;
                            if ((texts[j + 1].color == "#d0d000") || (texts[j + 1].color == "red")) {
                                fact = 5;
                                useid = healingItem;
                            }
                        break;

                        case "<b>Velm</b>":
                            var fullhp = 0; //if its 4 then all 4 people are fully healed
                            var allies = false;
                            //loop through all pictures if it's velm's turn
                            for (let l = 0; l < elements.length; l++) {
                                //makes sure the script isn't checking enemies hp
                                if (elements[l].src == "http://images.neopets.com/nq2/x/donothing.gif") {
                                    allies = true;
                                }
                                //if checking allies HP
                                if (allies && (elements[l].src == "http://images.neopets.com/nq2/x/exp_green.gif" && elements[l].width == 45)) {
                                    fullhp++;
                                }
                            }
                            nxactor = 4;
                            fact = 9402; // velm heals, trust me you will need this
                            if (fullhp == 4) {
                                fact = GM_getValue("VelmAction", 9403);
                            }
                            if ((texts[j + 1].color == "#d0d000") || (texts[j + 1].color == "red")) {
                                fact = 5;
                                useid = healingItem;
                            }

                            break;
                    }
                }
                document.location.href = `http://www.neopets.com/games/nq2/nq2.phtml?&fact=${fact}&target=${hitTarget}&use_id=${useid}&nxactor=${nxactor}`;
                break;

            case "http://images.neopets.com/nq2/x/com_next.gif":
                document.location.href = "javascript:setaction(1); document.ff.submit();";
                break;

            case "http://images.neopets.com/nq2/x/com_end.gif":
                document.location.href = "javascript:setaction(2); document.ff.submit();";
                break;

            case "http://images.neopets.com/nq2/x/tomap.gif":
                GM_setValue("hitTarget", 5);
                GM_setValue("isHasted", false);
                document.location.href = "http://www.neopets.com/games/nq2/nq2.phtml?finish=1";
                break;
        }

    }
}
