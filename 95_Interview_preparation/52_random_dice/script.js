const rollBtn = document.querySelector('#roll');

function randomDice(){
    const num = Math.floor(Math.random()*6)+1;
    //it will generate the random num between 1 to 6;
    alert(`Dice rolled: ${num}`);
}

rollBtn.addEventListener('click',randomDice);