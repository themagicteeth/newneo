// ==UserScript==
// @name           Tyranu Evavu Autoplayer
// @namespace      Neoscripts
// @description    Autoplays Tyranu Evavu remembering which cards have been played
// @version        1.0.0
// @author         -
// @match          *://www.neopets.com/games/tyranuevavu.phtml*
// @grant          none
// ==/UserScript==

const KEY_PLAY = 'playTyranuEvavu';
const KEY_CARDS = 'cards';

addToggleButton();

if (JSON.parse(localStorage.getItem(KEY_PLAY))) {
    setTimeout(execute, 1000 * (1 + Math.random()));
}

function execute() {
    startGame();
    playGame();
    endGame();
}

function addToggleButton() {
    const toggleButton = document.createElement('button');
    toggleButton.id = 'autoplayer';
    toggleButton.style.display = 'block';
    toggleButton.style.margin = '0 auto';
    toggleButton.addEventListener('click', toggleAutoPlay);

    const content = document.getElementsByClassName('content')[0];
    content.prepend(toggleButton);
    updateButtonText();
}

function updateButtonText() {
    const autoplayIsOn = !!JSON.parse(localStorage.getItem(KEY_PLAY));
    document.getElementById('autoplayer').innerHTML = (autoplayIsOn ? 'Stop AP' : 'Start AP');
}

function toggleAutoPlay() {
    const autoplayIsOn = !!JSON.parse(localStorage.getItem(KEY_PLAY));
    localStorage.setItem(KEY_PLAY, !autoplayIsOn);
    updateButtonText();

    if (!autoplayIsOn) {
        execute();
    }
}

function startGame() {
    const form = document.querySelector('form[action="tyranuevavu.phtml"]');

    if (form?.querySelector('input[name="type"][value="play"]')) {
        const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
        const cards = [];

        for (let i = 2; i <= 14; i++) {
            for (let j = 0, len = suits.length; j < len; j++) {
                cards.push(`${i}_${suits[j]}`);
            }
        }

        localStorage.setItem('cards', JSON.stringify(cards));
        form.submit();
    }
}

function playGame() {
    const tyranuButton = document.querySelector('a[href^="tyranuevavu.phtml?type=play&action=higher"]');
    const evavuButton = document.querySelector('a[href^="tyranuevavu.phtml?type=play&action=lower"]');

    if (tyranuButton) {
        updateRound();

        const url = document.querySelector('img[src^="//images.neopets.com/games/cards/"]').src;
        const card = url.match('cards\/(.+)\.gif');

        const cards = JSON.parse(localStorage.getItem(KEY_CARDS));
        const length = cards.length;
        const index = cards.indexOf(card[1]);

        cards.splice(index, 1);
        localStorage.setItem(KEY_CARDS, JSON.stringify(cards));

        if (length > 1) {
            if (index / (length - 1) > 0.5) {
                evavuButton.click();
            } else {
                tyranuButton.click();
            }
        } else {
            alert('You have won the game!');
        }
    }
}

function updateRound() {
    const content = document.getElementsByClassName('content')[0];
    const center = content.getElementsByTagName('center')[0];
    const b = center.getElementsByTagName('b')[0];
    const round = parseInt(b.innerHTML);

    document.title += ` (${round})`;
}

function endGame() {
    const form = document.querySelector('form[action="tyranuevavu.phtml"]');

    if (form?.querySelector('input[name="type"][value="intro"]')) {
        form.submit();
    } else {
        limitReached();
    }
}

function limitReached() {
    const form = document.querySelector('form[action="/gameroom.phtml"]');

    if (form) {
        document.title += ' (Limit Reached)';
    }
}