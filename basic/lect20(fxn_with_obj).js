function calculateCartPrice(...num1){     // ... is called rest and spread operator
    return num1;
}
console.log(calculateCartPrice(200,122,455));


const user = {
    username : "sharad",
    price:769,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);

const myNewArray  = [200,400,600,800];

function handleArray(anyArray){
   
    return anyArray[2];
}

console.log(handleArray(myNewArray))
