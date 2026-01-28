// ========= INTERFACES ===========

// Interfaces হল  Object এর Structure  define  করা
interface Person {
  name: string;
  age: number;
  email: string;
}

// Object  create  করা
let user: Person = {
  name: 'Tariqul Islam',
  age: 30,
  email: 'ittarek551@gmail.com',
};
console.log(user);

// Function  যা  Person type Parameter  নেয়
function greatPerson(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}
console.log(greatPerson(user));

// ====== Optional Properties ===========
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // optional (? দিয়ে বোঝায়)
  isStock?: boolean;
}
let product1: Product = {
  id: 1,
  name: 'Ipad',
  price: 45000,
  // description না দিলেও problem নেই
};

let product2: Product = {
  id: 2,
  name: 'Keyboard',
  price: 500,
  description: 'Mechanical Keyboard',
};
console.log(product1);
console.log(product2);
