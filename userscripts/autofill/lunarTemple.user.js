// ==UserScript==
// @name           Shenkuu Lunar Temple Solver
// @namespace      Neoscripts
// @description    Autosolver for the Shenkuu Lunar Temple
// @version        1.0.0
// @author         -
// @match          *://www.neopets.com/shenkuu/lunar/?show=puzzle
// @grant          none
// ==/UserScript==

const d = document;
const html = $("html").html();

if (html.includes("Please try again tomorrow")) {
    console.log("Come back after 12am NST!");
    return false;
}

const angle = html.match(/angleKreludor=(\d+)/)[1];
const angleList = [0, 12, 34, 57, 79, 102, 124, 147, 169, 192, 214, 237, 259, 282, 304, 327, 349, 361];

let answer = null;

for (var i = 0; i < angleList.length; i++) {
    if (i <= 7) {
        if (angle >= angleList[i] && angle < angleList[i + 1]) {
            console.log(`2nd row, #${i + 1} from left`);
            answer = i + 8;
            break;
        }
    } else if (i <= 15) {
        if (angle >= angleList[i] && angle < angleList[i + 1]) {
            console.log(`1st row, #${i - 7} from left`);
            answer = i - 8;
            break;
        }
    } else if (i <= 17) {
        console.log("2nd row, #1 from left");
        answer = 8;
        break;
    }
}

let $answer = $("input[onclick='this.form.submit();']").eq(answer);
$answer.parent().css({
    "background-color": "#00ffbf",
    "border-style": "solid",
    "border-color": "#00ff00"
});