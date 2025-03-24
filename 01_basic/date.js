let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(" ")
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate)


let myc=new Date(2025,0,23)
console.log(myc.toDateString());

let yc=new Date("2025-1-23")
console.log(yc.toLocaleDateString());
//use in polls and quizes time
let mytime = Date.now()
console.log(mytime);
console.log(yc.getTime());
//in second
console.log(Math.floor(Date.now()/1000))

let nd=new Date()
console.log(nd.getDate());
