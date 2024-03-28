const useremail=[]



if(useremail){
    console.log("got user email")
}
else{
    console.log("user email not found")
}

//falsy value
false,0,-0,BigInt,"",null,undefined,NaN


//truthy value
//"0",'false'," ",[],{},function(){}



const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object has not keys");
}

//nullish coalescing operator(??): null undefined
let val1;
//val1=4??10
//val1=null??10
val1=null??10??15
console.log(val1);


//terniary operator
//condition ? true : false

const iceTeaPrice=70
iceTeaPrice>=80?console.log("more than 80") : console.log("less than 80");




