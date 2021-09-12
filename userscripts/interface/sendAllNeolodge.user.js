// ==UserScript==
// @name         Send All Pets
// @namespace    Neoscripts
// @version      2021.03.25
// @description  Because you can never be too lazy. Sends all your neopets to the lodge with just one click!
// @author       -
// @match        *://www.neopets.com/neolodge.phtml
// @grant        none
// ==/UserScript==

$("form[action='book_neolodge.phtml']").after(`<br><p><b>Step 5.</b> Or alternatively, fuck all of the above and just click on this button instead.</p><br><div style="text-align: center"><button id="book-all" type="button" style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 9pt; padding: 10px;">I'm a fucking terrible owner.<br> Please send all my slaves to die in<br>Cockroach Towers for 28 nights.</div><br><br><div id="sad-pets" style="text-align: center;"></div><br><div style="text-align:center;"><i>Don't do this to us!</i></div>`);

const username = appInsightsUserName || $(".user a[href*='/userlookup']").text();
let pets = [];
$("select[name='pet_name']").find("option").each((index, element) => {
    if (index !== 0) {
        pets.push($(element).text().trim());
    }
});

$("#book-all").on("click", function () {
    return new Promise(resolve => {
        $(this).prop("disabled", true);
        for (let i = 0; i < pets.length; i++) {
            setTimeout(() => {
                $.ajax({
                    type: "POST",
                    url: "/book_neolodge.phtml",
                    async: false,
                    data: {
                        "pet_name": pets[i],
                        "hotel_rate": "5",
                        "nights": "28"
                    },
                    success: (data, status, xhr) => {
                        console.log({
                            "pet": pets[i],
                            "status": status
                        });
                        if (i === pets.length - 1) {
                            location.href = "/quickref.phtml";
                        }
                    }
                });
            }, 1000);
        }
    })
});
