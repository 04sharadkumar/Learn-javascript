// react and node js helpful

const marvel_Hero = ["thor","ironman","spiderman"];

const dc_Hero = ["superman","flash","batman"];

marvel_Hero.push(dc_Hero);

// console.log(marvelHero)
// console.log(marvelHero[3][1])

// const allHeros = marvelHero.concat(dcHero)
// console.log(allHeros)


//spread(...) operator 


// const all_new_hero = [...marvel_Hero,...dc_Hero]

// console.log(all_new_hero)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realArr =  anotherArr.flat(Infinity)

console.log(realArr)



console.log(Array.isArray("sharad")) //it is not a array

console.log(Array.from("sharad"))

console.log(Array.from({ name:"sharad"}))

//multiple variable save into array
let score1 =100
let score2 = 200
let score3 = 200

console.log(Array.of(score1,score2,score3))