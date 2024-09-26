const user = {

    username : "sharad",
    price : 999,

    welcomeMessage : function(){

        console.log(`${this.username} , welcome to website `);    //here "this " hold the current context mean the value of parent 
    
        console.log(this);

    }


}
// user.welcomeMessage()

// user.username = "aryan"    // here we change the value of username there current context will also change and give anoter value

// user.welcomeMessage()


console.log(this)

// function chai(){

//     let username = "sharad"
//     console.log(this.username)
// }

//++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++

const chai = () =>{

    let username = "sharad"
    console.log(this)
}
// chai();

// explicit return (symbol={}): here add {} and give return
const addTwo = (num1,num2)=> {    

    return num1 +num2 ;

}
console.log(addTwo(2,5))
// implicit return (symbol= ()) : In this there are no use of paranthesis 

const addanother = (num1,num2) => (num1 + num2) ;   // it only for one line

  console.log(addanother(4,5))  ;

//   for object : but in  brackit there are use of paranthesis({}) 


const addanothernew = (num1,num2) => ({username:"sharad"}) ; 
console.log(addanothernew(3,4));


