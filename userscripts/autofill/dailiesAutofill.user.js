// ==UserScript==
// @name         Dailies Autofill
// @author       -
// @version      1.0.0
// @namespace    Neoscripts
// @description  Auto selects multi-choice options for Wise King, Grumpy King, Symol Hole, Turmaculus, and Meteor.
// @match        *://www.neopets.com/medieval/wiseking.phtml
// @match        *://www.neopets.com/medieval/symolhole.phtml
// @match        *://www.neopets.com/medieval/grumpyking.phtml
// @match        *://www.neopets.com/medieval/turmaculus.phtml
// @match        *://www.neopets.com/moon/meteor.phtml*
// @grant        none
// ==/UserScript==

//Wise King and Symol Hole
const $form = $("form");

$form.find("select").each((index, element) => {
    const numOptions = $(element).find("option").length;
    const random = Math.floor(Math.random() * (numOptions - 1)) + 1;
    $(element).find("option").eq(random).prop("selected", true);
});

//Grumpy King
if (document.URL.includes("grumpyking")) {
    //["What", "do", "you do if", "*Leave blank*", "fierce", "Peophins", "*Leave blank*", "has eaten too much", "*Leave blank*", "tin of olives"];
    const avOptions = [3, 8, 6, 1, 39, 118, 1, 32, 1, 143];
    for (let i = 0; i < 10; i++) {
        $(`#qp${i + 1} option`).eq(avOptions[i]).prop("selected", true);
    }
}

//Turmaculus
if (document.URL.includes("turmaculus")){
    const $select = $("select[name='wakeup']");

    $select.each((index, element) => {
        const numOptions = $(element).find("option").length;
        const random = Math.floor(Math.random() * (numOptions - 1)) + 1;
        $(element).find("option").eq(random).prop("selected", true);
    });
}

//Meteor
if(document.URL.includes("meteor")){
    const $form = $("form");

    $form.find("select").each((index, element) => {
        $(element).find("option").eq(1).prop("selected", true);
    });
}
