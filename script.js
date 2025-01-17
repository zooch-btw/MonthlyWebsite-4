let playerScore = 0;
let computerScore = 0;
let finalmsg = document.getElementById("endtxt");
document.getElementById("battle").innerHTML = "Who will come out on top?";
let playerChoice;
let userName = prompt("Hi! Who are you?");
let url;
let url2;
let roundCount = 0;

window.onload = function startUp() {
  userName ? (userName = userName) : (userName = "Player");
  document.getElementById("greeting").textContent = `${userName}'s score: 0`;
};

function UsN() {
  switch (playerChoice) {
    case "rock":
      url = "its still MASSIVE.jpg";
      break;
    case "paper":
      url = "jarvis clip that.jpg";
      break;
    case "scissors":
      url = "leking.jpg";
      break;
  }
  userName
    ? (document.getElementById(
        "greeting"
      ).innerHTML = `${userName}'s score: ${playerScore}`)
    : (document.getElementById(
        "greeting"
      ).innerHTML = `Player's score: ${playerScore}`);

  userName
    ? (document.getElementById(
        "game"
      ).innerHTML = `${userName} picked:  <img src="${url}">`)
    : (document.getElementById(
        "game"
      ).innerHTML = `Player picked: <img src="${url}">`);
}

function Playerscoreinc() {
  playerScore++;
  console.log(playerScore);
}
function Computerscoreinc() {
  computerScore++;
  document.getElementById(
    "greeting2"
  ).textContent = `Computer score: ${computerScore}`;
  console.log(computerScore);
}

function Reset() {
  window.location.reload();
}

/*CodeAcademy 's code for the Rock, Paper, Scissors game*/

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      url2 = "its still MASSIVE.jpg";
      document.getElementById(
        "game2"
      ).innerHTML = `The computer picked: <img src='${url2}'>`;
      return "rock";
    case 1:
      url2 = "jarvis clip that.jpg";
      document.getElementById(
        "game2"
      ).innerHTML = `The computer picked: <img src='${url2}'>`;
      return "paper";
    case 2:
      url2 = "leking.jpg";
      document.getElementById(
        "game2"
      ).innerHTML = `The computer picked: <img src='${url2}'>`;
      return "scissors";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  roundCount++;
  UsN();
  if (userChoice === computerChoice) {
    console.log("This game is a tie!");
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Sorry, computer won!");
      Computerscoreinc();
    } else {
      console.log("Congratualtions, you won!");
      Playerscoreinc();
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      Computerscoreinc();
      return "Sorry, computer won!";
    } else {
      Playerscoreinc();
      return "Congratualtions, you won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      Computerscoreinc();
      return "Sorry, computer won!";
    } else {
      Playerscoreinc();
      return "Congratulations, you won!";
    }
  }
};

const playGame = (userChoice) => {
  if (roundCount <= 5) {
    const computerChoice = getComputerChoice();
    playerChoice = userChoice;
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    //update the HTML to show computer choice
    //update HTML to show userChoice
    console.log(determineWinner(userChoice, computerChoice));
  } else {
    if (playerScore > computerScore) {
      //player won
      document.getElementById("battle").innerHTML = "Good Job!";
    } else if (computerScore > playerScore) {
      //computer won
      document.getElementById("battle").innerHTML = "Skill Issue 💀";
    } else {
      //its a tie!
      document.getElementById("battle").innerHTML = "No winner!";
    }
  }
};
