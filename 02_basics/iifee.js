// //immediately invoked function expression(IIFE)

 function chai(){
     console.log(`DB connected`);
 }chai()

 //both are same but second one is iifee
 (function chai(){
     //named iifee
    console.log(`DB connected`);
 })();
 //syntax ()()


 ( () =>{
    console.log(`db is connected`);
 })();


 ( (name) =>{
     //parmater passing in iifee
     console.log(`db is connected ${name}`);
 })('rahul')




