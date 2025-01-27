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
  document.getElementById("greeting").innerHTML = `${userName}'s<br>score: 0`;
  userName
    ? (document.getElementById("game").innerHTML = `${userName}<br>picked:`)
    : (document.getElementById("game").innerHTML = `Player<br>picked:`);

  document.getElementById("round").innerHTML = `Round: ${roundCount}`;
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
      ).innerHTML = `${userName}'s<br>score: ${playerScore}`)
    : (document.getElementById(
        "greeting"
      ).innerHTML = `Player's<br>score: ${playerScore}`);

  userName
    ? (document.getElementById(
        "game"
      ).innerHTML = `${userName}<br>picked: <br><img src="${url}">`)
    : (document.getElementById(
        "game"
      ).innerHTML = `Player<br>picked: <br><img src="${url}">`);
}

function Playerscoreinc() {
  playerScore++;
  document.getElementById(
    "greeting"
  ).innerHTML = `${userName}'s<br>score: ${playerScore}`;
}
function Computerscoreinc() {
  computerScore++;
  document.getElementById(
    "greeting2"
  ).innerHTML = `Computer<br>score: ${computerScore}`;
}

function Reset() {
  window.location.reload();
}

// CodeAcademy 's code for the Rock, Paper, Scissors game

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      url2 = "its still MASSIVE.jpg";
      document.getElementById(
        "game2"
      ).innerHTML = `Computer<br>picked:<br> <img src='${url2}'>`;
      return "rock";
    case 1:
      url2 = "jarvis clip that.jpg";
      document.getElementById(
        "game2"
      ).innerHTML = `Computer<br>picked:<br> <img src='${url2}'>`;
      return "paper";
    case 2:
      url2 = "leking.jpg";
      document.getElementById(
        "game2"
      ).innerHTML = `Computer<br>picked:<br> <img src='${url2}'>`;
      return "scissors";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  roundCount++;
  document.getElementById("round").innerHTML = `Round: ${roundCount}`;
  UsN();
  if (userChoice == computerChoice) {
    document.getElementById("battle").innerHTML = "Tie!";
  }
  if (userChoice == "rock") {
    if (computerChoice == "paper") {
      document.getElementById("battle").innerHTML = "Computer wins this one!";
      Computerscoreinc();
    } else if (computerChoice == "scissors") {
      document.getElementById(
        "battle"
      ).innerHTML = `${userName} wins this one!`;
      Playerscoreinc();
    }
  }
  if (userChoice == "paper") {
    if (computerChoice === "scissors") {
      document.getElementById("battle").innerHTML = "Computer wins this one!";
      Computerscoreinc();
    } else if (computerChoice == "rock") {
      document.getElementById(
        "battle"
      ).innerHTML = `${userName} wins this one!`;
      Playerscoreinc();
    }
  }
  if (userChoice == "scissors") {
    if (computerChoice === "rock") {
      Computerscoreinc();
      document.getElementById("battle").innerHTML = "Computer wins this one!";
    } else if (computerChoice == "paper") {
      document.getElementById(
        "battle"
      ).innerHTML = `${userName} wins this one!`;
      Playerscoreinc();
    }
  }
};

const playGame = (userChoice) => {
  if (roundCount < 5) {
    const computerChoice = getComputerChoice();
    playerChoice = userChoice;
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    //update the HTML to show computer choice
    //update HTML to show userChoice
    console.log(
      determineWinner(userChoice.toLowerCase(), computerChoice.toLowerCase())
    );
  } else {
    if (playerScore > computerScore) {
      //player won
      document.getElementById("battle").innerHTML = "Nice!";
    } else if (computerScore > playerScore) {
      //computer won
      document.getElementById("battle").innerHTML = "Skill Issue 💀";
    } else {
      //its a tie!
      document.getElementById("battle").innerHTML = "No winner!";
    }
  }
};
