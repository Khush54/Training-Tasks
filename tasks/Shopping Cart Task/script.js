let nav = document.createElement('nav');

let h2 = document.createElement('h2');
h2.textContent = "Electronic Shop";

let cartButton = document.createElement('a');
cartButton.href = "#";
cartButton.classList.add('nav-a');

let cartImage = new Image();
cartImage.src = "assets/shopping-cart.png";
cartImage.classList.add('nav-image');

let search = document.createElement('input');
search.classList.add('searchBar');

cartButton.append(cartImage);
nav.append(h2,search,cartButton);
document.body.appendChild(nav);

let products = [
    {id:1, name:"Laptop",price: 40000},
    {id:2, name: "Tab", price: 20000},
    {id:3, name: "Earphone", price: 1000},
    {id:4, name: "Mobile" , price: 10000},
    {id:5, name: "Cover", price: 500},
    {id:6, name: "Memory chip", price: 400},
]

let product_cards = document.createElement('base')
for(let i = 0;  i < products.length ; i++){

}