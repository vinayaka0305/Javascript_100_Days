const num = document.querySelector('#num');

function displayRandomNumber(){
    const random = randomNumGenerator();
    console.log(random);
    num.innerText = random;
}

function randomNumGenerator(){
    return Math.floor(Math.random()*41-20);
    // renders a random whole number each time between -20 & 20.
}

// : The random number generated must be between 20 and -20, and should be a whole number. If it is in decimal, make sure to round it off.