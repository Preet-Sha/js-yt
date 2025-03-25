//if condition

if(2==="2"){
    console.log("preet"); 
}
// condition chck hone ke baad aander ka cotent work karega 
// <,>,>=,<=,==,!=,=== , !== these are the condition 


//if-else condition
// const temp=50
// if(temp<50){
//     console.log("less than 50");
    
// }
// else{
// console.log("not less than 50 ");

// }



//scope 
// const score=200
// if(score>100){
//     const pow="fly"
//     console.log(`user power: ${pow}`);
    
// }
//var is global variable that why not used instead of this use let and const 


const balance =1000
// if(balance>500) console.log("test "); //implicit scope

//nesting

// if(balance < 500){
//     console.log("less than 500")

// }
// else if(balance<750){
//     console.log("less than 750 ");
    
// }
// else {
//     console.log("less than 1200");
    
// }


const userLoggedIn= true;
const debitCard=true;
const loogedingoogle=false;
const loggedinemail = true;
if(userLoggedIn&& debitCard && (loogedingoogle || loggedinemail)){
    console.log("allow to buy the course");
    
}

