const cells = document.getElementsByClassName("cell");
const board = document.getElementById("board");
const winner = document.getElementById("winner");
const player1 = "X";
const player2 = "O";
const winningCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let player1Turn = true;

const init = () => {
  board.addEventListener("click", (ev) => {
    const cellClicked = ev.target;
    if (!cellClicked.textContent) {
      if (player1Turn) {
        cellClicked.textContent = player1;
      } else {
        cellClicked.textContent = player2;
      }

      player1Turn = !player1Turn;

      validation();
    }
  });
};

const validation = () => {
  winningCases.forEach((idCell) => {
    const a = cells[idCell[0]]?.textContent;
    const b = cells[idCell[1]]?.textContent;
    const c = cells[idCell[2]]?.textContent;

    if (a && a === b && b === c) {
      console.log("winner");
      if (player1 === a) {
        winner.textContent = "Player 1 won";
      } else {
        winner.textContent = "Player 2 won";
      }
    }
  });
};

init();
