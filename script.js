let playerScore = 0;
let computerScore = 0;
let finalmsg = document.getElementById("endtxt");

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

/*CodeAcademy 's code for the Rock, Paper, Scissors game*/

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log("This game is a tie!");
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Sorry, computer won!");
    } else {
      console.log("Congratualtions, you won!");
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, computer won!";
    } else {
      return "Congratualtions, you won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, computer won!";
    } else {
      return "Congratualtions, you won!";
    }
  }

  if (userChoice === "bomb") {
    return "Congratualtions, you won!";
  }
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  //update the HTML to how computer choice
  //udate HTML to show userChoice
  determineWinner(userChoice, computerChoice);
};
