// ==UserScript==
// @name           Scorchy Slots Autoplayer
// @namespace      Neoscripts
// @description    Autoplayer for Scorchy Slots
// @version        1.0.0
// @author         -
// @match          *://www.neopets.com/games/slots.phtml*
// @grant          none
// ==/UserScript==

if (document.body.innerHTML.indexOf('HOLD') !== -1) {
    // Processes symbols and sets holds
    const spin = () => {

        // Gets the spun symbol from a slot
        const symbolIndex = (index) => {
            return document.querySelector(`
				.frame > 
				div:nth-child(2) > 
				form:nth-child(4) > 
				table:nth-child(2) > 
				tbody:nth-child(1) > 
				tr:nth-child(2) > 
				td:nth-child(${index}) > 
				img:nth-child(1)`
            ).getAttribute('src').split('/').pop().split('_')[0]
        }

        // An array of the spun symbols
        const spunSymbols = [
            symbolIndex(1),
            symbolIndex(2),
            symbolIndex(3),
            symbolIndex(4)
        ]

        // Count the number of each symbol
        const symbolCount = {}
        spunSymbols.forEach((x) => { symbolCount[x] = (symbolCount[x] || 0) + 1; });

        // Put count of each symbol into its own variable for comparison
        const melons = symbolCount.melon === undefined ? 0 : symbolCount.melon
        const apples = symbolCount.apple === undefined ? 0 : symbolCount.apple
        const peaches = symbolCount.peach === undefined ? 0 : symbolCount.peach
        const bells = symbolCount.bell === undefined ? 0 : symbolCount.bell
        const goldBags = symbolCount.goldbag === undefined ? 0 : symbolCount.goldbag
        const mapPieces = symbolCount.mappiece === undefined ? 0 : symbolCount.mappiece
        const faeries = symbolCount.faerie === undefined ? 0 : symbolCount.faerie

        // Not in use
        // const cherries = symbolCount.cherry === undefined ? 0 : symbolCount.cherry
        // const strawberries = symbolCount.strawberry === undefined ? 0 : symbolCount.strawberry
        // const grapes = symbolCount.grape === undefined ? 0 : symbolCount.grape

        const checkBox = (box) => { document.querySelector(`input[name="${box}"`).checked = true }
        // Function that takes a symbol name and checks the hold box
        const checkHold = (symbol) => {
            if (spunSymbols[0] === symbol) { checkBox('hold1') }
            if (spunSymbols[1] === symbol) { checkBox('hold2') }
            if (spunSymbols[2] === symbol) { checkBox('hold3') }
            if (spunSymbols[3] === symbol) { checkBox('hold4') }
        }

        // http://www.jellyneo.net/?go=scorchy_slots
        // Hold the pair in the middle regardless of payout, greater chance to win three
        if (spunSymbols[1] === spunSymbols[2]) {
            if (spunSymbols[0] == spunSymbols[1]) { checkBox('hold1') }
            if (spunSymbols[3] == spunSymbols[1]) { checkBox('hold4') }

            checkBox('hold2')
            checkBox('hold3')
        }

        // If first two symbols match, hold them
        else if (spunSymbols[0] === spunSymbols[1]) {
            if (spunSymbols[2] == spunSymbols[0]) { checkBox('hold3') }
            if (spunSymbols[3] == spunSymbols[0]) { checkBox('hold4') }

            checkBox('hold1')
            checkBox('hold2')
        }

        // If last two symbols match, hold them
        else if (spunSymbols[2] === spunSymbols[3]) {
            if (spunSymbols[0] == spunSymbols[2]) { checkBox('hold1') }
            if (spunSymbols[1] == spunSymbols[2]) { checkBox('hold2') }

            checkBox('hold3')
            checkBox('hold4')
        }

        else if (goldBags >= 1 && mapPieces < 2 && faeries < 2) { checkHold('goldbag') }                            // Holds goldbags in case there's one bag, one faerie and one mappiece
        else if (goldBags < 1 && faeries < 1 && mapPieces >= 1) { checkHold('mappiece') }	                          // Holds maps if there are no bags or faeries
        else if (goldBags < 1 && faeries >= 1 && mapPieces < 1) { checkHold('faerie') }	                            // Holds faeries if there are no bags or maps	
        else if (apples >= 2) { checkHold('apple') }	                                                              // Holds apples if there are at least two
        else if (bells >= 2 && peaches <= 2 && goldBags < 2 && faeries < 2) { checkHold('bell') }	                  // Holds bells if there are at least two
        else if (peaches >= 2 && bells <= 1 && goldBags < 2 && mapPieces < 2 && faeries < 2) { checkHold('peach') }	// Holds peaches if there are at least two
        else if (melons >= 3) { checkHold('melon') }	                                                              // Holds melons if there are three or more
    }

    spin()
    proceed()
}
else { proceed() } // Can't hold this turn

// Go on to the next spin
function proceed() {
    // The button to spin/collect winnings
    const button = document.querySelector("#content > table > tbody > tr > td.content > div.contentModule.phpGamesPortalView > div > div:nth-child(2) > form").lastElementChild.firstElementChild

    // Click play again button
    button.click();
    button.form.submit();
}
