// global scope
let a =500;


if(true){            //  local scope will be exist inside the curly braces
    let a= 10;
    const b= 20;
    // var c= 30;    var is not use in today coding

    console.log("Inner :",a)
}
console.log(a)
//console.log(b)
// console.log(c)
