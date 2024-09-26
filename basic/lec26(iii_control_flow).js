const userEmail = "04sharad@gmail.com"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("don't have user email");
}

//falsy values

// false,0,-0,BigInt 0n, "", null , undefined , NaN

//truthy values

//   "0" , "false" , " ", [], {},function(){},

const forArray = []
if (forArray.length === 0){
    console.log("Array is Empty")
}

const  emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("obj is empty");
}


// Nullish Coalescing Operatoor(??): NUll undefines

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10        

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1)

// Terniary Operator

// condition ? true : false


const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




