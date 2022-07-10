"use strict";
const btns = document.querySelectorAll(".btn");
const humanScore = document.querySelector(".human__score");
const machineScore = document.querySelector(".computer__score");
const result = document.querySelector(".result");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const restart = document.querySelector(".restart");
const message = document.querySelector(".message");

//Starting conditions
let computerScore;
let playerScore;

function init() {
  closeModal();
  playerScore = 0;
  computerScore = 0;
  humanScore.textContent = "0";
  machineScore.textContent = "0";
}

//Obtaining computer's choice:
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomOption = options[Math.floor(Math.random() * 3)];

  switch (randomOption) {
    case "rock":
      document.getElementById(randomOption).textContent = "✊";
      break;
    case "paper":
      document.getElementById(randomOption).textContent = "✋";
      break;
    case "scissors":
      document.getElementById(randomOption).textContent = "✌";
      break;
  }
  return randomOption;
}

function defaultOptions() {
  document.getElementById("rock").textContent = "?";
  document.getElementById("paper").textContent = "?";
  document.getElementById("scissors").textContent = "?";
}

function playRound(playerSelection, computerSelection) {
  //Display message when the player loses:
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    machineScore.textContent = computerScore;
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;

    //Tie game
  } else if (playerSelection === computerSelection) {
    result.textContent = `Tie game!`;

    //Display message when the player wins:
  } else {
    playerScore++;
    humanScore.textContent = playerScore;
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}!!!`;
  }

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) message.textContent = "YOU WIN!";
    if (computerScore === 5) message.textContent = "You lose...";
    openModal();
  }
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

restart.addEventListener("click", init);

btns.forEach(btn =>
  btn.addEventListener("click", e => {
    console.log(e.target.className);
    defaultOptions();
    const computerSelection = computerPlay();
    const playerSelection = e.target.className;
    playRound(playerSelection, computerSelection);
  })
);

init();
