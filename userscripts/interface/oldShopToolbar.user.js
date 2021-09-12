// ==UserScript==
// @name         Neopets old shop toolbar
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Changes shops links to old shop toolbar
// @author       juvian123
// @match        *://www.neopets.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(() => {
    const toolbar = $(`<div style="text-align:center">
    <img src="https://images.neopets.com/images/shops/shoptoolbar_2004_01.gif" alt="" usemap="#shopbar" />
    <map name="shopbar">
        <area shape="poly" coords="503, 68, 503, 43, 520, 46, 524, 66" />
        <area shape="poly" coords="469, 66, 468, 41, 498, 45, 498, 63" />
        <area shape="poly" coords="435, 38, 442, 65, 461, 67, 467, 38" />
        <area shape="poly" coords="407, 64, 409, 40, 434, 44, 437, 66, 408, 71" />
        <area shape="poly" coords="384, 58, 383, 36, 406, 34, 400, 64" />
        <area shape="poly" coords="360, 64, 360, 38, 379, 36, 379, 60" />
        <area shape="poly" coords="339, 60, 333, 33, 353, 30, 357, 59" />
        <area shape="poly" coords="311, 61, 310, 34, 329, 33, 334, 64" />
        <area shape="poly" coords="248, 56, 300, 55, 300, 81, 277, 110, 255, 100" />
        <area shape="poly" coords="248, 54, 259, 7, 286, 9, 303, 55" />
        <area shape="poly" coords="208, 66, 211, 40, 238, 42, 241, 73" />
        <area shape="poly" coords="189, 73, 186, 40, 205, 40, 205, 73" />
        <area shape="poly" coords="159, 77, 151, 42, 181, 42, 183, 74" />
        <area shape="poly" coords="131, 74, 119, 46, 143, 43, 154, 77" />
        <area shape="poly" coords="85, 77, 90, 42, 115, 49, 128, 78" />
        <area shape="poly" coords="55, 80, 58, 50, 82, 56, 79, 80" />
        <area shape="poly" coords="30, 49, 40, 42, 52, 49, 52, 67, 39, 73, 29, 66" />
    </map>
    </div>`);
    const links = [
        'inventory.phtml',
        'market.phtml?type=your',
        '/gallery/index.phtml',
        '/auctions.phtml',
        '/noticeboard.phtml',
        '/market.phtml?type=wizard',
        '/battledome/battledome.phtml',
        '/objects.phtml',
        '/market_bazaar.phtml',
        '/soupkitchen.phtml',
        '/quickref.phtml',
        '/stockmarket.phtml?type=list&search=%&bargain=true',
        '/bank.phtml',
        '/island/tradingpost.phtml',
        '/donations.phtml',
        '/safetydeposit.phtml',
        '/neohome.phtml'
    ];
    const alts = [
        'Inventory',
        'My shop',
        'My gallery',
        'Auctions',
        'Noticeboard',
        'Shop Wizard',
        'Battledome',
        'Neopia Central',
        'Neopian Bazaar',
        'Soup Kitchen',
        'My pets',
        'Bargain Stocks',
        'Bank',
        'Trading Post',
        'Donations',
        'Safety Deposit Box',
        'Noehome'
    ];

    $("a[href='/market.phtml?type=wizard']").parent().filter(function () { return $(this).parents("ul").length == 0 }).replaceWith(toolbar);
    toolbar.find('area').each(function () {
        $(this).attr("title", alts[links.length - $(this).index() - 1])
        $(this).attr("href", links[links.length - $(this).index() - 1])
    });
})();
