type User = {
    id?: number;
    name: string;
    email: string;
}

const users: User[] = []

let lastUserId = 0;

function addUser(newUser: User): void { // newUser: Omit<User, 'id'> - Omit the 'id' property from the User type
    const user: User = {
        id: ++lastUserId,
        ...newUser
    };
    users.push(user);
}

addUser({ name: "John Doe", email: "john.doe@example.com" });
addUser({ name: "Jane Smith", email: "jane.smith@example.com" });
console.log(users);