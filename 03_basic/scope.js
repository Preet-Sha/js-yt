//scope : global and block scope
let a=300
if(true){
    let a=10
    const b=20
    console.log(":inner: ",a); //block scope
    
}
console.log(a); //global scope

