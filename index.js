// need to put all loose info in classes/objects
// first cell only 'cells'
const cells = document.querySelectorAll(".cell");
const restart = document.querySelector(".button__restart");

// how to stop player taken cell already selected??

// Player objects - need to add pieces      !!!
// not looking at innerHTML, looking at class list
// can i add "fas fa-cat" for the piece, then access later: if currentPlayer.name === "Player One" cell.classList.addClass(currentPlayer.piece)     ???
class Player {
    constructor(name, piece) {
        this.name = name;
        this.piece = piece;
    }
}
const playerOne = new Player("Player One", "fas fa-cat");
const playerTwo = new Player("Player Two", "fas fa-dog");

// create currentPlayer for what piece to add to cell
let currentPlayer = playerOne;

// create function to add piece to cell - how to select the cell - one for each or queryall??                      use query all - one function to add icon,switch to next player and check for win
const cellSelected = () => {
    // add piece to sell
    // check if won
    // change to other player
}
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