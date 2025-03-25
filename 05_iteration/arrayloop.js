//high order array loops

//for of

//["",""," "]
//[{ }, { }, { }]
const arr=[1,2,3,4,5]
for( const num of arr){
    console.log(num);
    
}
 
//Maps
//only unique elements 

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('IN','India')

console.log(map);


for (const [key,value] of map) {
    console.log(key, ' :- ' ,value);
    
} //here we can't use object to iterate object is not iterable with this for of loop

//for each loop 

const coding=['js',"ruby",'cpp','python']
coding.forEach( (item)=>{
    console.log(item);
    
})


function print(i){
    console.log(i)
}
coding.forEach(print)

//for each ke ander jo ()hota hai wha sirf item ni aata balki item index and arr pura ka pura aata hai

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})


//array ke ander object

const myobj=[{lang_name:"java",langfile:"java"},{lang_name:"cpp",langfile:"c++"}]
myobj.forEach((item)=>{
    console.log(item.lang_name);
})