$.ajax({
    url: "https://reqres.in/api/products",
    type: "GET",
    success: function(response) {
        var prod = response.data;
        console.log(prod);
        var productsElements = $('#product');

        for (let index = 0; index < prod.length; index++) {
            const product = prod[index];

            var productElement =
                `<div class = "product">
            <p class = "color" >Цвят:</p> 
            <p class = "name" style="color:${product.color};">${product.name}</p> 
            <p class = "product_number" >номер продукт:</p> 
            <p class = "product_number" >${product.pantone_value}</p> 
        </div >`;
            productsElements.append(productElement);
        }
    }
})