const player1 = `<span id="p1">x</span>`;
const player2 = `<span id="p2">o</span>`;

let turn = 1;
let emptyBoxes = 9;

const currentBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

for (let i = 1; i <= 9; i++) {
  const box = document.getElementById(i);
  box.addEventListener("click", handleClick);
}

function handleClick(event) {
  // console.log(e.target);
  if (emptyBoxes > 0) {
    const currDiv = event.target;
    const id = Number(currDiv.getAttribute("id"));
    // console.log(id)
    const i = Math.floor((id - 1) / 3);
    const j = (id - 1) % 3;
    // console.log(i,j)
    if (turn === 1) {
      currentBoard[i][j] = 1;
      currDiv.innerHTML = player1;
      turn = 2;
    } else if (turn === 2) {
      currentBoard[i][j] = 2;
      currDiv.innerHTML = player2;
      turn = 1;
    }
    emptyBoxes -= 1;
    // console.log(emptyBoxes);
    const winner = findWinner();

    if (winner === 1) {
      setTimeout(() => {
        alert("congrats p1");
        resetBoard();
      }, 100);
    } else if (winner === 2) {
      setTimeout(() => {
        alert("congrats p2");
        resetBoard();
      }, 100);
    }
    if (emptyBoxes === 0 && findWinner() === 0) {
      setTimeout(() => {
        alert("game draw");
        resetBoard();
        restart();
      }, 100);
    }
  }
}

function findWinner() {
  let currScore = {
    1: 0,
    2: 0,
  };

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
  //colum
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
   
  }
  turn = 1;
  emptyBoxes = 9;
}
