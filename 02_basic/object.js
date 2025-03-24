// singleton (literal ke tarah declare karenge toh singleton nhi banega) and agar constructer se banega toh singleton banega
//CONSTRUCTOR: Object.create
const mySym = Symbol("key1");
//object literals
const jsuser={
    name:"Preet", //name str ki tarah ki hota hai 
    age:20,
    [mySym]:"key1val", //[] ke ander hi use kar dete hai warna uska type string hoga object nhi 
    "fullname":"Preet Sharma",
    location:"Ramgarh",
    email:"preetspersonal@gmail.com",
    isLogin:false,
    lastLoginDays: ["monday","tuesday"]

}
console.log(jsuser.email); // but agar object mein string baana ke beja hoga jaise ki full name wala hai toh ye use nhi hog a
//instead of this use this ["string"]
//better practice

console.log(jsuser["email"]);
//why "email" not email beacuse ye string hi hota hai by default


//how to use symbol as a key in object

console.log(jsuser[mySym]);
console.log(typeof jsuser["mySem"]); //undefined

jsuser.email = "preetphone"


// Object.freeze(jsuser) //will not change further error nhi aayega 


console.log(jsuser);


jsuser.greeting= function(){
    console.log("hell0");
    
}

jsuser.greeting2= function(){
    console.log(`hell0 , ${this.name}`);
    
}
console.log(jsuser.greeting2());






