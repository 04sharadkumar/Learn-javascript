// in js memory is of two type
// stack(primitive) it give as a copy  /

let myYoutubename = "sharad.com"

let anothername = myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

console.log(" ")

//heap(Nonprimitive) it give as a referance

let userOne = {

    gmail : "04sharadkumar@gmail.com",
    upi : "sk47@ybl"   
}

let userTwo = userOne

userTwo.gmail = "06sharad@gmail.com"

console.log(userOne)
console.log(userTwo)
console.log(userTwo.gmail)
