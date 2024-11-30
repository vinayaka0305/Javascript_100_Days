const p1 = `<span class="p1">X</span>`;
const p2 = `<span class="p2">O</span>`;

let turn = 1;
let emptyboxes = 9;

let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

for (let i = 1; i <= 9; i++) {
  const box = document.getElementById(i);
  box.addEventListener("click", handleClick);
}

function handleClick(e) {
  const currDiv = e.target;
  const id = Number(currDiv.getAttribute("id"));
  // console.log(id);
  const i = Math.floor((id - 1) / 3);
  const j = (id - 1) % 3;

  if (turn === 1) {
    board[i][j] = 1;
    // console.log(board[i][j])
    currDiv.innerHTML = p1;
    turn = 2;
  } else if (turn === 2) {
    board[i][j] = 2;
    currDiv.innerHTML = p2;
    turn = 1;
  }
  const winner = findWinner();
  // console.log(winner);
  emptyboxes -= 1;
  // console.log(emptyboxes);
  if (winner === 1) {
    setTimeout(() => {
      alert("player1 won");
      reset();
    }, 100);
  } else if (winner === 2) {
    setTimeout(() => {
      alert("player2 won");
      reset();
    }, 100);
  } else if (emptyboxes === 0 && winner === 0) {
    // console.log(winner);
    setTimeout(() => {
      alert("game draw");
      reset();
    }, 100);
  }
}

function findWinner() {
  // console.log('hi')
  let score = {
    1: 0,
    2: 0,
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        score[1] += 1;
      } else if (board[i][j] === 2) {
        score[2] += 1;
      }
      if (score[1] === 3) {
        return 1;
      } else if (score[2] === 3) {
        return 2;
      }
    }
    score = {
      1: 0,
      2: 0,
    };
  }

  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[j].length; i++) {
      if (board[i][j] === 1) {
        score[1] += 1;
      } else if (board[i][j] === 2) {
        score[2] += 1;
      }
      if (score[1] === 3) {
        return 1;
      } else if (score[2] === 3) {
        return 2;
      }
    }
    score = {
      1: 0,
      2: 0,
    };
  }

  for (let i = 0; i < board.length; i++) {
    let j = i;
    if (board[i][j] === 1) {
      score[1] += 1;
    } else if (board[i][j] === 2) {
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

  for (let i = 0; i < board.length; i++) {
    let j = board.length - i - 1;
    if (board[i][j] === 1) {
      score[1] += 1;
    } else if (board[i][j] === 2) {
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
  console.log("hi");
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 1; i <= 9; i++) {
    const box = document.getElementById(i);
    box.innerHTML = "";
  }
  turn = 1;
  emptyboxes = 9;
}
