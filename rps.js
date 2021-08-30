let playerScore = 0;
let cpuScore = 0;


function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let random_num = Math.floor(Math.random() * 3);
    return options[random_num];
}

function play(playerSelection, computerSelection) {
    //let playerSelection = playerSelection.toLowerCase();

    switch (computerSelection) {
        case "rock":
            switch(playerSelection) {
                case "rock":
                    return tie(playerSelection);
                    break;
                case "paper":
                    playerScore++;
                    win(playerSelection, computerSelection);
                    break;
                case "scissors":
                    cpuScore++;
                    return lose(playerSelection, computerSelection);
                    break;
            }
            break;
        
        case "paper":
            switch(playerSelection) {
                case "rock":
                    cpuScore++;
                    return lose(playerSelection, computerSelection);
                    break;
                case "paper":
                    return tie(playerSelection);
                    break;
                case "scissors":
                    playerScore++;
                    return win(playerSelection, computerSelection);
                    break;
            }
            break;
        
        case "scissors":
            switch(playerSelection) {
                case "rock":
                    playerScore++;
                    return win(playerSelection, computerSelection);
                    break;
                case "paper":
                    cpuScore++;
                    return lose(playerSelection, computerSelection);
                    break;
                case "scissors":
                    return tie(playerSelection);
                    break;
            }
            break;
    
    }
}

function win(playerSelection, computerSelection) {
    console.log(`You win, ${playerSelection} beats ${computerSelection}`);
}

function lose(playerSelection, computerSelection) {
    console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
}

function tie(playerSelection) {
    console.log(`It is a tie. You both chose ${playerSelection}.`);
}

function game() {
 
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors.");

        play(playerSelection, computerPlay());
        console.log(`Current score: Player ${playerScore}, Computer ${cpuScore}`);
    }

    if (playerScore > cpuScore) {
        console.log(`Player wins! The score is ${playerScore} to ${cpuScore}.`);
    }

    else if (cpuScore > playerScore) {
        console.log(`Computer wins! The score is ${cpuScore} to ${playerScore}.`);
    }

    else {
        console.log(`Player and computer have tied. The score is ${playerScore}.`);
    }

    playerScore = 0;
    cpuScore = 0;

}