let computerScore = 0;
let playerScore = 0;
let gameCounter = 0;

const getComputerChoice = () => {
  let rnd = Math.ceil((Math.random() * 3));
  let res;
  if(rnd === 3){
    res = 'rock';
  } else if (rnd === 2) {
    res = 'paper';
  } else {
    res = 'scissors';
  }
  return res;
}

const playRound = (getComputerChoice, playerSelection) => {
  let result;
  if (getComputerChoice === playerSelection) {
    result = "It's a draw!";
  } else if((getComputerChoice === 'rock' && playerSelection === 'scissors') 
    || (getComputerChoice === 'paper' && playerSelection === 'rock') 
    || (getComputerChoice === 'scissors' && playerSelection === 'paper')){
    result = "Computer Wins!";
  } else if ((getComputerChoice === 'scissors' && playerSelection === 'rock')
    || (getComputerChoice === 'rock' && playerSelection === 'paper')
    || (getComputerChoice === 'paper' && playerSelection === 'scissors')){
    result = "Player Wins!";
  } else {
    result = "ERR";
  }
  console.log("Computer played: " + getComputerChoice)
  return result;
}

const game = (input) => {
  let gameResult = playRound(getComputerChoice(), input);

  console.log(gameResult);
  if(gameResult === "Computer Wins!"){
    computerScore++;
  } else if(gameResult === "Player Wins!"){
    playerScore++;
  }

// TODO: Fix indexing
//    if(playerScore < computerScore){
//      alert("Computer Wins!");
//    } else if(playerScore > computerScore){
//      alert("Player Wins!");
//    } else {
//      alert("It's a draw!");
//    }
}

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', () => {
  game('rock');
  display();
});

paperBtn.addEventListener('click', () => {
  game('paper');
  display();
});

scissorsBtn.addEventListener('click', () => {
  game('scissors');
  display();
});

const resultDisplay = document.querySelector('#results');
const playerScoreDisplay = document.createElement('span');
const computerScoreDisplay = document.createElement('span');

function display(){
  playerScoreDisplay.textContent = 'Player Score: ' + playerScore;
  computerScoreDisplay.textContent = 'Computer Score: ' + computerScore;
}
playerScoreDisplay.setAttribute('style', 'display: block;');

resultDisplay.appendChild(playerScoreDisplay);
resultDisplay.appendChild(computerScoreDisplay);