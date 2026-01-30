// ===== COMPLEX OBJECTS =====

// 1. Nested Object Interface
interface Address {
  street: string;
  city: string;
  country: string;
  zipCode?: string;
}
interface Users {
  id: number;
  name: string;
  email: string;
  address: Address; // nested object
  isActive: boolean;
}

let users1: Users = {
  id: 1,
  name: 'karimul Islam',
  email: 'karim@gmail.com',
  address: { street: '112, near st', city: 'Dhaka', country: 'Bangladesh' },
  isActive: true,
};
console.log(users1);
console.log(users1.address.city);

// 2. array of object
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}
let products: Product[] = [
  { id: 1, name: 'Laptop', price: 50000, inStock: true },
  { id: 2, name: 'Mouse', price: 500, inStock: true },
  { id: 3, name: 'Keyboard', price: 1500, inStock: false },
];

// Function যা array of objects নেয়
function getTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}
console.log("Total Price",getTotalPrice(products));


// Filter in Stock products