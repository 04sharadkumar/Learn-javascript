//+++++++++++++++++++++++++ Number
const score = 300

// console.log(score)

// const balance = new Number(100) // if we want declare specially as a number than use  = new Number(_)
// console.log(balance)

// //to make it string

// console.log(balance.toString().length);

// console.log(balance.toFixed(1)); // it is used for show  after decimal for example 100 became in 100.0

// const otherNumber = 123.78467


// console.log(otherNumber.toPrecision(3)); // toprecision is use for give round of value the the give value for ex 12.36437 it give 12.4 if toprecision is (3)

// const hundred = 1000000

// console.log(hundred.toLocaleString('en-IN'))



// ++++++++++++++++++++++++ maths ++++++++++++++++++

console.log(Math)

// console.log(Math.round(4.22))  // it will give round of value


// console.log(Math.floor(4.6)) 

// console.log(Math.sqrt(5))  // to find sqrt of any number
// console.log(Math.pow(4)) 

// console.log(Math.min(4,5,88,6,1))  // to find minimum value

// console.log(Math.max(4,5,88,6,1)) // to fund maximum value

console.log(Math.random()) // it will give always random value between 0 and 1

console.log(Math.random()*10 +1) // {here 10 is multipy to shift the value and for example 0.38746 will be know more than 1.3789}it also used in game for give different num

console.log(Math.floor(Math.random()*10)+1) // here  if output comes into 0.4343 than the floor will give ans is 0 to avoid this situation we add 1 


// console.log(Math.round(Math.random()*10+1))  // use in ludo this logic// it is created my me

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 ) )+ min)