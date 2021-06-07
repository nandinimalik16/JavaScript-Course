"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highscore = 0;

const corfunc = function (sc, num, col, wid) {
  document.querySelector(".score").textContent = sc;
  document.querySelector(".number").textContent = num;
  document.querySelector("body").style.backgroundColor = col;
  document.querySelector(".number").style.width = wid;
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const elseBlock = function () {
  displayMessage("You Lost the Game");
  document.querySelector(".score").textContent = 0;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //When no number id detected
  if (!guess) {
    if (score > 1) {
      displayMessage("No Number");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      elseBlock();
    }
    //when correct number is detected
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    corfunc(score, secretNumber, "#60b347", "30rem");
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  }
  //when detected number is either greater or smaller than the correct number
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      elseBlock();
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".highscore").textContent = highscore;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing.....");
  corfunc(score, "?", "black", "15rem");
  document.querySelector(".guess").value = "";
});
