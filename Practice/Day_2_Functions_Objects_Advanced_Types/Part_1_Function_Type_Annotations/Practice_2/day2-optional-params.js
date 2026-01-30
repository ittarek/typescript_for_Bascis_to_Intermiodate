// ===== OPTIONAL & DEFAULT PARAMETERS =====
// 1. Optional Parameter (? দিয়ে)
function greetUser(name, age) {
    if (age) {
        return "Hello ".concat(name, ", You are ").concat(age, " years old");
    }
    return "Hello ".concat(name);
}
console.log(greetUser('Tariqul Islam'));
console.log(greetUser('Tariqul Islam', 30));
// 2. Default Parameter
function calculatePrice(price, tax) {
    if (tax === void 0) { tax = 0.3; }
    return price + price * tax;
}
console.log(calculatePrice(200));
console.log(calculatePrice(200, 0.31));
// 3. Multiple optional parameter
function createPost(title, content, author, published) {
    var post = "Title : ".concat(title, "\nContent: ").concat(content);
    if (author) {
        post += "\nAuthor : ".concat(author);
    }
    if (published) {
        post += "\nPublished : ".concat(published);
    }
    return post;
}
console.log(createPost('Guid for Typescript', 'Learning typescript is funny method'));
console.log(createPost('Guid for React ', 'Learning and building apps by React JS is funny method', 'Tariqul Islam', true));
// 4. optional and default  একসাতে
function sendEmail(to, subject, cc) {
    if (subject === void 0) { subject = 'No Subject'; }
    var message = "To : ".concat(to, "\nSubject : ").concat(subject);
    if (cc) {
        message += "\nCC: ".concat(cc);
    }
    return message;
}
console.log(sendEmail('ittarek551@gmail.com'));
console.log(sendEmail('ittarek551@gmail.com', 'Job Application', 'CEO@gmail.com'));
