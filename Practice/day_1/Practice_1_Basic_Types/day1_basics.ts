// ========== BASIC TYPES =============

// 1. String
let firstName: string = "Tariqul";
let lastName: string = "Islam";
let fullName: string = `${firstName}  ${lastName}`;
console.log(fullName);

// 2. Number
let age: number = 30;
let price: number = 85.99;
let total: number = age + price;
console.log('Total :', total);

//3. Boolean
let isStudent: boolean = true;
let hasJob: boolean = false;
console.log("Is Student:", isStudent);

// Array - Method 1 
let numbers: number[] = [1, 2, 3, 4, 5];

// 5. Array - Method 2
let names: Array<string> = ["Tareq", "Tarek", "Islam", "Shathi", "MD"];

// 6. Type Inference (TypeScript automatically determines type)
let city = "Dhaka"; // TypeScript Knows এটা string
// city = 123; //Error

// 7. Any (avoid করা উচিত)

// এটা  compile  করুন 
 

