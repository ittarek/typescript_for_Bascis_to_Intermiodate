// ===== Theory:  TypeScript এ functions এর parameters এবং return type define করতে হয়। ======
// ===== Function Type Annotation ========
// 1. Simple Function With types
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
// console.log(add(5, "3")); // Error: string is not assignable to number
// 2. Function with string return
function greet(name) {
    return "Hello , ".concat(name);
}
console.log(greet('Tariqul'));
// 3. Function with no return void
function logMessage(message) {
    console.log(message);
}
logMessage('This is a log message ');
// 4. Function with multiple Parameters
function createUser(name, age, isActive) {
    return "User : ".concat(name, ", Age: ").concat(age, ", Active: ").concat(isActive);
}
console.log(createUser('tariqul', 30, true));
// 5 Arrow Function  with types
var multiply = function (x, y) {
    return x * y;
};
console.log(multiply(2, 3));
// Short arrow function
var square = function (n) { return n * n; };
console.log(square(6));
