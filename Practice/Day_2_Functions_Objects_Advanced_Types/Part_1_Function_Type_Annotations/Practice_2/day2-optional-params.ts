// ===== OPTIONAL & DEFAULT PARAMETERS =====

// 1. Optional Parameter (? দিয়ে)

function greetUser(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, You are ${age} years old`;
  }
  return `Hello ${name}`;
}
console.log(greetUser('Tariqul Islam'));
console.log(greetUser('Tariqul Islam', 30));

// 2. Default Parameter
function calculatePrice(price: number, tax: number = 0.3): number {
  return price + price * tax;
}
console.log(calculatePrice(200));
console.log(calculatePrice(200, 0.31));

// 3. Multiple optional parameter
function createPost(
  title: string,
  content: string,
  author?: string,
  published?: boolean
): string {
  let post = `Title : ${title}\nContent: ${content}`;

  if (author) {
    post += `\nAuthor : ${author}`;
  }
  if (published) {
    post += `\nPublished : ${published}`;
  }
  return post;
}

console.log(createPost('Guid for Typescript', 'Learning typescript is funny method'));
console.log(
  createPost(
    'Guid for React ',
    'Learning and building apps by React JS is funny method',
    'Tariqul Islam',
    true
  )
);

// 4. optional and default  একসাতে

function sendEmail(to: string, subject: string = 'No Subject', cc?: string): string {
  let message = `To : ${to}\nSubject : ${subject}`;
  if (cc) {
    message += `\nCC: ${cc}`;
  }
  return message;
}
console.log(sendEmail('ittarek551@gmail.com'));
console.log(sendEmail('ittarek551@gmail.com', 'Job Application', 'CEO@gmail.com'));
