// ==UserScript==
// @name           NeoQuest II Mover
// @namespace      Neoscripts
// @description    Binds keys for movement in Neoquest II.
// @grant          none
// @include        *://www.neopets.com/games/nq2/nq2.phtml*
// @version        1.0.0
// ==/UserScript==

//https://css-tricks.com/snippets/javascript/javascript-keycodes/
document.onkeydown = (e) => {
    switch (e.which) {
        case 50: // left,2
            dosub(3);
            break;

        case 54: // up, 6
            dosub(1);
            break;

        case 56: // right,8
            dosub(4);
            break;

        case 52: // down, 4
            dosub(2);
            break;

        case 51: //northwest, 3
            dosub(5);
            break;

        case 57: //northeast, 9
            dosub(7);
            break;

        case 49: //southwest, 1
            dosub(6);
            break;

        case 55: //southeast, 7
            dosub(8);
            break;

        default: return; // exit this handler for other keys
    }

    e.preventDefault(); // prevent the default action (scroll / move caret)
};
