let playerScore = 0;
let computerScore = 0;

let userName = prompt("Hi! Who are you?");
userName
  ? (document.getElementById(
      "greeting"
    ).innerHTML = `${userName}'s score: ${playerScore}`)
  : (document.getElementById(
      "greeting"
    ).innerHTML = `Player's score: ${playerScore}`);

function plus() {
  playerScore++;
  console.log(playerScore);
}

function Reset() {
  window.location.reload();
}

// plays noise on click I WILL WORK ON THIS LATER

const audio = new Audio("video1.mp3");
audio.play();
