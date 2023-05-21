"use strict"

console.log("JS kører");

// Skakbrættets layout
const boardLayout = [
  "r",
  "n",
  "b",
  "q",
  "k",
  "b",
  "n",
  "r",
  "p",
  "p",
  "p",
  "p",
  "p",
  "p",
  "p",
  "p",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "P",
  "P",
  "P",
  "P",
  "P",
  "P",
  "P",
  "P",
  "R",
  "N",
  "B",
  "Q",
  "K",
  "B",
  "N",
  "R",
];

// Opretter skakbrættet
function createChessboard() {
  const chessboard = document.getElementById("chessboard");

  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add((i + Math.floor(i / 8)) % 2 === 0 ? "white" : "black");

    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundImage = getPieceImage(boardLayout[i]);

    square.appendChild(piece);
    chessboard.appendChild(square);
  }
}

// Returnerer stien til billedet af en brik baseret på dens notation
function getPieceImage(piece) {
  const pieceImagePath = "path/to/piece/images/";

  switch (piece) {
    case "P":
      return `url(${pieceImagePath}white-pawn.png)`;
    case "R":
      return `url(${pieceImagePath}white-rook.png)`;
    case "N":
      return `url(${pieceImagePath}white-knight.png)`;
    case "B":
      return `url(${pieceImagePath}white-bishop.png)`;
    case "Q":
      return `url(${pieceImagePath}white-queen.png)`;
    case "K":
      return `url(${pieceImagePath}white-king.png)`;
    case "p":
      return `url(${pieceImagePath}black-pawn.png)`;
    case "r":
      return `url(${pieceImagePath}black-rook.png)`;
    case "n":
      return `url(${pieceImagePath}black-knight.png)`;
    case "b":
      return `url(${pieceImagePath}black-bishop.png)`;
    case "q":
      return `url(${pieceImagePath}black-queen.png)`;
    case "k":
      return `url(${pieceImagePath}black-king.png)`;
  }
}

// Kald funktionen til at oprette skakbrættet
createChessboard();

// Lyt efter klik på skakbrættet
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
  square.addEventListener('click', handleSquareClick);
});

// Håndterer klik på en skakbrik
function handleSquareClick(event) {
  const clickedSquare = event.target;
  const selectedPiece = clickedSquare.querySelector('.piece');

  // Hvis der ikke er valgt en brik, afslut funktionen
  if (!selectedPiece) return;

  // Fjern markeringen fra alle felter
  squares.forEach((square) => square.classList.remove('selected'));

  // Marker det valgte felt
  clickedSquare.classList.add('selected');

  // Hent det valgte felter koordinater (række og søjle)
  const row = clickedSquare.parentNode.rowIndex;
  const col = clickedSquare.cellIndex;

  // Udskriv koordinaterne i konsollen
  console.log(`Valgt felt: række ${row}, søjle ${col}`);
}

