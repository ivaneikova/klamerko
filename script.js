// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 42.744, lng: 23.280 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

function printToConsole() {
    var timestamp = Date.now();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("tel").value;
    var mail = document.getElementById("mail").value;
    var message = document.getElementById("message").value;

    alert("Timestamp: " + timestamp + "\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Mail: " + mail + "\n" +
        "Message: " + message)
}

//-- -- -- -- -- - Slider-- -- -- -- -


document.addEventListener('DOMContentLoaded', function() {
    new Splide('.splide', {
        type: 'fade',
        rewind: true,
    }).mount();
});

//-------Pens----
function createPensHTML() {
    var pensElements = $('#pen');

    for (let index = 0; index < data.pens.length; index++) {
        const pen = data.pens[index];
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

//-------Printers----
// function createPrintersHTML() {
//     var printersElements = $('#printer');

//     for (let index = 0; index < data.printers.length; index++) {
//         const printer = data.printers[index];
//         console.log(printer);
//         var pensElement =
//             `<div class = "printer">
//                 <h2>${printer.name}</h2>
//                 <p>${printer.brand}</p>
//                 <p>${printer.price}</p>
//          </div >`;
//         printersElements.append(printersElement);
//     }
// };
// createPrintersHTML();