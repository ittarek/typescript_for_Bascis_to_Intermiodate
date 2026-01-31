// ===== TYPE ASSERTIONS =====

// 1. Type Assertion - as keyword
let someValue: any = 'Hello Typescript';
let strLength: number = (someValue as string).length;
console.log(strLength);

// 2. Type Assertion with DOM (example concept)
// let inputElement = document.getElementById("username") as HTMLInputElement;
// inputElement.value = "John";

// 3. Union Type with Type Guards
function processValue(value: string | number): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}
console.log(processValue('Tariqul'));
console.log(processValue(1.2542));

// ===== INTERSECTION TYPES =====

// Intersection - দুইটা type একসাথে

interface PersonMe {
  name: string;
  age: number;
}
interface Employee {
  employeeId: number;
  department: string;
}

type Staff = PersonMe & Employee; // both properties combined

let staff: Staff = {
  name: 'Tariqul',
  age: 30,
  employeeId: 112,
  department: 'Development',
};
console.log(staff);

// ===== READONLY & OPTIONAL =====

interface Config {
  readonly apiKey: string; // Cannot be changed after initialization
  timeout?: number;
  retries: number;
}

let config: Config = {
  apiKey: '1a2d5a2',
  retries: 2,
};
// config.apiKey = "new-key"; // Error: Cannot assign to 'apiKey' because it is a read-only property
config.retries = 5; //ok

console.log(config);

// ===== TYPE ALIASES WITH COMPLEX TYPES =====

type IDs = string | number;
type Callback = (data: string) => void;

function fetchData(id:IDs, callback : Callback) : void {
  // simulate data fetching
  setTimeout(() => {
    callback(`Data for ID: ${id}`)
  }, 1000);
}

fetchData(112, (data) => console.log(data))
fetchData("ABS", (data) => console.log(data)
)