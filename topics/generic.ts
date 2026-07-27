const fruits: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const numbers: number[] = [1, 2, 3, 4, 5];

function getFirstItem<T>(items: T[]): T {
    return items[0];
}

const firstFruit: string = getFirstItem(fruits);
const firstNumber: number = getFirstItem(numbers);

console.log(`First fruit: ${firstFruit}`);
console.log(`First number: ${firstNumber}`);