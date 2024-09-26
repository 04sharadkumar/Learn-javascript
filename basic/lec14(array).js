// Array
const myArr = [0,1,2,3,4,5]

// console.log(myArr)

const myHero = ["ironman","hulk"]

//another way to declare array

const myArr2 = new Array('sharad','kumar')

// console.log(myArr2)

// Array Methods

// myArr.push(6)     //push is used for add the value in array
// myArr.push(9)

// myArr.pop()      //pop is used for remove from array

// myArr.unshift(8)     // it is used for add value in the front of array
//myArr.shift()   


// console.log(myArr.includes(9))

// console.log(myArr.indexOf('9'))


// const newArr = myArr.join()    //join is used for bind two array and it change typeof array into string


// console.log(typeof myArr)

// console.log(typeof newArr)

// slice , splice      //important for viva question

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2);