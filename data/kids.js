var kids = [{
        "name": "НЕСЕСЕРИ ПЪЛНИ 407225 МОДНИ МОМИЧЕТА /28 ЕЛ.",
        "brand": "Soirit",
        "price": "13.75",
        "image": ""
    },
    {
        "name": "ФЛУМАСТРИ GIOTTO ТURBO COLOR 12 ЦВЯТА 416000",
        "brand": "GIOTTO",
        "price": "3.50",
        "image": ""
    },
    {
        "name": "ВОДНИ БОИ 12 ЦВЯТА Ф30 ЛУКС COLORINO 3012",
        "brand": "COLORINO",
        "price": "2.55",
        "image": ""
    },
    {
        "name": "ГУМА KEYROAD- PARROT 24БР. 971387",
        "brand": "KEYROAD",
        "price": "0.95",
        "image": ""
    },
    {
        "name": "ОСТРИЛКА KEYROAD STRETCHY ДВОЙНА, КОНТ. 971287",
        "brand": "KEYROAD",
        "price": "2.69",
        "image": ""
    },
    {
        "name": "УЧ. ЧАНТА 5178 КИТИ",
        "brand": "Spirit",
        "price": "77.00",
        "image": ""
    }
]

function createKidsHTML() {
    var kidsElements = $('#kid');

    for (let index = 0; index < kids.length; index++) {
        const kid = kids[index];
        console.log(kid);
        var kidsElement =
            `<div class = "card">
           

            <img src="./images/no-image.png" alt="no-image" style="width:100%">
            <h3>${kid.name}</h3>
            <p class="brand">марка:${kid.brand}</p>
            <p class="price">цена: ${kid.price}</p>
     </div >`;
        kidsElements.append(kidsElement);
    }
};
createKidsHTML();
// <h2>${kid.name}</h2>
// <p>${kid.brand}</p>
// <p>${kid.price}</p>