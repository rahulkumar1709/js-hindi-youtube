
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600));
const user={
    username:"rahul",
    price:199
}
function handleObject(anyobject){
    console.log( `username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username:"sam",
    price:89
})
const myArray=[200,400,500,700]
function returnSecondValue(getarray){
      return getarray[1]
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([300,700,800]));

