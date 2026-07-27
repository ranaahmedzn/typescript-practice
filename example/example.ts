function devide (a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

const result = devide(10, 2);
console.log(`The result of division is: ${result}`);