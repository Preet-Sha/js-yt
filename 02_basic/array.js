const arr1=[1,2,3,4,5]
console.log(arr1);
//accessing elements 0-based indexing 
// console.log(arr1[0]);
//shallow copy banata hai (same references)
const hero= new Array(1,2,3,4)
 
//array methods

arr1.push(6)
console.log(arr1);
arr1.pop()
console.log(arr1);
arr1.unshift(9);
console.log(arr1);
console.log(arr1.includes(5));
console.log(arr1.indexOf(9));

const newarr= arr1.join()
console.log(arr1);
console.log(newarr);
console.log(typeof newarr);


//slice and splice

console.log("A",arr1)
const myn= arr1.slice(1,3);
console.log(myn);
console.log("B",arr1);

const myn2= arr1.splice(1,3);
console.log("C",arr1);
console.log(myn2);
//splice originally affect the array whereas the slice will not do any thing to the array
//in splice the given portion is removed from the array leaving array with non given elements(index)



//functions



