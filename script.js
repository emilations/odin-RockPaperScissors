let score;
let scoreMessage = document.querySelector(".score-message p");
let message = document.querySelector(".message p")
let buttons = document.querySelectorAll(".container button");
let resetButton = document.querySelector(".reset");

game()

function game() {
    score = {player: 0, computer: 0};
    buttons.forEach(button => button.addEventListener("click", buttonClickRound))
    resetButton.addEventListener("click", resetGame)
}

// Event listeners on buttons
function buttonClickRound(e){
    let roundVerdict = playRound(e.target.id, computerPlay());
    if (score.computer < 5 && score.player < 5) {
        message.textContent = roundVerdict.messageWin;
        scoreMessage.innerHTML = `Game till score of 5 <br> Your score is: ${score.player} <br/> The computer score is: ${score.computer}`;
    } else {
        let winner = Object.keys(score).find(key => score[key] === 5)
        scoreMessage.innerHTML = `The winner is ${winner}`;
        buttons.forEach(button => button.removeEventListener("click", buttonClickRound));
    }
}

function resetGame() {
    message.textContent = "";
    scoreMessage.innerHTML = "";
    game();
}

// This simulates one round of User vs Computer
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        return {messageWin: "It is a tie", winner: "none"}
    }
    if ((playerSelection+computerSelection) == "RockPaper" || (playerSelection+computerSelection) == "PaperRock") {
        if (playerSelection == "Paper") {
            score.player++;
            return {messageWin: "You win, Paper beats Rock", winner: "player"};
        } else {
            score.computer++;
            return {messageWin: "You lose, Paper beats Rock", winner: "computer"};
        }
    } else if ((playerSelection+computerSelection) == "RockScissor" || (playerSelection+computerSelection) == "ScissorRock") {
        if (playerSelection == "Rock") {
            score.player++;
            return {messageWin: "You win, Rock beats Scissor", winner: "player"};
        } else {
            score.computer++;
            return {messageWin: "You lose, Rock beats Scissor", winner: "computer"};
        }
    } else {
        if (playerSelection == "Scissor") {
            score.player++;
            return {messageWin: "You win, Scissor beats Paper", winner: "player"};
        } else {
            score.computer++;
            return {messageWin: "You lose, Scissor beats Paper", winner: "computer"};
        }
    }
}

// This randomizes the hand of the computer
function computerPlay() {
    let computerSelection;
    let random = Math.ceil(Math.random()*3);
    switch (random) {
        case 1:
            computerSelection = "Rock";
            break;
        case 2:
            computerSelection = "Paper";
            break;
        case 3:
            computerSelection = "Scissor";
            break;
    }
    return computerSelection;
}