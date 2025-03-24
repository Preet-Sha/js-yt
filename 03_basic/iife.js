//IMMEDIATELY INVOKED FUNCTION EXPREESSIONS (IIFE)

//jaise humne fucntion likha waise hi tuirant execute karwana hai 
// global scope se polluate na ho esliye 

(function chai(){ //named iife hai 
    console.log("DB CONNECTED");

} )() ; // ye explicitliy  ; extra lagaya hia pehle nhi tha toh problem ho rha tha

//()() first jaha function likh rhe the second wala call karne ke lie

((name)=>{  //simple iife
    console.log(`DB CONNECTED TO 2 ${name} `);
})('preet') //AGAR DOABRA LIKGHA TOH ERROR AAYEGA CHALEGA NHI YE NHI KI ARROW FUNCTION HAI ESLIYE NHYI CHAL RHA HAI NORMAL HOTA TOH BHI NHI CHALTA
 
// YE HO RHA ELSIYE HAI KYUNKI USKO NHI PTA CHAL RHA HAI KI ROKANA KAHA HAI ESLUYE HUM ESME ; YE LGA DENGE 
 //agar kuch pass karna hai toh secnd wale bracket mein pass kar sakhte hai argument

 //do iife likhna hota hai toh ek ke end ke baad hume usko ; se end karna hota hai 