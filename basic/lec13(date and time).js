//dates

let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)         // date is a object in javascript

// let myCreatedDate = new Date(2023,0,23)

// let myCreatedDate = new Date(2023,0,23,5,3)

let myCreatedDate = new Date("01-01-2001")

console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate.getMonth())
console.log(newDate.getDay())

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`)

newDate.toLocaleDateString('default',{     // it is used for costimize the date and time

    weekday: "long",
   
})





