type Id = number | string;

type Rectangle = {
    width: number;
    height: number;
};

type Circle = {
    radius: number;
};

type Shape = {
    length: number;
}


const userId: Id = 123;
const productId: Id = "P-123";

console.log(`User ID: ${userId}`);
console.log(`Product ID: ${productId}`);


// calculate area
function calculateArea(shape: Rectangle | Circle | Shape): number {
    if ("radius" in shape) {
        return Math.PI * shape.radius * shape.radius;
    } else if ("length" in shape) {
        return shape.length * shape.length;
    }
    else {
        return shape.width * shape.height;
    }
}

const rectangle: Rectangle = { width: 5, height: 10 };
const circle: Circle = { radius: 7 };
const square: Shape = { length: 4 };

console.log(`Rectangle area: ${calculateArea(rectangle)}`);
console.log(`Circle area: ${calculateArea(circle)}`);
console.log(`Square area: ${calculateArea(square)}`);