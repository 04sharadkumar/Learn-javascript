const coding =['js','rb','java']

// coding.forEach( function (item){console.log(item)} )  // it is a call back so fuction have no name


// coding.forEach((item,index,arr)=>
//      {console.log(item,index,arr)})

// [{},{},{}]

const myCoding = [
    {
        languageName: "java",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})