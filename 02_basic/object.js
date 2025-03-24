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

//part2

const tinderuser= new Object()
tinderuser.id="123abc"
tinderuser.name="sam"
tinderuser.islogin=true
console.log(tinderuser);

const reg={
    email:"hariom",
    fullname: {
        username: {
            firstname:"preet",
            secondname:"sharma"
         }
    }
}
console.log(reg.fullname.username.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"d"}
const obj3={obj1,obj2}
console.log(obj3); //same problem of array 

//use assign to solve this merge this
const obj4=Object.assign({},obj1,obj2); //agar hum {} nhi denge toh eska mtlb hai sab obj 1 mein ja rha hai
console.log(obj4);
console.log(obj4===obj1); //false because of {} 

const obj5=Object.assign(obj1,obj2); 
console.log(obj5===obj1); //true because {} nhi laga hua hai obj1 mein sab aa jayega 

//instead of assign we use spread
const obj6={...obj1,...obj2}
// console.log(obj6);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(Object.hasOwn('islogin')); //false