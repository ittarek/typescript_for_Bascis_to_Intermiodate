// ===== Theory:  TypeScript এ functions এর parameters এবং return type define করতে হয়। ======

// ===== Function Type Annotation ========
// 1. Simple Function With types
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3));
// console.log(add(5, "3")); // Error: string is not assignable to number

// 2. Function with string return
function greet(name: string): string {
  return `Hello , ${name}`;
}
console.log(greet('Tariqul'));

// 3. Function with no return void
function logMessage(message: string): void {
  console.log(message);
}
logMessage('This is a log message ');

// 4. Function with multiple Parameters
function createUser(name: string, age: number, isActive: boolean): string {
  return `User : ${name}, Age: ${age}, Active: ${isActive}`;
}
console.log(createUser('tariqul', 30, true));

// 5 Arrow Function  with types
const multiply = (x: number, y: number): number => {
  return x * y;
};
console.log(multiply(2, 3));

// Short arrow function
const square = (n: number): number => n * n;
console.log(square(6));
