const user={
    username:"preet",
    price:999,
    welcomemessage: function(){
        console.log(`hii ${this.username}, kaise ho aap`);
        console.log(this)
        
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this); //NOTE: in node it will return {} empty object but in web brwoser console it will give window

// function chai()
// {
//     console.log(this);
//     // console.log(this.username); //undefined 
    
    
// }
// chai() //esme bahut sari value aayegi kyunki ye function ke ander hai 


// function chai()
// {
//     let username="preet"
//     console.log(this.username); //kuch nhi aayega esme bhi 
//     // console.log(this.username); //undefined 
    
    
// }

// const chai = () =>
// {
//     let username="preet"
//     console.log(this.username); //kuch nhi aayega esme bhi  undefined aayega
//     // console.log(this.username); //undefined 
    
    
// }
//  chai()


//pure arrow fiunction 

// const add2=(num1,num2)=>{
//     return num1+num2
// }
// console.log(add2(3,5));
 //esko use karne ka dura method hai ye 

const add2=(num1,num2)=>  num1+num2 //implicitly man leiya sab 
// { curly braces mein wrap kiya toh return likhna hoga } nhi use kiya toh return nhi likhna hoga 
console.log(add2(3,5));


// agar hume object return karna hai implicitly toh hume use karna hi hoga {curly braces }
const add1=(num2,num1) => ({username:"preetsharma"})
console.log(add1(4,5));


