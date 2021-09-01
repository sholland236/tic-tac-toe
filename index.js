import Player from "./scripts/classes/Player.js";

const cellContainers = document.querySelectorAll(".grid__cell");
const restart = document.querySelector(".button__restart");

const playerOne = new Player("Player One", "fas", "fa-cat");
const playerTwo = new Player("Player Two", "fas", "fa-dog");

let currentPlayer = playerOne;
let win = false;
// let winningPlayer;

const cellSelectedByPlayer = (cell) => {
    // use if win=true display winner
    if  (win === false) {
        if (!(cell.childNodes[1].classList.contains("fa-cat")) && !(cell.childNodes[1].classList.contains("fa-dog"))) {
            addPiece(cell);
            checkForWinner();
            playerWins(win);
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
}

const playerWins = (win) => {
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