// need to put all loose info in classes/objects
// first cell only 'cells'
const cells = document.querySelector(".cell");
const restart = document.querySelector(".button__restart");

// Player objects - need to add pieces      !!!
// not looking at innerHTML, looking at class list
class Player {
    constructor(name, piece) {
        this.name = name;
        this.piece = piece;
    }
}
const playerOne = new Player("Player One", "X");
const playerTwo = new Player("Player Two", "O");

// create currentPlayer for what piece to add to cell
let currentPlayer = playerOne;

// create function to add piece to cell - how to select the cell - one for each or queryall??                      use query all - one function to add icon,switch to next player and check for win
const cellSelected = () => {
    // 
}
// create function to switch player - is it a function or just set to other player at end of above function?

// create ways to win
// create functionality for when player wins
// create functionality for when no player wins

// create function for button to clear cells + set player to player 1
const clearCells = () => {
    // what about fas class?
    if (cells.classList.contains("fa-cat")) {
        cells.classList.remove("fas");
        cells.classList.remove("fa-cat");
    } else if (cells.classList.contains("fa-dog")) {
        cells.classList.remove("fas");
        cells.classList.remove("fa-dog");
    }
    currentPlayer = playerOne;
};
restart.addEventListener("click", clearCells);