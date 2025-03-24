const name = "preet"
const repo = 50
// console.log(name + rep+ "val")
console.log(`my name is ${name} and my repo count is ${repo}`);

const  gamename= new String ("preethero")
console.log(gamename[0])
console.log(gamename.toUpperCase())

console.log(gamename.charAt(2))
//reverse of above 
console.log(gamename.indexOf('t'))

const newstr =gamename.substring(0,4)
console.log(newstr); //pree


const another=gamename.slice(-8,4) //allow negative value //reverse number
console.log(another) //ree


//trim and replace

const newstr1= " preet "
console.log(newstr1);
console.log(newstr1.trim());

const url="https:?sjf$5choudary"
console.log(url.replace('$5','-'))
//to check whether substring exist or not 

console.log(url.includes('choudary')) //true

//str to array conversion 

console.log(gamename.split('$'));


