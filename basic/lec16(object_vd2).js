// const tinderUser = new Object()  //it is a singleton object

// const tinderUser = {}     // non singleton object


 tinderUser.id = "123abc"

 tinderUser.name = "sam"

 tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"john",
            lastName:"kumar",

        }
       
    }
}
console.log(regularUser.fullName.userFullName.lastName)


//combine two object

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3 =Object.assign({},obj1,obj2)

//spread the object
const obj3 ={...obj1, ...obj2}

console.log(obj3)


//how values comes from database

const users = [
    {
        id:1,
        email:"oegamil.com"

    },
    {
        id:1,
        email:"oegamil.com"

    },
    {
        id:1,
        email:"oegamil.com"

    },
]

// users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));



