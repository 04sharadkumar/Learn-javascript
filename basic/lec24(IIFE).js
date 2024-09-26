// Immediately Invoked Function Expressions (IIFE)


// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

//()() : FIRST paranthesis is for function defination and second is for function execution
// for interview : grobal scope me jo variable declare kiye hote hy aur unse ko problem hoti hy usko avoid karta hy

// unNamed IIFE
(  (name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('sharad');


