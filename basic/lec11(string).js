// string in javascript
const name = "sharad"
const countRepo = 50

//console.log(name +` `+ countRepo+` `+"write");

console.log(`my name is ${name} and my repo count is${countRepo}`);

const gameName = new String('kumar')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(" === new ===");

console.log(gameName.charAt('3')); //it tell us about index 3 per con sa character hy


console.log(gameName.toUpperCase());

const anotherString = gameName.slice(-4,3)

console.log(anotherString)

const newvar = "   sharad    "

console.log(newvar)
console.log(newvar.trim())  // trim function removes the extra spaces


const url = " https://sharad.com/sharad%20kumar";


console.log(url.replace('%20','_'))   //it is used to replace the any thing from string

console.log(url.includes('sharad'))

const Nam = "aryan-sharma-boy"

console.log(Nam.split('-'))


// go to mdn to learn more
