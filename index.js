import Player from "./scripts/classes/Player.js";

const cellContainers = document.querySelectorAll(".grid__cell");
const restart = document.querySelector(".button__restart");

const playerOne = new Player("Player One", "fas", "fa-cat");
const playerTwo = new Player("Player Two", "fas", "fa-dog");

let currentPlayer = playerOne;
let win = false;

const cellSelectedByPlayer = (cell) => {
    if  (win === false) {
        if (!(cell.childNodes[1].classList.contains("fa-cat")) && !(cell.childNodes[1].classList.contains("fa-dog"))) {
            addPiece(cell);
            checkForWinner();
            playerWins();
            changePlayer();
        }
    }
}
cellContainers.forEach((cell) => {
    cell.addEventListener("click", () => {
        cellSelectedByPlayer(cell);
    })
})

const addPiece = (cell) => {
    cell.childNodes[1].classList.add(currentPlayer.pieceParent, currentPlayer.pieceAnimal);
}

const checkForCat = (cellsArray) => {
    if (cellsArray.classList.contains("fa-cat")) {
        return true;
    }
    return false;
}

const checkForDog = (cellsArray) => {
    if (cellsArray.classList.contains("fa-dog")) {
        return true;
    }
    return false;
}

const checkForWinner = () => {
    const cellOne = document.querySelector("#cell-one");
    const cellTwo = document.querySelector("#cell-two");
    const cellThree = document.querySelector("#cell-three");
    const cellFour = document.querySelector("#cell-four");
    const cellFive = document.querySelector("#cell-five");
    const cellSix = document.querySelector("#cell-six");
    const cellSeven = document.querySelector("#cell-seven");
    const cellEight = document.querySelector("#cell-eight");
    const cellNine = document.querySelector("#cell-nine");
    let cellsArray = [[cellOne, cellTwo, cellThree], [cellFour, cellFive, cellSix], [cellSeven, cellEight, cellNine]];
    if (
        (checkForCat(cellsArray[0][0]) && checkForCat(cellsArray[0][1]) && checkForCat(cellsArray[0][2]))
        || (checkForDog(cellsArray[0][0]) && checkForDog(cellsArray[0][1]) && checkForDog(cellsArray[0][2]))
        || (checkForCat(cellsArray[1][0]) && checkForCat(cellsArray[1][1]) && checkForCat(cellsArray[1][2]))
        || (checkForDog(cellsArray[1][0]) && checkForDog(cellsArray[1][1]) && checkForDog(cellsArray[1][2]))
        || (checkForCat(cellsArray[2][0]) && checkForCat(cellsArray[2][1]) && checkForCat(cellsArray[2][2]))
        || (checkForDog(cellsArray[2][0]) && checkForDog(cellsArray[2][1]) && checkForDog(cellsArray[2][2]))
        || (checkForCat(cellsArray[0][0]) && checkForCat(cellsArray[1][0]) && checkForCat(cellsArray[2][0]))
        || (checkForDog(cellsArray[0][0]) && checkForDog(cellsArray[1][0]) && checkForDog(cellsArray[2][0]))
        || (checkForCat(cellsArray[0][1]) && checkForCat(cellsArray[1][1]) && checkForCat(cellsArray[2][1]))
        || (checkForDog(cellsArray[0][1]) && checkForDog(cellsArray[1][1]) && checkForDog(cellsArray[2][1]))
        || (checkForCat(cellsArray[0][2]) && checkForCat(cellsArray[1][2]) && checkForCat(cellsArray[2][2]))
        || (checkForDog(cellsArray[0][2]) && checkForDog(cellsArray[1][2]) && checkForDog(cellsArray[2][2]))
        || (checkForCat(cellsArray[0][0]) && checkForCat(cellsArray[1][1]) && checkForCat(cellsArray[2][2]))
        || (checkForDog(cellsArray[0][0]) && checkForDog(cellsArray[1][1]) && checkForDog(cellsArray[2][2]))
        || (checkForCat(cellsArray[0][2]) && checkForCat(cellsArray[1][1]) && checkForCat(cellsArray[2][0]))
        || (checkForDog(cellsArray[0][2]) && checkForDog(cellsArray[1][1]) && checkForDog(cellsArray[2][0])) 
        )
        {
        win = true;
    }
}

const playerWins = () => {
    if (win) {
        var myCanvas = document.createElement('canvas');
        document.body.appendChild(myCanvas);

        var myConfetti = confetti.create(myCanvas, {
            resize: true,
            useWorker: true
        });
        var duration = 3 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            // launch a few confetti from the left edge
            confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
            });
            // and launch a few from the right edge
            confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
            });

            // keep going until we are out of time
            if (Date.now() < end) {
            requestAnimationFrame(frame);
            }
        }());
    }
}

const changePlayer = () => {
    if (currentPlayer.name === "Player One") {
        currentPlayer = playerTwo;
    } else if (currentPlayer.name == "Player Two") {
        currentPlayer = playerOne;
    }
}

const clearCells = () => {
    const cells = document.querySelectorAll(".cell");
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