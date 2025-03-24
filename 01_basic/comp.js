console.log("2">1)//true js change str to int (implicitly)
console.log(null >0); //false
console.log(null ==0); //false
console.log(null >=0); //true valueconversion problem the reason is that an equality check == and comparison <.>,>=,<= work differently comparison convert null to 0 int that why null>=0 return true while null>0 return false

console.log(undefined >0); //false
console.log(undefined ==0); //false
console.log(undefined >=0); //false

//strict check ===
//check data type also

console.log("2"===2)//false
