const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let player = 1;
let count = 0;

function drawBoard() {
  ctx.beginPath();
  ctx.moveTo(100, 0);
  ctx.lineTo(100, 300);
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 300);
  ctx.moveTo(0, 100);
  ctx.lineTo(300, 100);
  ctx.moveTo(0, 200);
  ctx.lineTo(300, 200);
  ctx.strokeStyle = "#333";
  ctx.stroke();
}

function drawX(x, y) {
  ctx.beginPath();
  ctx.moveTo(x + 10, y + 10);
  ctx.lineTo(x + 90, y + 90);
  ctx.moveTo(x + 90, y + 10);
  ctx.lineTo(x + 10, y + 90);
  ctx.strokeStyle = "#f00";
  ctx.stroke();
}

function drawO(x, y) {
  ctx.beginPath();
  ctx.arc(x + 50, y + 50, 40, 0, 2 * Math.PI);
  ctx.strokeStyle = "#007ACC";
  ctx.stroke();
}

canvas.addEventListener("click", handleClick);

function handleClick(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  const i = Math.floor(y / 100);
  const j = Math.floor(x / 100);
  if (board[i][j] === 0) {
    board[i][j] = player;
    if (player === 1) {
      drawX(j * 100, i * 100);
      player = 2;
    } else {
      drawO(j * 100, i * 100);
      player = 1;
	}
	count++;
  }
  if (count == 9) {
	alert("Game is about to restart!");
	setTimeout(() => {
		window.location.href = "index.html";
	  }, 2000);
  }
}

function main() {
  drawBoard();
}

main();
function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('light-mode');
}

const toggleButton = document.getElementById('toggleButton');
toggleButton.onclick = toggleTheme;
