let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 10;
let gameStarted = false;

function startGame() {
   
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    gameStarted = true;

    
    document.getElementById('player-score').textContent = `Your Score: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`;
    document.getElementById('rounds').textContent = `Rounds Played: ${roundsPlayed} / ${maxRounds}`;
    document.getElementById('result').textContent = "";
    document.getElementById('start-btn').textContent = "Restart Game";

   
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = false);
}

function play(playerChoice) {
    if (!gameStarted) {
        document.getElementById('result').textContent = "Please start a new game!";
        return;
    }

    if (roundsPlayed >= maxRounds) {
        document.getElementById('result').textContent = "Game Over! You've played all rounds.";
        return;
    }

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';
    if (playerChoice === computerChoice) {
        result = `It's a tie! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    roundsPlayed++;
    updateScore(result);
}

function updateScore(result) {
    document.getElementById('result').textContent = result;
    document.getElementById('player-score').textContent = `Your Score: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`;
    document.getElementById('rounds').textContent = `Rounds Played: ${roundsPlayed} / ${maxRounds}`;

    if (roundsPlayed >= maxRounds) {
        document.getElementById('result').textContent = `Game Over! Final Scores: You - ${playerScore}, Computer - ${computerScore}`;
        document.getElementById('start-btn').textContent = "Start New Game";
    }
}
