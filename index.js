// still need to work on colour, + for pieces, _variables file

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
class Player {
    constructor(name, pieceParent, pieceAnimal) {
        this.name = name;
        this.pieceParent = pieceParent;
        this.pieceAnimal = pieceAnimal;
    }
}
const playerOne = new Player("Player One", "fas", "fa-cat");
const playerTwo = new Player("Player Two", "fas", "fa-dog");

let currentPlayer = playerOne;
let win = false;
let winningPlayer;

// add piece to cell
const cellSelected = (cell) => {
    if  (win === false) {
        // add piece to cell
        cell.childNodes[1].classList.add(currentPlayer.pieceParent, currentPlayer.pieceAnimal);
        // check if won - still to complete
        hasWon();
        if (win) {
            // change to confetti?
            window.alert(`${currentPlayer.name} won the game!`);
        }
        // change to other player
        if (currentPlayer.name === "Player One") {
            currentPlayer = playerTwo;
            // is second 'if' required?
        } else if (currentPlayer.name == "Player Two") {
            currentPlayer = playerOne;
        }
    }
}
cellContainers.forEach((cell) => {
    cell.addEventListener("click", () => {
        cellSelected(cell);
    })
})

// create ways to win
// works for cats only at the moment
const hasWon = () => {
    let cellsArray = [[cellOne, cellTwo, cellThree], [cellFour, cellFive, cellSix], [cellSeven, cellEight, cellNine]];
    if (cellsArray[0][0].classList.contains("fa-cat") && cellsArray[0][1].classList.contains("fa-cat") && cellsArray[0][2].classList.contains("fa-cat")) {
        win = true;
    } else if (cellsArray[1][0].classList.contains("fa-cat") && cellsArray[1][1].classList.contains("fa-cat") && cellsArray[1][2].classList.contains("fa-cat")) {
        win = true;
    } else if (cellsArray[2][0].classList.contains("fa-cat") && cellsArray[2][1].classList.contains("fa-cat") && cellsArray[2][2].classList.contains("fa-cat")) {
        win = true;
    } else if (cellsArray[0][0].classList.contains("fa-cat") && cellsArray[1][0].classList.contains("fa-cat") && cellsArray[2][0].classList.contains("fa-cat")) {
        win = true;
    } else if (cellsArray[0][1].classList.contains("fa-cat") && cellsArray[1][1].classList.contains("fa-cat") && cellsArray[2][1].classList.contains("fa-cat")) {
        win = true;
    } else if (cellsArray[0][2].classList.contains("fa-cat") && cellsArray[1][2].classList.contains("fa-cat") && cellsArray[2][2].classList.contains("fa-cat")) {
        win = true;
    } else if (cellsArray[0][0].classList.contains("fa-cat") && cellsArray[1][1].classList.contains("fa-cat") && cellsArray[2][2].classList.contains("fa-cat")) {
        win = true;
    } else if (cellsArray[0][2].classList.contains("fa-cat") && cellsArray[1][1].classList.contains("fa-cat") && cellsArray[2][0].classList.contains("fa-cat")) {
        win = true;
    } else if (cellsArray[0][0].classList.contains("fa-dog") && cellsArray[0][1].classList.contains("fa-dog") && cellsArray[0][2].classList.contains("fa-dog")) {
        win = true;
    } else if (cellsArray[1][0].classList.contains("fa-dog") && cellsArray[1][1].classList.contains("fa-dog") && cellsArray[1][2].classList.contains("fa-dog")) {
        win = true;
    } else if (cellsArray[2][0].classList.contains("fa-dog") && cellsArray[2][1].classList.contains("fa-dog") && cellsArray[2][2].classList.contains("fa-dog")) {
        win = true;
    } else if (cellsArray[0][0].classList.contains("fa-dog") && cellsArray[1][0].classList.contains("fa-dog") && cellsArray[2][0].classList.contains("fa-dog")) {
        win = true;
    } else if (cellsArray[0][1].classList.contains("fa-dog") && cellsArray[1][1].classList.contains("fa-dog") && cellsArray[2][1].classList.contains("fa-dog")) {
        win = true;
    } else if (cellsArray[0][2].classList.contains("fa-dog") && cellsArray[1][2].classList.contains("fa-dog") && cellsArray[2][2].classList.contains("fa-dog")) {
        win = true;
    } else if (cellsArray[0][0].classList.contains("fa-dog") && cellsArray[1][1].classList.contains("fa-dog") && cellsArray[2][2].classList.contains("fa-dog")) {
        win = true;
    } else if (cellsArray[0][2].classList.contains("fa-dog") && cellsArray[1][1].classList.contains("fa-dog") && cellsArray[2][0].classList.contains("fa-dog")) {
        win = true;
    };
    
    // winning combinations
    // [0][0] === [0][1] === [0][2]
    // [1][0] === [1][1] === [1][2]
    // [2][0] === [2][1] === [2][2]
    // [0][0] === [1][0] === [2][0]
    // [0][1] === [1][1] === [2][1]
    // [0][2] === [1][2] === [2][2]
    // [0][0] === [1][1] === [2][2]
    // [0][2] === [1][1] === [0][2]
    // loop?
}


// create functionality for when player wins
// create functionality for when no player wins

// clear cells function
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