// ==UserScript==
// @name         Lottomatic
// @version      1.0.1
// @description  Generate lotto numbers with minimal overlap
// @author       -
// @namespace    Neoscripts
// @match        *://www.neopets.com/games/lottery.phtml*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function () {
    'use strict';
    /* globals $:false */

    let numbers = GM_getValue("numbers", "");

    function shuffle(o) {
        for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    function leaf(a, b) {
        const res = new Array();
        for (let i = 0; i < a.length; i++) {
            res[i * 2] = a[i];
            res[i * 2 + 1] = b[i];
        }
        return res;
    };

    function generate() {
        const arr = new Array();
        for (var i = 0; i < 30; i++)
            arr[i] = i + 1;

        const arr1 = shuffle(arr);
        const arr2 = leaf(arr1.slice(0, 15), arr1.slice(15, 30));
        const arr3 = leaf(arr2.slice(0, 15), arr2.slice(15, 30));
        const arr4 = leaf(arr3.slice(0, 15), arr3.slice(15, 30));
        const marr = arr1.concat(arr2, arr3, arr4);

        numbers = new Array();
        for (i = 0; i < 20; i++)
            numbers[i] = [marr[6 * i], marr[6 * i + 1], marr[6 * i + 2], marr[6 * i + 3], marr[6 * i + 4], marr[6 * i + 5]];
        GM_setValue('numbers', numbers);
        populate();
    };

    function refresh() {
        $('.tickets').remove();
        numbers = [];
        generate();
    };

    function populate() {
        const radiodiv = $('<div class="tickets" style="font-size: 0.8em">');
        numbers.forEach((ticket, idx) => {
            radiodiv.append(`<div><input type="radio" id="${idx + 1}" name="ticket" value="${idx}">
            <label for="${idx + 1}">${idx + 1}: ${ticket.join(', ')}</label></div>`);
        });
        $('td[width=160]').append(radiodiv);
        $('.tickets input').change(function () {
            const ticket = numbers[$(this).val()];
            $('input[name="one"]').val(ticket[0]);
            $('input[name="two"]').val(ticket[1]);
            $('input[name="three"]').val(ticket[2]);
            $('input[name="four"]').val(ticket[3]);
            $('input[name="five"]').val(ticket[4]);
            $('input[name="six"]').val(ticket[5]);
        });
        $('label').click(function () {
            let id = $(this).prop("for");
            $(`#${id}`).click();
        });
    }

    $('document').ready(() => {
        const refreshbtn = $('<a>⭮</a>');
        refreshbtn.click(() => {
            refresh();
        });
        $('td[width=160]').append(refreshbtn);

        if (!numbers) { generate(); }
        else { populate(); }
    });
})();
