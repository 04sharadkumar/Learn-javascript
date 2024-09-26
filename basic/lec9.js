// interview  data type summery for js

//datatype are of two type
/*
//Primitive (allocate as a copy)
7 type(call by value) : 
1 String ,
2 Number ,
3 Boolean ,
4 Null ,
5 undefined ,
6 Symbol,
7 BigInt

*/




const score = 100
const scoreValue =10.3

const isLoggedIn = false 
const outsideTemp = null     //we dont know temp of outside

const userEmail = undefined;   //undefined

//for symbol

const id = Symbol('12')

const anotherId = Symbol('12')

console.log(id === anotherId);

const bigNumber = 55875546545542n   //to make it bigint number ke last me "n " laga do



//Non Primitive / Referance (directly allocate a referance)

/*
Array
Object
Funtion

*/

//array
const heros = ["shaktiman","doremon","doga"]   

console.log(heros);


//object

let myObj={
    Name :"Sharad",
    class : 10,
}

console.log(myObj);

// function

const myfunction = function(){

    console.log("helloworld")
}

console.log(typeof myfunction)   // type of function is function but it is called object function