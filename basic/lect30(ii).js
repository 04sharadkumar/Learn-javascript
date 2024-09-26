const myNums = [1,2,3,4,5,6,7,8,9,10]


//+++++++++++++++++   with for each
// 

// myNums.forEach((num)=> {

//     if(num <= 4){
//         return newNums.push(num)
//     }

// })
//++++++++++++++++++++++++with filter
// 

const newArr = myNums.filter((num)=> {
    return num>4
})
// console.log(newArr)

// const newNums=myNums.map((num)=>{ return num+10})


//chaining

const newNums =myNums
                 .map((num)=>num*10)
                 .map((num)=>num+1)
                 .filter((num)=> num>=40)


                 console.log(newNums)




