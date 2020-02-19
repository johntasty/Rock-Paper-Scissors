const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => { 
        playGame(e.target.id);
    });
});
const text = document.querySelector('#text');
const choice = document.getElementById('choiceText');
let playerScore = 0;
let computerScore = 0;
let gameIn = 0;
function computerPlay() {
    let play = Math.floor(Math.random() * 2);
    switch (play) {
        case 0:
            return 'rock';

        case 1:
            return 'paper';

        case 2:
            return 'scissors';

        default:
            console.log('Computer broke');
            break;
    }
}


function playRound(playerSelection, computerSelection) {
    choice.textContent = `Player choose ${playerSelection}! Computer choose ${computerSelection}!`;
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return "You win " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return "You lose " + computerSelection + " beats " + playerSelection;
    }
    else {
        return "Its a tie";
    }
}


function playGame(playerSelection) {
    let result = playRound(playerSelection, computerPlay());

    if (gameIn === 0) {
        let resultText = document.createElement('p');
        resultText.id='result';
        text.appendChild(resultText);

        let gameScore = document.createElement('p');
        gameScore.id = 'game-score';
        text.appendChild(gameScore);
    }
    let newResultText = document.getElementById('result');
    let newGameScore = document.getElementById('game-score');
    newResultText.textContent = `> ` + result;
    newGameScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    let computerSelection = computerPlay();
    if (playerScore === 5 || computerScore === 5) {
        let finalResult = (playerScore > computerScore)?'Congrats you win!' :
        'You lose. Better luck next time!';
        newGameScore.textContent = `Player: ${playerScore} | ${computerScore} |${finalResult}`;
        playerScore = 0;
        computerScore = 0;
    }
}


