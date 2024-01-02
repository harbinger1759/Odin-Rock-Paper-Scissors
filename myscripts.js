// When user inputs Rock, paper, or scissor
// Computer randomly generates Rock, paper, or scissor
// Determine winner by comparison of user and computer input
// Print the winner to the console

// Computer randonly generates Rock, paper, or scissor
const options = ["rock", "paper", "scissors"];

let getComputerChoice = () => {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
};

// Determine winner
let checkWinner = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "papers" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
};

// Play round function
let playRound = (playerSelection, computerSelection) => {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It is a Tie!";
  } else if (result == "Player") {
    return `You Win! Your ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! Computer's ${computerSelection} beats your ${playerSelection}`;
  }
};

// Get user input
let getUerInput = () => {
  let validatedInput = false;
  while (validatedInput == false) {
    const userInput = prompt("Rock, Paper, or Scissors?");
    if (userInput == null) {
      continue;
    }
    const userInputInLower = userInput.toLowerCase();
    if (options.includes(userInputInLower)) {
      validatedInput = true;
      return userInputInLower;
    }
  }
};

// loop the game
let game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getUerInput();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("========");
    if (checkWinner(playerSelection, computerScore) == "Player") {
      playerScore++;
    } else if (checkWinner(playerSelection, computerScore) == "Computer") {
      computerScore++;
    }
  }
  console.log("Game Over!");
  if (playerScore > computerScore) {
    console.log("Player is the winner!");
  } else if (playerScore < computerScore) {
    console.log("Computer is the winner!");
  } else {
    console.log("We have a Tie!");
  }
};

game();
