const promiseOne = new Promise(function(resolve,reject)
{
    //do an async task
    //Db calls ,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
    //promise which is get to consume is not run because then is not connect with resolve.resolve and then is connected
})
promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2"); 
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 is resolved");
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"rahul",email:"ex@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    //whatever we are going to write in resolve get printed in console in then protype fn of then
    console.log(user);
})
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
      let error=true
      if(!error){
        resolve({username:"rahul",passsword:"2333"})
      } else{
        reject('ERROR something went wrong')
      }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    //to get only username we use chaining of then
}).catch((error)=>{
    console.log(error);
}).finally(()=>
console.log("the promise is either resolve aur reject")
)

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true
        if(!error){
          resolve({username:"javascript",passsword:"2333"})
        } else{
          reject('ERROR js went wrong')
        }
      },1000)

})
async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()