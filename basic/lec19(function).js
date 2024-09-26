// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }


function addTwoNumber(num1,num2){       //parameter

    
    // let result = num1+num2
    // return result

    //another way

     return num1 + num2

}

const result = addTwoNumber(2,5);   //argument

// console.log("result:",result)

function logInUserMessage(username){     //if you don'nt want to go in if condition the pass the minimum value to username/parameter for ex (username ="kr")

    //if(username === undefined)
    if(!username){

        console.log("please enter a username")
        return

    }
    return `${username} just logged In`
}

console.log(logInUserMessage("sharad"))

// if you not pass any value then it will defined undefines
console.log(logInUserMessage())