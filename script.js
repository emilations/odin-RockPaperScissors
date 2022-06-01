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



console.log(computerPlay());