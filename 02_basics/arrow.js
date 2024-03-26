const user={
    username:"rahul",
    price:999,
     
    welcomeMessage: function(){
        //this refer to the current context
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
    
 }
//  user.welcomeMessage()
//  user.username="sam"
//  user.welcomeMessage()
console.log(this);

// function chai(){
//     let username="rahul"
//     console.log(this.username); //this not work because it only works in object 
// }
// chai()


// const chai=function(){
//     let username="rahul"
//     console.log(this.username);
// }


const chai=() => {  //arrow function
    let username="rahul"
    console.log(this);
}
//chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2

// }


//implict return
const addtwo=(num1,num2)=> (num1+num2)
console.log(addtwo(3,4));
