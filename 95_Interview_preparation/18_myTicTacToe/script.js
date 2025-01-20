const p1 = `<span id="p1">x</span>`;
const p2 = `<span id="p2">o</span>`;

let turn = 1;
let emptyBoxes = 9;

let currentBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

for (let i = 1; i <= 9; i++) {
  const box = document.getElementById(i);
  box.addEventListener("click", handleClick);
}

function handleClick(e) {
  const currdiv = e.target;
  const id = Number(currdiv.getAttribute("id"));
  const i = Math.floor((id - 1) / 3);
  const j = (id - 1) % 3;
  if (turn === 1) {
    currdiv.innerHTML = p1;
    currentBoard[i][j] = 1;
    turn = 2;
  } else if (turn === 2) {
    currdiv.innerHTML = p2;
    currentBoard[i][j] = 2;
    turn = 1;
  }
  emptyBoxes -= 1;
  const winner = findWinner();
  //   console.log(winner);
  if (winner === 1) {
    setTimeout(() => {
      alert("player-1 won");
      reset();
    }, 100);
  } else if (winner === 2) {
    setTimeout(() => {
      alert("player-2 won");
      reset();
    }, 100);
  } else if (emptyBoxes === 0) {
    setTimeout(() => {
      alert("draw");
      reset();
    }, 100);
  }
}

function findWinner() {
  let score = {
    1: 0,
    2: 0,
  };
  //row wise
  for (let i = 0; i < currentBoard.length; i++) {
    for (let j = 0; j < currentBoard[i].length; j++) {
      if (currentBoard[i][j] === 1) {
        score[1] += 1;
        // console.log(score);
      } else if (currentBoard[i][j] === 2) {
        score[2] += 1;
      }
    }
    if (score[1] === 3) {
      return 1;
    } else if (score[2] === 3) {
      return 2;
    }
    score = {
      1: 0,
      2: 0,
    };
  }
  //coloum wise
  for (let j = 0; j < currentBoard.length; j++) {
    for (let i = 0; i < currentBoard[j].length; i++) {
      if (currentBoard[i][j] === 1) {
        score[1] += 1;
        // console.log(score);
      } else if (currentBoard[i][j] === 2) {
        score[2] += 1;
      }
    }
    if (score[1] === 3) {
      return 1;
    } else if (score[2] === 3) {
      return 2;
    }
    score = {
      1: 0,
      2: 0,
    };
  }
  //left diagonal
  for (let i = 0; i < currentBoard.length; i++) {
    let j = i;
    if (currentBoard[i][j] === 1) {
      score[1] += 1;
      // console.log(score);
    } else if (currentBoard[i][j] === 2) {
      score[2] += 1;
    }
  }
  if (score[1] === 3) {
    return 1;
  } else if (score[2] === 3) {
    return 2;
  }
  score = {
    1: 0,
    2: 0,
  };
  //right diagonal
  for (let i = 0; i < currentBoard.length; i++) {
    let j = currentBoard.length - 1 - i;
    if (currentBoard[i][j] === 1) {
      score[1] += 1;
      // console.log(score);
    } else if (currentBoard[i][j] === 2) {
      score[2] += 1;
    }
  }
  if (score[1] === 3) {
    return 1;
  } else if (score[2] === 3) {
    return 2;
  }
  return 0;
}

function reset() {
  for (let i = 1; i <= 9; i++) {
    const box = document.getElementById(i);
    box.innerHTML = "";
  }
  emptyBoxes = 0;
  turn = 1;
}
