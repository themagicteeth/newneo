// ==UserScript==
// @name         Send All Pets
// @namespace    Neoscripts
// @version      1.0.2
// @description  Because you can never be too lazy. Sends all your neopets to the lodge with just one click!
// @author       -
// @match        *://www.neopets.com/neolodge.phtml
// @grant        none
// ==/UserScript==

$("form[action='book_neolodge.phtml']").after(`<br><p><b>Step 5.</b> Alternatively, click here to check-in all pets.</p><br><div style="text-align: center"><button id="book-all" type="button">Send all pets to<br>Cockroach Towers for 28 nights.</div>`);

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
            }, 1_000);
        }
    })
});
