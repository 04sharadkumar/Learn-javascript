//singleton


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"sharad",
    age:32,
    loc:"Ldh",
    email:"04sharadkumar@gmail.com",
    "fullName":"boy", 
    [mySym]:"key1",           //you can'nt exces this with the use of JsUser.who it is only exces by second method
    isLoginIn:false,
    lastLoginDays:["monday","tuesday"]
}

// how to access the object 
console.log(JsUser)
//there are two way to access
//fisrt way

console.log(JsUser.age)    //this is not a coorect way to exces the object

//second way

console.log(JsUser["fullName"])    //this is write way to exces the object

console.log(typeof JsUser["mySym"])

JsUser.greeting = function(){
    console.log("hello js user")
}



JsUser.greeting2 = function(){
    console.log(`hello js user,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())

