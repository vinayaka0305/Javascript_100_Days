let wallId = document.querySelector('#wall-id')
let wallColor = document.querySelector('#wall-color')


function applyColor(){
    let wall = wallId.value;
    // console.log(wall);
    let color = wallColor.value;
    // console.log(color);
    let selecetedWall = document.getElementById(wall);
    selecetedWall.style['background-color'] = color
}

function resetWalls(){
    for(let i=1;i<=10;i++){
        const wall = document.getElementById(i);
        wall.style['background-color'] = 'transparent'
    }
    wallId.value = '';
    wallColor.value = '';
}