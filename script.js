let score = {player: 0, computer: 0};
game()

// initiates button event listener
function game() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", buttonClickRound))
}

// Event listeners on buttons
function buttonClickRound(e){
    let message = document.querySelector(".message p")
    let scoreMessage = document.querySelector(".score-message p");
    if (score.computer < 5 && score.player < 5) {
        let roundVerdict = playRound(e.target.id, computerPlay());
        message.textContent = roundVerdict.messageWin;
        if (roundVerdict.winner == "player") {score.player++;}
        else if (roundVerdict.winner == "computer") {score.computer++;}
        scoreMessage.innerHTML = `Your score is: ${score.player} <br/> The computer score is: ${score.computer}`;
    } else {
        let winner = getKeyByValue(score, 5)
        scoreMessage.innerHTML = `The winner is ${winner}`;
    }
}

// Will identify winner score of 5   
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
    }

// This simulates one round of User vs Computer
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        return {messageWin: "It is a tie", winner: "none"};
    }
    if ((playerSelection+computerSelection) == "RockPaper" || (playerSelection+computerSelection) == "PaperRock") {
        if (playerSelection == "Paper") {
            return {messageWin: "You win, Paper beats Rock", winner: "player"};
        } else {
            return {messageWin: "You lose, Paper beats Rock", winner: "computer"};
        }
    } else if ((playerSelection+computerSelection) == "RockScissors" || (playerSelection+computerSelection) == "ScissorsRock") {
        if (playerSelection == "Rock") {
            return {messageWin: "You win, Rock beats Scissors", winner: "player"};
        } else {
            return {messageWin: "You lose, Rock beats Scissors", winner: "computer"};
        }
    } else {
        if (playerSelection == "Scissors") {
            return {messageWin: "You win, Scissors beats Paper", winner: "player"};
        } else {
            return {messageWin: "You lose, Scissors beats Paper", winner: "computer"};
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
            computerSelection = "Scissors";
            break;
    }
    return computerSelection;
}