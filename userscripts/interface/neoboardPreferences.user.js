// ==UserScript==
// @name           NeoBoard Preferences Upgrade
// @namespace      Neoscripts
// @description    Provides fixes and additions to the Neopets NeoBoards Preferences.
// @version        1.0.0
// @author         -
// @match          *://www.neopets.com/neoboards/preferences.phtml*
// @grant          none
// ==/UserScript==

(() => {
    function changeAv(s) {
        aa = document.getElementsByName('activeAv')[0];
        aa.options.selectedIndex = s;
        document.getElementsByName('avatar')[0].src = `http://images.neopets.com/neoboards/avatars/${aa.value}.gif`;
    }

    // Avatar Extended View
    prefs = document.createElement('div');
    prefs.setAttribute('style', 'float:right;');
    prefs.innerHTML = '<table style="border: 1px solid #000000;" border="0" cellpadding="4" cellspacing="0" width="310" height="96"><tbody><tr><td class="contentModuleHeaderAlt" style="border-bottom: 1px solid #000000;"><strong>Avatar - Expanded View</strong></td></tr><tr><td><center><input value="Enable Expanded View" type="button"></center><div class="sf" style="margin-top: 5px;"><i>(this may take a few seconds, probably freezing your browser while it works)</i></div></td></tr></tbody></table>';

    avatar = document.getElementsByName('avatar')[0].parentNode.parentNode.parentNode.parentNode;
    avatar.setAttribute('width', '466');
    avatar.setAttribute('height', '96');
    avatar.parentNode.insertBefore(prefs, avatar);

    prefs.getElementsByTagName('input')[0].addEventListener('click', function () {
        this.parentNode.parentNode.innerHTML = '<span style="font-size: 11px;">Clicking on an avatar below will select it as the avatar you want. <br><br>Click submit to save your changes.</span>';

        allavs = document.createElement('div');
        allavs.innerHTML = '<br><br><table style="border: 1px solid #000000;" border="0" cellpadding="4" cellspacing="0" width="100%"><tbody><tr><td class="contentModuleHeaderAlt" style="border-bottom: 1px solid #000000;"><strong>Your Avatars</strong></td></tr><tr><td><div style="margin-left: 5px; padding-top: 5px; padding-bottom: 6px;" name="avzone"></div></td></tr></tbody></table>';

        avatar = document.getElementsByName('avatar')[0].parentNode.parentNode.parentNode.parentNode;
        avatar.parentNode.insertBefore(allavs, avatar.nextSibling);

        for (let x = 1, thisOption; thisOption = document.getElementsByName('activeAv')[0].options[x]; x++) {
            if (thisOption.textContent != '------') {
                obj = document.createElement('span');
                obj.setAttribute('style', 'padding: 3px;');
                obj.innerHTML = `<img src="http://images.neopets.com/neoboards/avatars/${thisOption.value}.gif" name="avie_${x}" height="50" width="50" border="0" style="cursor: pointer;"><img src="http://images.neopets.com/neoboards/spacer.gif" height="53" width="0">`;

                document.getElementsByName('avzone')[0].appendChild(obj);

                obj.getElementsByTagName('img')[0].addEventListener('click', function () {
                    changeAv(this.getAttribute('name').replace('avie_', ''));
                }, false);
            }
        }
    }, false);
})();
