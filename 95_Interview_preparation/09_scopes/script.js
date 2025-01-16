// function outer(){
//     const outerVariable = "I'm from outer function"

//     function inner(){
//         console.log(outerVariable);
//     }
//     inner();
// }
// outer();

function counter(){
    let count = 1;

    return function increase(){
       return count++;
    }
    
}

function outer(){
    const message = "Hello lexical scope";

    return function inner(){
        console.log(message);
    }
}

// const count = counter();
// console.log(count());
// console.log(count());
// console.log(count());

const myClosuer = outer();

myClosuer();
