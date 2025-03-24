const num=400
console.log(num);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(1));

const other=123.98
console.log(other.toPrecision(3)) //124 precision

//Maths(by defualt library)

console.log(Math.abs(-4));
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.2)) //4
console.log(Math.floor(34.3));
console.log(Math.max(4,2,24,4,4));
console.log(Math.random());//0-1
console.log(Math.floor(Math.random()*10)+1); //0-10

//random number in given range 
const min=10
const max =20
//instead of mult by 10 multiply it by (max-min+1) and after that add min to start with that min value only if u dont +min then it will start from 0
console.log(Math.floor((Math.random()*(max-min + 1) ))+min);


