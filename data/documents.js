var documents = [{
        "name": "АДД - АКЦИЗНА ДАНЪЧНА ДЕКЛАРАЦИЯ",
        "price": "12.39",
        "image": ""
    },
    {
        "name": "ДНЕВНИК ЗА ИЗВЪРШЕН ИНСТРУКТАЖ И ОБУЧЕНИЕ ПО ДПХП",
        "price": "3.29",
        "image": ""
    },
    {
        "name": "ЛИЧНА АМБУЛАТОРНА КАРТА",
        "price": "0.79",
        "image": ""
    },
    {
        "name": "КНИГА ЗА ПРОФИЛАКТИЧНА ИМУНИЗАЦИЯ НА ДЕЦА",
        "price": "6.99",
        "image": ""
    },
    {
        "name": "СКЛАДОВА РАЗПИСКА ХИМИЗИРАНА А4 25 РЕДА",
        "price": "5.25",
        "image": ""
    },

]

function createDocumentsHTML() {
    var documentsElements = $('#document');

    for (let index = 0; index < documents.length; index++) {
        const document = documents[index];
        console.log(document);
        var documentElement =
            `<div class="card">
            <img src="./images/no-image.png" alt="no-image" style="width:100%">
            <h3>${document.name}</h3>
            <p class="price">цена: ${document.price}</p>
    
        </div>`;
        documentsElements.append(documentElement);
    }
};
createDocumentsHTML();