// ========== BASIC TYPES =============
// 1. String
var firstName = "Tariqul";
var lastName = "Islam";
var fullName = "".concat(firstName, "  ").concat(lastName);
console.log(fullName);
// 2. Number
var age = 30;
var price = 85.99;
var total = age + price;
console.log('Total :', total);
//3. Boolean
var isStudent = true;
var hasJob = false;
console.log("Is Student:", isStudent);
// Array - Method 1 
var numbers = [1, 2, 3, 4, 5];
// 5. Array - Method 2
var names = ["Tareq", "Tarek", "Islam", "Shathi", "MD"];
// 6. Type Inference (TypeScript automatically determines type)
var city = "Dhaka"; // TypeScript Knows এটা string
// city = 123; //Error
// 7. Any (avoid করা উচিত)
// এটা  compile  করুন 
