var packages = [{
        "name": "ТИКСО СОЛВЕНТ 48ММ/66П NAR М.4",
        "price": "2.31",
        "image": ""
    },
    {
        "name": "ХАРТИЕНО ТИКСО 38/50М. 100 МИКРОНА",
        "price": "0.14",
        "image": ""
    },
    {
        "name": "СТРЕЧ ИТАЛИЯ 17 МИКР. 1,8+0,2КГ.",
        "price": "7.90",
        "image": ""
    },
    {
        "name": "ТИКСОЛЕПАЧКА DL-15008",
        "price": "8.47",
        "image": ""
    },
    {
        "name": "ТИКСО ОПАКОВЪЧНО 45/ 60М. ПРОЗРАЧЕН",
        "price": "0.85",
        "image": ""
    },
    {
        "name": "ЛАСТИЦИ СИЛИКОН 50ММ./1.3 - 0.5 КГ. . 100% ВИЕТНАМ",
        "price": "6.74",
        "image": ""
    }
]

function createPackageHTML() {
    var packagesElements = $('#package');

    for (let index = 0; index < packages.length; index++) {
        const package = packages[index];
        console.log(package);
        var packageElement =
            `<div class = "package">
        <h2>${package.name}</h2>
        <p>${package.price}</p>
 </div >`;
        packagesElements.append(packageElement);
    }
};
createPackageHTML();