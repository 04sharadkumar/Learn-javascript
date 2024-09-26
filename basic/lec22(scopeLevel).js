//nested scope or scope Level

function one(){                        //parent: parent can'nt acces data from child
    const username = "sharad"

    function two(){                     //child: it can access data from parent

        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two();
}

// one()

if (true){
    const username = "sharad"
    if (username === "sharad"){

        const  website = " kumar21"

        console.log(username+ website)

    }
    // console.log(website)        // it can'nt if access data from inner 
}
//console.log(username)         //it can'nt if access data from inner 

//     +++++++++++++++++++++++++++++interesting +++++++++++

function addone(num){
    return num + 1
}
console.log(addone(5))



const addTwo = function(num){
    return  num + 2
}

addTwo(5)

console.log(addTwo(3))


