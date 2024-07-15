const products = [
    {
        name: "Product 1",
        code: "P001",
        image: "images/product1.jpg",
        description: "This is the description for Product 1.",
        price: "$10.00"
    },
    {
        name: "Product 2",
        code: "P002",
        image: "images/product2.jpg",
        description: "This is the description for Product 2.",
        price: "$20.00"
    },
    {
        name: "Product 3",
        code: "P003",
        image: "images/product3.jpg",
        description: "This is the description for Product 3.",
        price: "$30.00"
    }
];

const productContainer = document.getElementById('productContainer');

function displayProducts(productList) {
    productContainer.innerHTML = '';
    productList.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name} <small>(${product.code})</small></h2>
            <p>${product.description}</p>
            <span>${product.price}</span>
        `;
        productContainer.appendChild(productElement);
    });
}

document.getElementById('searchInput').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.code.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.price.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

displayProducts(products);
