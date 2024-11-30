//traditional for loop

for(let i=1;i<=5;i++){
    console.log(i)
}


//for of loop
const players = ["Dhoni","virat","rohit"];

for(let player of players){
    console.log(player)
}

//for in loop
for(let playerIndex in players){
    console.log(playerIndex)
}

//for in loop is the only loop that can iterate over object
const playerInformation = {
    name:"virat",
    team:"rcb"
}

for(let key in playerInformation){
    console.log(key)
}

for(let key in playerInformation){
    console.log(playerInformation[key])
}

//for each loop

players.forEach((player,index,arr)=>console.log(player,index,arr))