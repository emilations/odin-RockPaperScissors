function computerPlay () {
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

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        return "It is a tie";
    }
    if ((playerSelection+computerSelection) == "RockPaper" || (playerSelection+computerSelection) == "PaperRock") {
        if (playerSelection == "Paper") {
            return "You win, Paper beats Rock";
        } else {
            return "You lose, Paper beats Rock"
        }
    } else if ((playerSelection+computerSelection) == "RockScissor" || (playerSelection+computerSelection) == "ScissorRock") {
        if (playerSelection == "Rock") {
            return "You win, Rock beats Scissors";
        } else {
            return "You lose, Rock beats Scissors"
        }
    } else {
        if (playerSelection == "Scissor") {
            return "You win, Scissors beats Paper";
        } else {
            return "You lose, Scissors beats Paper";
        }
    }
    
}

console.log(playRound("Paper", computerPlay()))