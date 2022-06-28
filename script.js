"use strict";

let computerScore = 0;
let playerScore = 0;
const totalOfGames = 5;

//Obtaining computer's choice:
const computerPlay = function () {
  let options = ["Rock", "Paper", "Scissors"];
  let randomOption = Math.floor(Math.random() * 3);
  let computerChoice = options[randomOption];
  return computerChoice;
};

//Obtaining player's choice:
const playerPlay = function () {
  const chooseOption = prompt(`Rock, Paper or Scissors?`);
  const capitalizeOption =
    chooseOption[0].toUpperCase() + chooseOption.slice(1).toLowerCase();
  return capitalizeOption;
};

//With this function you play a Round of 5 games in total:
const playRound = function () {
  for (let i = 0; i < totalOfGames; i++) {
    const playerSelection = playerPlay();
    console.log(`You chose ${playerSelection}`);

    const computerSelection = computerPlay();
    console.log(`Computer chose ${computerSelection}`);

    //Display message when the player loses:
    if (
      (playerSelection === "Rock" && computerSelection === "Paper") ||
      (playerSelection === "Paper" && computerSelection === "Scissors") ||
      (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
      computerScore++;
      console.log(
        `ROUND ${
          i + 1
        }: You lose! ${computerSelection} beats ${playerSelection} `
      );

      //Display message when the player loses:
    } else if (playerSelection === computerSelection) {
      console.log(`ROUND ${i + 1}: Tie game!`);

      //Display message when the player wins:
    } else {
      playerScore++;
      console.log(
        `ROUND ${
          i + 1
        }: You win! XDDD ${playerSelection} beats ${computerSelection} !!!`
      );
    }
  }

  if (playerScore < computerScore) {
    console.log(`You lose :( ${playerScore} to ${computerScore}`);
  } else if (computerScore === playerScore) {
    console.log(`Tie game! :O ${playerScore} to ${computerScore}`);
  } else {
    console.log(`You WON! xDDDDD ${playerScore} to ${computerScore}`);
  }
};

const game = function () {
  playRound();
};

playRound();
