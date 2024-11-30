const player1Html = `<span id="player1mark">X</span>`;
const player2Html = `<span id="player2mark">O</span>`;

//first turn will be player1
let turn = 1;
let emptyBoxes = 9;

//to find winner;

const currentBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

for (let i = 1; i <= 9; i++) {
  const box = document.getElementById(i);
  //it will provide all the boxes with entire div
  // console.log(box);
  box.addEventListener("click", handeClick);
}

function handeClick(event) {
  // console.log(event);
  if (emptyBoxes > 0) {
    const currDiv = event.target;
    // console.log(currDiv);
    const id = Number(currDiv.getAttribute("id"));
    // console.log(id);
    const i = Math.floor((id - 1) / 3);
    // console.log(i);
    const j = (id - 1) % 3;
    // console.log(j);
    if (turn === 1) {
      currentBoard[i][j] = 1;
      // console.log(currentBoard[i][j]);
      currDiv.innerHTML = player1Html;
      turn = 2;
    } else if (turn === 2) {
      currentBoard[i][j] = 2;
      //  console.log(currentBoard[i][j]);
      currDiv.innerHTML = player2Html;
      turn = 1;
    }
    emptyBoxes -= 1;
    const winner = findWinner();

    if (winner === 1) {
      setTimeout(() => {
        alert("congrats player1 wins");
        resetBoard();
      }, 100);
    } else if (winner === 2) {
      setTimeout(() => {
        alert("congrats player2 wins");
        resetBoard();
      }, 100);
    }
    if (emptyBoxes === 0 && findWinner() === 0) {
      setTimeout(() => {
        alert("draw");
        resetBoard();
      }, 1000);
    }
  }
}

function findWinner() {
  let currScore = {
    1: 0, //player 1;
    2: 0, //player 2;
  };

  //row wise
  for (let i = 0; i < currentBoard.length; i++) {
    for (let j = 0; j < currentBoard[i].length; j++) {
      if (currentBoard[i][j] === 1) {
        currScore[1] += 1;
      } else if (currentBoard[i][j] === 2) {
        currScore[2] += 1;
      }
    }
    if (currScore[1] === 3) {
      return 1;
    } else if (currScore[2] === 3) {
      return 2;
    }
    currScore = {
      1: 0,
      2: 0,
    };
  }
  //coloum wise

  for (let j = 0; j < currentBoard.length; j++) {
    for (let i = 0; i < currentBoard[j].length; i++) {
      if (currentBoard[i][j] === 1) {
        currScore[1] += 1;
      } else if (currentBoard[i][j] === 2) {
        currScore[2] += 1;
      }
    }
    if (currScore[1] === 3) {
      return 1;
    } else if (currScore[2] === 3) {
      return 2;
    }
    currScore = {
      1: 0,
      2: 0,
    };
  }

  //left diagonal wise

  for (let i = 0; i < currentBoard.length; i++) {
    let j = i;
    if (currentBoard[i][j] === 1) {
      currScore[1] += 1;
    } else if (currentBoard[i][j] === 2) {
      currScore[2] += 1;
    }
  }

  if (currScore[1] === 3) {
    return 1;
  } else if (currScore[2] === 3) {
    return 2;
  }
  currScore = {
    1: 0,
    2: 0,
  };

  //right diagonal
  for (let i = 0; i < currentBoard.length; i++) {
    let j = currentBoard.length - 1 - i;
    if (currentBoard[i][j] === 1) {
      currScore[1] += 1;
    } else if (currentBoard[i][j] === 2) {
      currScore[2] += 1;
    }
  }
  if (currScore[1] === 3) {
    return 1;
  } else if (currScore[2] === 3) {
    return 2;
  }

  return 0;
}

function resetBoard() {
  for (let i = 0; i < currentBoard.length; i++) {
    for (let j = 0; j < currentBoard[i].length; j++) {
      currentBoard[i][j] = 0;
    }
  }

  for (let i = 1; i <= 9; i++) {
    const box = document.getElementById(i);
    box.innerHTML = "";

    turn = 1;
    emptyBoxes = 9;
  }
}
