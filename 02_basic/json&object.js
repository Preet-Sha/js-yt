//destructuring
const course={
    name:"js hindi",
    price: 999,
    instructor:"preet"
}

// course.instructor 
//to extract value
const {instructor : inst}= course //renameing kar di esme bas (real value name : jo rakhna hai)
console.log(inst)


//apis
//json ke format meijn aati hai  
// {
//     "name":"preet",
//     "price":"free",
//     "coursename":"js in hindi"
// }

//we also get api in format of array 
[
    {},
    {},
    {}
]
