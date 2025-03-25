// const coding=["c++","python","ruby","java"]
// const values=coding.forEach((item)=>{
//     console.log(item);
    
// })
// console.log(values); //undefined kuch nhi return hoga agar return laga do upar tab bhi 
//forEach kuch nhi return kartha hai 



// to solve upar wali problem we use filter yha filter return kar thi value

const num=[1,2,3,4,5,6,7,8,9,10]
// const value=num.filter((num)=> {
//     num>4 //ye empty dega [] kyunki scope statt kar diya hai toh return use karna hoga
// })

// console.log(value);

// const value1=num.filter((num)=>num>4)
// console.log(value1);

//
const numer=[1,2,3,3,4,5,5,5,5,5]
// const newn=numer.map((num)=>num+10)

//concept of chaning 
const newn=numer.map((num)=>num*10).map((num)=>num +1).filter((num)=>num>40)

console.log(newn);



//reduce method 

const myn=[1,2,3,4]
const myt=myn.reduce((acc,curr)=>{
    console.log(`acc: ${acc} and curr: ${curr}`);
    
    return acc+curr
},0) //kaha se start karna hai 
console.log(myt); //acc mein sum jo aayaga final (shopping kart wale mein ye logic chal sakhta hai )


//example

const shoppingcart=[{
    price:999,
    name:"js course"
},{
    price:700,
    name:"py-course"
}]

const pricetopay=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);
