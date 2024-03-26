//  var a=800

//  if(true){
//     let a=200
//     const b=400
//      c=100
//      console.log("inner",a)
// }
// console.log(a);
// // console.log(b);
// console.log(c);

function one(){
    const username="rahul"

    function two(){
        const website=" youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
//  one()


if(true){
    const username="rahul"
    if(username==="rahul"){
      const website="youtube"
    //   console.log(username+website);  

    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++interesting+++++++++
addone(3)
function addone(num){
    return num+1

}


const addTwo=function(num){
    //both are function declaration in second one a variable is holding the function
    return num+2
}
addTwo(3)




