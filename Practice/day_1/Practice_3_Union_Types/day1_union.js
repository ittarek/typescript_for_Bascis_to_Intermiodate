// ===== Union Types =======
// একটা variable   একাদিক  type  হতে পারে।
// Example 1: Simple Union
var id;
id = 101; // Valid
console.log(id);
id = 'ACA123'; // Also Valid
console.log(id);
// id = true; // Error: boolean is not assignable
// Example 2: Function with Union type
function printId(id) {
    console.log('Your ID is:', id);
}
printId(101);
printId('ABC2541');
// Example 3: Union with Type Narrowing
function formatId(id) {
    if (typeof id === 'number') {
        return "ID-".concat(id.toString().padStart(5, '0'));
    }
    else {
        return "ID-".concat(id.toUpperCase());
    }
}
console.log(formatId(43)); // ID-00043
console.log(formatId('abcd123')); // ID-ABCD123
function updateStatus(status) {
    console.log("Status update to: ".concat(status));
}
updateStatus("approved"); // valid
updateStatus("pending"); // valid
// updateStatus("failed"); // Error: not in the allowed values
