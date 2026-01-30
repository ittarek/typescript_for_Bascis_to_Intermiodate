// ===== REST PARAMETERS =====

// 1. Sum of multiple numbers

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7));

// 2. Concatenate String
function concatenate(separator: string, ...words: string[]): string {
  return words.join(separator);
}
console.log(concatenate(' ', 'Hello', 'React'));
console.log(concatenate(' ', 'Typescript with', 'React', 'is', 'awesome'));

// 3. fine maximum
function findMax(...numbers: number[]): number {
  return Math.max(...numbers);
}
console.log(findMax(1, 2, 3, 5, 4));

// 4. Mixed parameters (normal + rest)
function logInfo(category: string, ...message: string[]): void {
  console.log(`[${category}]`);
  message.forEach(msg => console.log(` - ${msg}`));
}

logInfo('Job', 'Job searching not fount ', 'frontend expert', 'For AI');
