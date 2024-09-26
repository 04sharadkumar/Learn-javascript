// filter map and reduce in javascript

//const coding = ["js","ruby","java","phy"]


// const values = coding.forEach((item)=>{
//    // console.log(item)
//     return item;
// })

// console.log(values)

const myNums = [ 1,2,3,4,5,6,7,8,9,10]

// here use of implicit fxn

//       +++++++++++first wAY


// let newNums= myNums.filter((num)=>{ //filter with call by with consditiion
//     return num>4;
// });



//+++++++++++++++++++++++SECOND way

// const newNums = []

// myNums.forEach((num)=>{

//     if (num>4) {
//         newNums.push(num)
        
//     }
// })

// console.log(newNums)



const books = [
    {title:'Book One', genre: 'Fiction' , publish : 1981 ,
        edition: 2004},

    {title:'Book Two', genre: 'History' , publish : 1985 ,
        edition: 2006},

    {title:'Book Three', genre: 'Science' , publish : 1980 ,
        edition: 2008},
];

//In one line to acces data or with implicit

   //const  userBooks = books.filter((bk) => bk.genre === 'History')

const userBooks = books.filter((bk) => { return bk.publish === 1980;
})

console.log(userBooks)