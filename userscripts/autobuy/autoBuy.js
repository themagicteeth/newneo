const url = document.URL;
const OCR = true;
const return_ab = true;
const min = 800;
const max = 1500;
const html = $('html').html();


if (html.includes('SOLD OUT!') || html.includes('five seconds')) {
    document.querySelector("#container__2020 > div.shop-bg").click()
} else if (html.includes('I accept your offer')) {
    setTimeout(() => {
        document.querySelector("#container__2020 > div.shop-bg").click()
    }, 1000);
}


function buyItem(itemsToBuy, refreshDelay) {
    const itemsInStock = []
    document.querySelectorAll('.item-img').forEach(item => itemsInStock.push(item.getAttribute('data-name')));
    if (itemsInStock === []) {
        setTimeout(location.reload.bind(location), 20000);
    } else {
        const toBuy = itemsToBuy.filter(item => itemsInStock.includes(item));
        if (toBuy.length === 0) {
            console.log("No items to buy")
            setTimeout(location.reload.bind(location), refreshDelay);
        }
        else {
            console.log(toBuy)
            document.querySelector(`.item-img[data-name='${toBuy[0]}']`).click()
            document.getElementById('confirm-link').click()
        }
    }
}

function solve_captcha(url) {
    return new Promise(resolve => {
        const captcha = new Image();
        captcha.src = url;
        captcha.onload = () => {
            const width = captcha.width;
            const height = captcha.height;

            const canvas = unsafeWindow.document.createElement('canvas');
            canvas.width = width;
            canvas.height = width;
            canvas.getContext("2d").drawImage(captcha, 0, 0);

            const imgData = canvas.getContext("2d").getImageData(0, 0, width, height);
            let lowy = 999;
            let lowx = 999;
            let low = 999;

            for (let x = 0; x < imgData.width; x++) {
                for (let y = 0; y < imgData.height; y++) {
                    let i = x * 4 + y * 4 * imgData.width;
                    var avg = Math.floor((imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3);
                    if (avg < low) {
                        low = avg;
                        lowx = x;
                        lowy = y;
                    }
                }
            }
            resolve({ lowx, lowy });
        };
    });
}

function smart_haggle(haggle_price) {
    const val = haggle_price.split("");
    let x = 0;
    let end_price = "";

    for (x = 0; x < haggle_price.length; x++) {
        end_price += val[(x % 2)];
    }
    return end_price;
}

(async () => {
    let $;
    if (typeof $ === 'undefined') $ = unsafeWindow.$;

    if (url.includes('haggle.phtml')) {
        let haggle_price = $('#shopkeeper_makes_deal').find('b').get(0).innerHTML;
        haggle_price = (haggle_price.match("([0-9-,]+)")[0]).replace(",", "");
        $('input[name=current_offer]').val(smart_haggle(haggle_price));

        if (OCR) {
            const { lowx: x, lowy: y } = await solve_captcha(document.querySelector('input[type="image"]').src);
            setTimeout(() => {
                const haggleform = document.querySelector('form[name="haggleform"]');
                const newInput = document.createElement("input");
                const newInput2 = document.createElement("input");

                newInput.type = "hidden";
                newInput.name = "x";
                newInput.value = x;
                haggleform.appendChild(newInput);

                newInput2.type = "hidden";
                newInput2.name = "y";
                newInput2.value = y;
                haggleform.appendChild(newInput2);
                haggleform.submit();
            }, (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; });
        }
        return;
    }
})();
