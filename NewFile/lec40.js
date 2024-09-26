//++++++++++++++++++++++++ promises
const promiseOne = new  Promise(function(resolve,reject){

    setTimeout(()=>{

        console.log("working")

        
    },2000);

    resolve();
})

promiseOne.then(
    console.log("y")
)