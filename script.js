"use strict";
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const secret = document.querySelector(".secret");
const messageSelec = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const body = document.querySelector("body");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreVar = 20;
let highscoreVar = 0;

const displayMessage = function (message) {
  messageSelec.textContent = message;
};

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);
  if (guess === secretNumber) {
    displayMessage("correct number");
    secret.textContent = guess;
    if (scoreVar > highscoreVar) {
      highscoreVar = scoreVar;
      highscore.textContent = highscoreVar;
    }
    body.style.background = "#60b347";
    secret.style.width = "200px";
  } else if (!guess) {
    displayMessage("no number");
  } else if (guess !== secretNumber) {
    if (scoreVar > 1) {
      displayMessage(guess > secretNumber ? "too high" : "too low");
      scoreVar--;
      score.textContent = scoreVar;
    } else {
      displayMessage("you loose");
      score.textContent = "0";
    }
  }
});

again.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.background = "#222";
  secret.style.width = "130px";
  secret.textContent = "?";
  scoreVar = 20;
  score.textContent = scoreVar;
  displayMessage("start guessing...");
  document.querySelector(".input").value = " ";
});
