var papers = [{
        "name": "Цв. картон ЗЕЛЕН ПАСТЕЛ 53/38см 200гр/100бр CHV4",
        "price": "30.00",
        "image": ""
    },
    {
        "name": "ПЛИКОВЕ В4 250/353ММ КАФЯВ ОП.250",
        "price": "0.14",
        "image": ""
    },
    {
        "name": "ХАРТИЯ КОПИРНА NAVIGATOR A4 500Л 80Г",
        "price": "7.19",
        "image": ""
    },
    {
        "name": "ХАРТИЯ КОПИРНА XEROX BUSINESS А4 80Г 500Л",
        "price": "5.69",
        "image": ""
    },
    {
        "name": "ХАРТИЯ КОПИРНА IQ COLOR COPY A4 90Г 500Л",
        "price": "23.25",
        "image": ""
    },
    {
        "name": "ХАРТИЯ КОПИРНА PPC PAPЕR A4 500 Л ",
        "price": "4.98",
        "image": ""
    }
]

function createPapersHTML() {
    var papersElements = $('#paper');

    for (let index = 0; index < papers.length; index++) {
        const paper = papers[index];
        console.log(paper);
        var paperElement =
            `<div class = "paper">
            <h2>${paper.name}</h2>
            <p>${paper.price}</p>
     </div >`;
        papersElements.append(paperElement);
    }
};
createPapersHTML();