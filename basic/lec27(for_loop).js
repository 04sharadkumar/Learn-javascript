// for loop with break and continue. it is also called iteration




for (let i = 0; i <= 10; i++) {
    const element = i;

    //console.log(element);
    
}

for (let i = 0; i <=10; i++) {

    //console.log(`Outer loop value : ${i}`);
   for (let j = 0; j < 10; j++) {
    
 //   console.log(`inner loop value is ${j} and outer loop is ${i}`)
    
   }
    
}

let myArray = ['flash','batman','superman'];

    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];

       // console.log(element);
        
    }

    //break and continue

    for (let index = 1; index < 20; index++) {

        if(index == 5){
            console.log(`detected id 5`)
            break;
        }
        

        console.log(`value is i is ${index}`)
      
        
    }