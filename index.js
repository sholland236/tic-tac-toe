// still need to work on colour, for pieces, _variables file

// need to put all loose info in classes/objects
const cells = document.querySelectorAll(".cell");
const cellContainers = document.querySelectorAll(".grid__cell");
const restart = document.querySelector(".button__restart");

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
// does this work?
const playerOne = new Player("Player One", "fas", "fa-cat");
const playerTwo = new Player("Player Two", "fas", "fa-dog");

// create currentPlayer for what piece to add to cell
let currentPlayer = playerOne;

// create function to add piece to cell - use query all - one function to add icon,switch to next player and check for win
// SOMETIMES DOESN'T WORK?? KEEP A LOOK OUT
const cellSelected = (cell) => {
    // add piece to cell
    cell.childNodes[1].classList.add(currentPlayer.pieceParent, currentPlayer.pieceAnimal);
    // check if won
    // change to other player
    if (currentPlayer.name === "Player One") {
        currentPlayer = playerTwo;
        // is second if required?
    } else if (currentPlayer.name == "Player Two") {
        currentPlayer = playerOne;
    }
}
cellContainers.forEach((cell) => {
    cell.addEventListener("click", () => {
        cellSelected(cell);
    })
})

// create function to switch player - is it a function or just set to other player at end of above function?

// create ways to win
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
};
restart.addEventListener("click", clearCells);