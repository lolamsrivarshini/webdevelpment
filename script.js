const products = [
    {
        name: "Mango",
        code: "P001",
        image: "mango.jpg",
        description: "This is Mango fruit Summer special in India.",
        price: "$10.00"
    },
    {
        name: "Apple",
        code: "P002",
        image: "apple.jpg",
        description: "Apple is for all ages.",
        price: "$20.00"
    },
    {
        name: "Orange",
        code: "P003",
        image: "orange.jpg",
        description: "Full of Vitamin C.",
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
