let btn = document.getElementById("clickBtn");

let number = 1;
async function getPrice() {
    try {

        let data = await fetch(`https://fakestoreapi.com/products/${number}`);
        let products = await data.json();



        let p = document.createElement("p");
        let pa = document.createElement("p");
        pa.textContent = `$${products.price}`;
        p.textContent = products.title;


        document.body.appendChild(p);
        document.body.appendChild(pa);
        number = number + 1;




    } catch (error) {
        let p = document.createElement("p");
        console.log(error);
        p.textContent = "ბოდიშს გიხდით რაღაც შეცდომაა";
    }
}


