// ==UserScript==
// @name           NeoQuest II Trainer
// @namespace      Neoscripts
// @description    Moves leftand right, use with autto battler.
// @grant          GM_getValue
// @grant          GM_setValue
// @include        *://www.neopets.com/games/nq2/nq2.phtml*
// @version        1.0.0
// ==/UserScript==


if(GM_getValue("goLeft")) {
  document.location.href="javascript:dosub(3)";
  GM_setValue("goLeft",false);
}
else {
  document.location.href="javascript:dosub(4)";
  GM_setValue("goLeft",true);
}
