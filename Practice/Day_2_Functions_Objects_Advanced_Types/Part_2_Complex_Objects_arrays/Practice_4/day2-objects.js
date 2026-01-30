// ===== COMPLEX OBJECTS =====
var users1 = {
    id: 1,
    name: 'karimul Islam',
    email: 'karim@gmail.com',
    address: { street: '112, near st', city: 'Dhaka', country: 'Bangladesh' },
    isActive: true,
};
console.log(users1);
console.log(users1.address.city);
var products = [
    { id: 1, name: 'Laptop', price: 50000, inStock: true },
    { id: 2, name: 'Mouse', price: 500, inStock: true },
    { id: 3, name: 'Keyboard', price: 1500, inStock: false },
];
// Function যা array of objects নেয়
function getTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
console.log('Total Price', getTotalPrice(products));
// Filter in Stock products
function getInStockProducts(products) {
    return products.filter(function (p) { return p.inStock; });
}
console.log('In Stock', getInStockProducts(products));
var calc = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; }
};
console.log(calc.add(1, 2));
console.log(calc.subtract(1, 2));
console.log(calc.multiply(1, 2));
