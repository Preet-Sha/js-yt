const mhero=["thor","hulk","iron-man"]
const dchero=["superman","flash","batman"]

// mhero.push(dchero)
// console.log(mhero); //array ke ander aaray aa gya single element le liya 

//concat return new array whereaas push return the same array 
// const allhero= mhero.concat(dchero)
// console.log(allhero);


//spread operator [... x ... y ] where x and y are array 
//prefered over concat
const all = [...mhero,...dchero]
// console.log(all);


//new concept flat: return new array 
const other=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real=other.flat(Infinity)
console.log(real);


//convert to ARRAY ASND CHECK WHETHER IT IS ARRAY OR NOT 

console.log(Array.isArray("preet")); //false
console.log(Array.from("Preet")); //convert into array ['p','r','e','e','t']


//interesting case 
console.log(Array.from({name:"preet"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


