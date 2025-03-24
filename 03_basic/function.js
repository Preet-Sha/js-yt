function kaamkaro(){
    console.log("hello preet");
    

}
// kaamkaro() call function 
//kamkaro //kuch nhi aayega 

// function add(num1,num2){  //input:parameters
//    console.log( num1+num2);
   
// }

function add(num1,num2){  //input:parameters
    let result=num1+num2
    return result
 }
add(); //NaN 
add(3,"4") // 34 //eske ander jo value hai usse arguments bolte hai 
 add(3,"a") //3a
add(3,4) //7
add(3,null) //3


const result = add(3,5); //8 output mein aayega //but return lagagene ke baad kuch nhi aayega
console.log(result) //undefined pehle commentefd code mein but after using return output will; be 8

function userlogin(name){ //hum userdefined data bhi de sakhte the name="preet"
    if(name===undefined){ //name bbhi use kar sakhte the 
        console.log("please enter a user name");
        return
        

    }
    return `${name} jsut logged in`
}
console.log(userlogin("preetsharma"));
console.log(userlogin()); //kuch pass nhi kiya toh undefined aata hai null nhi 
