let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

const rps_btns = document.querySelectorAll('.button');
const display = document.querySelector('.results');
const p_s_box = document.querySelector('.player-selections-box');
const c_s_box = document.querySelector('.computer-selections-box');
const p_s_score = document.querySelector('.player-score-box');
const c_s_score = document.querySelector('.computer-score-box');

rps_btns.forEach((button) => {
    button.addEventListener('click', buttonHandler);
});

function buttonHandler(e) {
    playerSelection = e.target.id;
    play(playerSelection, computerPlay());
}

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let random_num = Math.floor(Math.random() * 3);
    return options[random_num];
}

function play(playerSelection, computerSelection) {

    switch (computerSelection) {
        case "rock":
            switch(playerSelection) {
                case "rock":
                    return tie(playerSelection, computerSelection);
                    break;
                case "paper":
                    win(playerSelection, computerSelection);
                    break;
                case "scissors":
                    return lose(playerSelection, computerSelection);
                    break;
            }
            break;
        
        case "paper":
            switch(playerSelection) {
                case "rock":
                    return lose(playerSelection, computerSelection);
                    break;
                case "paper":
                    return tie(playerSelection, computerSelection);
                    break;
                case "scissors":
                    return win(playerSelection, computerSelection);
                    break;
            }
            break;
        
        case "scissors":
            switch(playerSelection) {
                case "rock":
                    return win(playerSelection, computerSelection);
                    break;
                case "paper":
                    return lose(playerSelection, computerSelection);
                    break;
                case "scissors":
                    return tie(playerSelection, computerSelection);
                    break;
            }
            break;
    
    }

}

function win(playerSelection, computerSelection) {
    p_s_box.textContent = `${playerSelection}`;
    c_s_box.textContent = `${computerSelection}`;
    p_s_score.textContent = `${++playerScore}`;
    display.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    showWinner();
}

function lose(playerSelection, computerSelection) {
    p_s_box.textContent = `${playerSelection}`;
    c_s_box.textContent = `${computerSelection}`;
    c_s_score.textContent = `${++computerScore}`;
    display.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
    showWinner();
}

function tie(playerSelection, computerSelection) {
    p_s_box.textContent = `${playerSelection}`;
    c_s_box.textContent = `${computerSelection}`;
    display.textContent = `It is a tie. You both chose ${playerSelection}.`;
}

function showWinner() {
    if (playerScore == 5) {
        display.textContent = "Congratulations, you won! Refresh to play again!";

        rps_btns.forEach((button) => {
            button.removeEventListener('click', buttonHandler);
        });
    }

    else if (computerScore == 5) {
        display.textContent = "Sorry, you lost! Refresh to play again!";

        rps_btns.forEach((button) => {
            button.removeEventListener('click', buttonHandler);
        });
    }
}