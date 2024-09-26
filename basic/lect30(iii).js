const myNumber = [1,2,3]
// it is used in shpping card


// const myTotal = myNumber.reduce(function(acc,currval){

//     console.log(`acc:${acc}and currval :${currval}`)
//      return acc+currval
// },0)

const myTotal = myNumber.reduce((acc,currval)=> acc+currval,0 )

console.log(myTotal)

//shopping card

const shoppingCart =[
    {
    itemName : "js Course",
    price:299
},
{
    itemName : "py Course",
    price:999
},
{
    itemName : "mobile dev",
    price:1299
},

]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceToPay)