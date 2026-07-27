interface AdditionalInfo {
    age: number;
    address: string;
    phone: string;
}

interface Person {
    id: number;
    name: string;
    additionalInfo?: AdditionalInfo; // Record<string, unknown> (Unknown or dynamic keys)
}

const countries: string[] = ["Bangladesh", "Pakistan", "Nepal"];
countries.push("India");

const person1: Person = {
    id: 1,
    name: "Rana"
};

const person2: Person = {
    id: 2,
    name: "Ahmed",
    additionalInfo: {
        age: 24,
        address: "Dhaka",
        phone: "017XXXXXXXX"
    }
};

console.log("Person 1:", person1);
console.log("Person 2:", person2);