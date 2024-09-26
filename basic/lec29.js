// high order array loops
//for of  loop


const arr = [1,2,3,4,5]

for (const num of arr) {

    // console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {

    // console.log(`Each char is ${greet}`)   
}

// maps 
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITAED STATES OF AMERICA")

console.log(map)

//forof loop with map (arr)

for (const [key,value] of map) {

    console.log([key,value])  
}

// forof loop with object

const myObj = {
    game: 'freefire',
    game1: "pubg"
}
// for (const [key ,value] of myObj) {

//     // console.log(key,':-',value)     //it is not iterable mean you cannt access
    
// }

const newObj = {
    js: 'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

// forin is used for obj

for (const key in newObj) {

    // console.log(`${key} shortcut is for for ${newObj[key]}`)
   
}
// can we use for in loop for array?

const program = ['js','rb','py'];

for (const key in program) {

    // console.log(program[key])
    
}


