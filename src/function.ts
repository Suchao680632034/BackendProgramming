
function add(Score: number[]): number {
   let total = 0;
    for (let i = 0; i < Score.length; i++) {
        total += Score[i];
    }
    return total;
   
}

console.log(add([10, 20, 30, 40, 50]));

const greet = function greeting(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));

const multiply = (x: number, y: number) => { return x * y; };
console.log(multiply(5, 6));

const Max = (a: number, b: number): number => (a > b ? a : b);
console.log(Max(10, 20));



