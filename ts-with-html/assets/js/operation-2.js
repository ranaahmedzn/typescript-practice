"use strict";
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
console.log("from operation-2.ts");
console.log("4 * 3 =", multiply(4, 3));
console.log("10 / 2 =", divide(10, 2));
