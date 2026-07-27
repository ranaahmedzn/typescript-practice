// set with generic
const data = new Set<string>();

data.add("Hello");
// data.add(1);
// data.add(true); 

console.log(data)


// map with generic
const players = new Map<string, number>();

players.set('ronaldo', 7)
players.set('messi', 10)
// players.set('neymar', '10')

console.log(players)


// a function using map
const orders = new Map<string, number>()

function addOrder(juice: string){
    const quantity = (orders.get(juice) ?? 0) + 1;
    orders.set(juice, quantity)
}

addOrder('apple')
addOrder('mango')
addOrder('banana')
addOrder('apple')
addOrder('mango')

console.log(orders)

