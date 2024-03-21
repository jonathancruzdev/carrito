const products = [
    { id: 1, name: 'Tablet', price: 500, imgUrl: 'images/tablet.png' },
    { id: 2, name: 'Desktop', price: 2500, imgUrl: 'images/desktop.png' },
    { id: 3, name: 'Laptop', price: 2000, imgUrl: 'images/laptop.png' },
    { id: 4, name: 'TV 32"', price: 1500, imgUrl: 'images/tv.png' }
];

const productsContainer =  document.querySelector('#container-products');
const count = document.querySelector('#count-cart');


const rederProducts = (products) => {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        productsContainer.innerHTML +=  // html
            `<div class="card text-center col-md-3 p-2">
                <img src="${product.imgUrl}" class="card-img-top" alt="${ product.name}">
                <div class="card-body">
                    <h5 class="card-title">${ product.name}</h5>
                    <a href="#" id="${product.id}" class="btn btn-success addToCart">Agregar al <i class="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>`
    });

    // Selecciono todo los btn de addToCart
    const btns = document.querySelectorAll('.addToCart');
    btns.forEach( btn => {
        btn.addEventListener('click', (event) => {
            const id = event.target.id;
            console.log(event.target.id)
            alert('Agregango el product con ID '+ id)
        })
    });

}



rederProducts(products);