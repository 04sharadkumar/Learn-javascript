// control flow

const isUserLoggedIn = true;

const temperature = 41;
if(temperature ===56){

    // console.log("less than 50");
}
else{
    // console.log("greater than 51")
}

const score = 200
if(score>100){
    const power = "fly"
    // console.log(`user power is ${power}`);
}

// shorthand code  
const balance = 1000;

if(balance > 500) //console.log("test");  // it is called the implicit 

// nesting in control flow

if(balance < 500){

    // console.log("less than")

}
else if(balance < 750){
//     console.log("less than 750")
}

else{
    // console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const  loggedInFromEmail = true

if (userLoggedIn && debitCard){

    console.log("Allow to buy courses");
}

if( loggedInFromGoogle || loggedInFromEmail){
    console.log("userLoggedIn");
}