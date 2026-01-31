// ===== TYPE ASSERTIONS =====
// 1. Type Assertion - as keyword
var someValue = 'Hello Typescript';
var strLength = someValue.length;
console.log(strLength);
// 2. Type Assertion with DOM (example concept)
// let inputElement = document.getElementById("username") as HTMLInputElement;
// inputElement.value = "John";
// 3. Union Type with Type Guards
function processValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
console.log(processValue('Tariqul'));
console.log(processValue(1.2542));
var staff = {
    name: 'Tariqul',
    age: 30,
    employeeId: 112,
    department: 'Development',
};
console.log(staff);
var config = {
    apiKey: '1a2d5a2',
    retries: 2,
};
// config.apiKey = "new-key"; // Error: Cannot assign to 'apiKey' because it is a read-only property
config.retries = 5; //ok
console.log(config);
function fetchData(id, callback) {
    // simulate data fetching
    setTimeout(function () {
        callback("Data for ID: ".concat(id));
    }, 1000);
}
fetchData(112, function (data) { return console.log(data); });
fetchData("ABS", function (data) { return console.log(data); });
