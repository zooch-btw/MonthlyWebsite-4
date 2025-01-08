let playerScore = 0;
let computerScore = 0;

let userName = prompt("Hi! Who are you?");
userName
  ? (document.getElementById(
      "greeting"
    ).innerHTML = `${userName} score: ${playerScore}`)
  : (document.getElementById(
      "greeting"
    ).innerHTML = `Player score: ${playerScore}`);

function plus() {
  playerScore++;
  console.log(playerScore);
}

function Reset() {
  window.location.reload();
}
