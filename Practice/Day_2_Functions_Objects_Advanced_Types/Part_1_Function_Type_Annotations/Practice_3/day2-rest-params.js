// ===== REST PARAMETERS =====
// 1. Sum of multiple numbers
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7));
// 2. Concatenate String
function concatenate(separator) {
    var words = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        words[_i - 1] = arguments[_i];
    }
    return words.join(separator);
}
console.log(concatenate(' ', 'Hello', 'React'));
console.log(concatenate(' ', 'Typescript with', 'React', 'is', 'awesome'));
// 3. fine maximum
function findMax() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Math.max.apply(Math, numbers);
}
console.log(findMax(1, 2, 3, 5, 4));
// 4. Mixed parameters (normal + rest)
function logInfo(category) {
    var message = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        message[_i - 1] = arguments[_i];
    }
    console.log("[".concat(category, "]"));
    message.forEach(function (msg) { return console.log(" - ".concat(msg)); });
}
logInfo('Job', 'Job searching not fount ', 'frontend expert', 'For AI');
