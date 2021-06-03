var printers = [{
        "name": "Тонер касета HP CF279A",
        "brand": "HP",
        "price": "50.00",
        "image": ""
    },
    {
        "name": "Тонер касета HP CE285A/CB435A/CB436D",
        "brand": "HP",
        "price": "45.23",
        "image": ""
    },
    {
        "name": "Tонер касета C540 Magenta - 1k",
        "brand": " Lexmark",
        "price": "123.00",
        "image": ""
    },
    {
        "name": "Барабан MX2600 - 100k",
        "brand": "Sharp",
        "price": "112.00",
        "image": ""
    },
    {
        "name": "Дръжка за тонер касетата BD 1340, OEM",
        "brand": "Toshiba",
        "price": "15.00",
        "image": ""
    },
    {
        "name": "Тонер касета FX-10, 2k",
        "brand": "Canon",
        "price": "108.50",
        "image": ""
    }
]

function createPrintersHTML() {
    var printersElements = $('#printer');

    for (let index = 0; index < printers.length; index++) {
        const printer = printers[index];
        console.log(printer);
        var printerElement =
            `<div class = "printer">
                <h2>${printer.name}</h2>
                <p>${printer.brand}</p>
                <p>${printer.price}</p>
         </div >`;
        printersElements.append(printerElement);
    }
};
createPrintersHTML();