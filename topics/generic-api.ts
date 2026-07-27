interface User {
    id: number;
    name: string;
    email: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Order {
    id: number;
    userId: number;
    productIds: number[];
    total: number;
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
}

// APIs: /api/users, /api/products, /api/orders

// fetching data normally
async function fetchUsers(): Promise<User[]> {
    const response = await fetch('/api/users');
    return response.json();
}

async function fetchProducts(): Promise<Product[]> {
    const response = await fetch('/api/products');
    return response.json();
}

async function fetchOrders(): Promise<Order[]> {
    const response = await fetch('/api/orders');
    return response.json();
}

// fetching using generic
async function fetchData<T>(apiEndpoint: string): Promise<T> {
    const response = await fetch(apiEndpoint);
    return response.json();
}

const users = await fetchData<User[]>('/api/users');
const products = await fetchData<Product[]>('/api/products');
const orders = await fetchData<Order[]>('/api/orders');

// products[0].
