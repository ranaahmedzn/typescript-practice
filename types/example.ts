type Point = [number, number];

const location1 : Point = [40.7128, -74.0060]; // New York City coordinates
const location2 : Point = [23.8103, 90.4125]; // Dhaka coordinates
console.log(location1);
console.log("Location 2 Latitude:", location2[0]);


type Player = readonly [string, string, number];

const player1 : Player = ["Cristiano Ronaldo", "Portugal", 10];
console.log(player1);

const players: Player[] = [
    ["Cristiano Ronaldo", "Portugal", 10],
    ["Neymar Jr.", "Brazil", 10],
    ["Lionel Messi", "Argentina", 10],
];

console.log(players);
  