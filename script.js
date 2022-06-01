for (let i =  0; i < 5; i++) {
    let playerSelection;
    while(!playerSelection) {
        playerSelection = prompt("Enter your selection: ");
    }
    console.log(playerSelection)
    playerSelection = currateSelection(playerSelection);
    break;
}

// This randomizes the hand of the computer
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

// This simulates one round of User vs Computer
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
    } else if ((playerSelection+computerSelection) == "RockScissors" || (playerSelection+computerSelection) == "ScissorsRock") {
        if (playerSelection == "Rock") {
            return "You win, Rock beats Scissors";
        } else {
            return "You lose, Rock beats Scissors"
        }
    } else {
        if (playerSelection == "Scissors") {
            return "You win, Scissors beats Paper";
        } else {
            return "You lose, Scissors beats Paper";
        }
    }
    
}

// Lower case the user input
function currateSelection(playerSelection) {
    selectionLowerCase = playerSelection.toLowerCase().split("");
    selectionLowerCase[0] = selectionLowerCase[0].toUpperCase();
    selectionLowerCase = selectionLowerCase.join("");
    console.log(selectionLowerCase);
}