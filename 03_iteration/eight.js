const myNums=[2,3,4,5,6]
// const myTotal=myNums.reduce(function(accumulator, current_value){
//     console.log(`acc:${accumulator} and current value is ${current_value}`);
//     return accumulator+current_value
// },0)



//both are same second one is based on arrow func


const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);
