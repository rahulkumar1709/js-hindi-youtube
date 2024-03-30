const myNum=[1,2,3,4,5,6,7,8,9,10]


// const newNums=myNumbers.map((num)=>num+10)
// //it automatically returns the values
const newNums=myNum
.map((num)=>num *10)  //this is a chaining property
.map((num)=>num+1)
.filter((num)=>num>=40)
console.log(newNums);

