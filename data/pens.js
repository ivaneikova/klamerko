var pens = [{
        "name": "REFILL FRIXION POINT 0.5 BLUE BLS-FRP5-L-S3-3PCS",
        "brand": "Pilot",
        "price": "4.25",
        "image": ""
    },
    {
        "name": "ХИМИКАЛКА  ГЕЛ 3921",
        "brand": "VINSON",
        "price": "0.48",
        "image": ""
    },
    {
        "name": "МОЛ.ОБ. 668 ЧЕРНО ДЪРВО 6БР702",
        "brand": "PENWORTH",
        "price": "1.91",
        "image": ""
    },
    {
        "name": "МОЛИВ АВТОМ. 0.5MM. 500 36БР.407416",
        "brand": "TECHNOLINE",
        "price": "1.86",
        "image": ""
    },
    {
        "name": "МОЛ.ОБ. НЕОН БЕЗ ГУМА А-785",
        "brand": "XUANXUAN",
        "price": "0.25",
        "image": ""
    },
    {
        "name": "МОЛИВ BIC EVOLUTION HB С ГУМА",
        "brand": "BIC",
        "price": "0.60",
        "image": ""
    }
]

function createPensHTML() {
    var pensElements = $('#pen');

    for (let index = 0; index < pens.length; index++) {
        const pen = pens[index];
        console.log(pen);
        var pensElement =
            `<div class = "pen">
                <h2>${pen.name}</h2>
                <p>${pen.brand}</p>
                <p>${pen.price}</p>
         </div >`;
        pensElements.append(pensElement);
    }
};
createPensHTML();