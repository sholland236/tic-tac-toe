// need to put all loose info in classes/objects
const cells = document.querySelectorAll(".grid__cell");
const restart = document.querySelector(".button__restart");

// create function for button to clear cells + set player to player 1
const clearCells = () => {
    cells.innerHTML = "";
    // ^^incorrect
    // need to set player to player one
};
restart.addEventListener("click", clearCells);

// Player objects - should they  be classes?
const playerOne = {
    name: "Player One",
    // how to add icon
}
const playerTwo = {
    name: "Player Two",
    // add icon
}

// create currentPlayer for what piece to add to cell
const currentPlayer = playerOne;

// create function to add piece to cell
// create function to switch player

// create ways to win
// create functionality for when player wins
// create functionality for when no player wins