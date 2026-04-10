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
    {},
    {},
    {},
    {},
    {},
    {},
    {}
]