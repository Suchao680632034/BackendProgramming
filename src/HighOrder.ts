const n = [1, 2, 3, 4, 5];
const squared = n.map(x => x * x);
console.log(squared);

const evenNumbers = n.filter(x => x % 2 === 0);
console.log(evenNumbers);

const divisibleBy3PowerOf3 = n.filter(x => x % 3 === 0).map(x => Math.pow(x, 3));
console.log(divisibleBy3PowerOf3);

