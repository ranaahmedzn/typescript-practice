type Devide = [number, number];

function devide(a: number, b: number): Devide {
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    return [quotient, remainder];
}

const result : Devide = devide(10, 3);
console.log(`Quotient: ${result[0]}, Remainder: ${result[1]}`);