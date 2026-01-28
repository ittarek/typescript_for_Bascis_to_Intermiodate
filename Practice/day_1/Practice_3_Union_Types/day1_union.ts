// ===== Union Types =======
// একটা variable   একাদিক  type  হতে পারে।

// Example 1: Simple Union
let id: number | string;

id = 101; // Valid
console.log(id);

id = 'ACA123'; // Also Valid
console.log(id);

// id = true; // Error: boolean is not assignable

// Example 2: Function with Union type
function printId(id: number | string): void {
  console.log('Your ID is:', id);
}
printId(101);
printId('ABC2541');

// Example 3: Union with Type Narrowing
function formatId(id: number | string): string {
  if (typeof id === 'number') {
    return `ID-${id.toString().padStart(5, '0')}`;
  } else {
    return `ID-${id.toUpperCase()}`;
  }
}
console.log(formatId(43)); // ID-00043
console.log(formatId('abcd123')); // ID-ABCD123

// Example 4: Literal Types (specific values only )
type Status = 'pending' | 'approved' | 'rejected';

function updateStatus(status: Status): void {
  console.log(`Status update to: ${status}`);
}
updateStatus("approved") // valid
updateStatus("pending") // valid
// updateStatus("failed"); // Error: not in the allowed values
