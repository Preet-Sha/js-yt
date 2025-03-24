//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//Stack (Primitive ) copy milta hai 
// Heap (Non-Primitive ) refrences milta hai 
let yt="invader"
let another=yt
another="chai"
console.log(yt) //invader
console.log(another); //chai

let user={
    email:"user@gmail.com",
    upi: "userq"
}
let user2=user
user2.email = "preestys"
console.log(user.email); //preestys
console.log(user2.email); //preestys



