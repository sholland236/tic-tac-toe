// still need to work on colour, for pieces, _variables file

// need to put all loose info in classes/objects
const cells = document.querySelectorAll(".cell");
const cellContainers = document.querySelectorAll(".grid__cell");
const restart = document.querySelector(".button__restart");
const cellOne = document.querySelector("#cell-one");
const cellTwo = document.querySelector("#cell-two");
const cellThree = document.querySelector("#cell-three");
const cellFour = document.querySelector("#cell-four");
const cellFive = document.querySelector("#cell-five");
const cellSix = document.querySelector("#cell-six");
const cellSeven = document.querySelector("#cell-seven");
const cellEight = document.querySelector("#cell-eight");
const cellNine = document.querySelector("#cell-nine");

// how to stop player taking cell already selected??

// Player objects
// can i add "fas fa-cat" for the piece, then access later: if currentPlayer.name === "Player One" cell.classList.addClass(currentPlayer.piece)     ???
class Player {
    constructor(name, pieceParent, pieceAnimal) {
        this.name = name;
        this.pieceParent = pieceParent;
        this.pieceAnimal = pieceAnimal;
    }
}

const playerOne = new Player("Player One", "fas", "fa-cat");
const playerTwo = new Player("Player Two", "fas", "fa-dog");

// create currentPlayer for what piece to add to cell
let currentPlayer = playerOne;
let win = false;
let winningPlayer;

// create function to add piece to cell - use query all - one function to add icon,switch to next player and check for win
// SOMETIMES DOESN'T WORK?? KEEP A LOOK OUT
const cellSelected = (cell) => {
    // add piece to cell
    cell.childNodes[1].classList.add(currentPlayer.pieceParent, currentPlayer.pieceAnimal);
    // check if won - still to complete
    hasWon();
    if (win) {
        console.log("WINNER");
    }
    // change to other player
    if (currentPlayer.name === "Player One") {
        currentPlayer = playerTwo;
        // is second 'if' required?
    } else if (currentPlayer.name == "Player Two") {
        currentPlayer = playerOne;
    }
}
cellContainers.forEach((cell) => {
    cell.addEventListener("click", () => {
        cellSelected(cell);
    })
})

// create ways to win
// how to shorten this
// only cat can win currently
const hasWon = () => {
    const topRow = cellOne.childNodes[1].classList.contains("fa-cat") && cellTwo.childNodes[1].classList.contains("fa-cat") && cellThree.childNodes[1].classList.contains("fa-cat");
    const middleRow = cellFour.childNodes[1].classList.contains("fa-cat") && cellFive.childNodes[1].classList.contains("fa-cat") && cellSix.childNodes[1].classList.contains("fa-cat");
    const bottomRow = cellSeven.childNodes[1].classList.contains("fa-cat") && cellEight.childNodes[1].classList.contains("fa-cat") && cellNine.childNodes[1].classList.contains("fa-cat");
    const leftColumn = cellOne.childNodes[1].classList.contains("fa-cat") && cellFour.childNodes[1].classList.contains("fa-cat") && cellSeven.childNodes[1].classList.contains("fa-cat");
    const middleColumn = cellTwo.childNodes[1].classList.contains("fa-cat") && cellFive.childNodes[1].classList.contains("fa-cat") && cellEight.childNodes[1].classList.contains("fa-cat");
    const rightColumn = cellThree.childNodes[1].classList.contains("fa-cat") && cellSix.childNodes[1].classList.contains("fa-cat") && cellNine.childNodes[1].classList.contains("fa-cat");
    const leftDiagonal = cellOne.childNodes[1].classList.contains("fa-cat") && cellFive.childNodes[1].classList.contains("fa-cat") && cellNine.childNodes[1].classList.contains("fa-cat");
    const rightDiagonal = cellThree.childNodes[1].classList.contains("fa-cat") && cellFive.childNodes[1].classList.contains("fa-cat") && cellSeven.childNodes[1].classList.contains("fa-cat");
    if (topRow || middleRow || bottomRow || leftColumn || middleColumn || rightColumn || leftDiagonal || rightDiagonal) {
        win = true;
    }
}


// create functionality for when player wins
// create functionality for when no player wins

// create function - works for only one cell - how to work for others
const clearCells = () => {
    cells.forEach(cell => {
        if (cell.classList.contains("fa-cat")) {
            cell.classList.remove("fas");
            cell.classList.remove("fa-cat");
        } else if (cell.classList.contains("fa-dog")) {
            cell.classList.remove("fas");
            cell.classList.remove("fa-dog");
        }
    })
    currentPlayer = playerOne;
    win = false;
};
restart.addEventListener("click", clearCells);