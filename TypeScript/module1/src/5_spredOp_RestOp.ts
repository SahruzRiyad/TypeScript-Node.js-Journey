{

// Spread Operator
// Rest Operator

const city1: string[] = ["Dhaka", "Khulna", "Rajshahi"]
const city2: string[] = ["Sylhet", "Comilla", "Rangpur"]

city1.push(...city2) // Spread Operator(...) ,  New array -> Dhaka, Khulna, ... , Rangpur


const car1 = {
    model: "Mercedes Benz",
    version: 1.2,
    price: 1010
};

const car2 = {
    model: "BMW",
    version: 1.0,
    price: 1000
};

const car = {
    ...car1,
    ...car2
};

// Rest Operator
const greetFriends = (...friends: string[]) =>{
    friends.forEach((friend: string)=> console.log('Hi ${friend}'));
};

greetFriends("Rahim", "Karim", "Abul", "Zahir");

}