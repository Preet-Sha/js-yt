function one(){
    const username="preet"
    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website); //error
    two()
}
// one()

if (true){
    const username="preet"
    if(username==="preet"){
        const website="youtube"
    console.log(username+website);
    }
}



// +++++++++ INTERESTING ++++++++++++++++++

//concept
function addone(num){
    return num+1
}
addone(5) //declaration se pehele bhi likh sakhte hai 


const addtwo=function(num){
    return num+2
}
addtwo(5) //ye error de dega agar upar likh diya toh eski ko kehte hai hoisting