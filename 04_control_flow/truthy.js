const useremail="haitesh2"
if(useremail){ //maan liya hai true hai empty hota toh false hoga else true
    console.log("got user email");
    
}
else{
    console.log("dont have user email");
    
}

//falsy value:
/* 
false, 0 , -0 , BigInt 0n , "" , null, undefined  , NaN


TRUTHY VALUES:

"0" (string ke ander 0 hai toh true) , 'false' (string ke ander kuch bhi add ho gaya tha toh ) , {} , [ ] ," ", function(){}


to check empty array use its length,
to check empty object use keys then it will return an array then use length 


*/


//LOGICAL OPERATOR && || 


//Nullish Coalescing Operator (??) : null undefined


let val;
val = 5 ?? 10
val = null ?? 10
 //null aata hai toh safety check kartha hai 

 val = undefined ?? 15

 //only for null and undefined 

 val = null ??10 ??30 //first wala hi assign hota hai esme 
console.log(val);

//Terninary Operator
// condition? true:false

const icetea=100
icetea>80?console.log("hulaa") : console.log('hell')
