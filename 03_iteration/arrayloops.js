// //for of

// // ["","",""]
// // [{},{},{}]

// const arr=[1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num);
// }


// //Maps
//  const map=new Map()
//  map.set('IN', "india")
//  map.set('USA',"united states of america")
//  map.set('fr',"france")
//  map.set('IN',"india")

//  console.log(map);

//  for (const [key,value]of map) {
//     console.log(key, ':-' ,value);
//  }

//  //forof loop doesnt work on object means forof loop doesnt iterate on object it only works on string array 
//  //map forin loop works on object to iterate


//  const myobject={
//   js:'javascript',
//   cpp:'c++',
//   swift:'swift by apple'  
// }
// for (const key in myobject) {
//    console.log(myobject[key]);
// }


const programming=["js","rb","py","java"]
for (const key in programming) {
    console.log(programming[key]);
   
}