// ========= INTERFACES ===========
// Object  create  করা
var user = {
    name: 'Tariqul Islam',
    age: 30,
    email: 'ittarek551@gmail.com',
};
console.log(user);
// Function  যা  Person type Parameter  নেয়
function greatPerson(person) {
    return "Hello, ".concat(person.name, "! You are ").concat(person.age, " years old.");
}
console.log(greatPerson(user));
var product1 = {
    id: 1,
    name: 'Ipad',
    price: 45000,
    // description না দিলেও problem নেই
};
var product2 = {
    id: 2,
    name: 'Keyboard',
    price: 500,
    description: 'Mechanical Keyboard',
};
console.log(product1);
console.log(product2);
