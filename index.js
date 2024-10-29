console.log('Hello World');
let winScore = 0;
let loseScore = 0;
let tiescore = 0;
let currentRoundNumber = 0;
const totalRounds = prompt('Enter the number of rounds you want to play');


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
    tiescore++;
  }
  else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    winScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  }
  else {
    loseScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

// Testing one round
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

function playGame() {
  winScore = 0; 
  loseScore = 0;
  tiescore = 0;

  for (let i = 0; i < totalRounds; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

if (winScore > loseScore) {
  document.getElementById(
    "result"
  ).innerHTML = `<span style="color: green;">Congratulations! You won the game with a score of ${winScore} wins, ${loseScore} loses, and ${tiescore} ties</span>`;
} else if (winScore < loseScore) {
  document.getElementById(
    "result"
  ).innerHTML = `<span style="color: red;">Sorry! You lost the game with a score of ${winScore} wins, ${loseScore} loses, and ${tiescore} ties</span>`;
} else {
  document.getElementById(
    "result"
  ).innerHTML = `<span style="color: blue;">It's a tie game with a score of ${winScore} wins, ${loseScore} loses, and ${tiescore} ties</span>`;
}
    
    //   document.getElementById("result").innerHTML = 
}


playGame();

