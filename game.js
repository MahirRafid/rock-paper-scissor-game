function getComputerChoice() {
  let a = Math.floor(Math.random() * 3 + 1);
  if (a == 1) return "ROCK";
  else if (a == 2) return "PAPER";
  else return "SCISSORS";
}

function playRound(userChoice, computerChoice) {
  userChoice = userChoice.toUpperCase();
  if (userChoice == "ROCK") {
    if (computerChoice == "ROCK") {
      console.log("TIE. Please try again.");
      return 0;
    } else if (computerChoice == "PAPER") {
      console.log("You LOSE. Paper beats rock.");
      return "lose";
    } else {
      console.log("You WIN. Rock beats Scissors.");
      return "win";
    }
  } else if (userChoice == "PAPER") {
    if (computerChoice == "PAPER") {
      console.log("TIE. Please try again.");
      return 0;
    } else if (computerChoice == "ROCK") {
      console.log("You WIN. Paper beats rock.");
      return "win";
    } else {
      console.log("You LOSE. Scissors beat paper");
      return "lose";
    }
  } else if (userChoice == "SCISSORS") {
    if (computerChoice == "SCISSORS") {
      console.log("TIE. Please try again.");
      return 0;
    } else if (computerChoice == "ROCK") {
      console.log("You LOSE. Rock beats scissors.");
      return "lose";
    } else {
      console.log("You WIN. Paper beat scissors");
      return "win";
    }
  } else {
    alert("Please check your spelling.");
    return "spellError";
  }
}

function game() {
  let userScr = 0,
    cmpScr = 0;
  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("Rock, paper or Scissors ? :");
    let computerChoice = getComputerChoice();
    let ans = playRound(userChoice, computerChoice);
    if (ans == "win") userScr++;
    else if (ans == "lose") cmpScr++;
    else if (ans == "spellError") i--;
  }

  if (userScr > cmpScr) {
    console.log("WOHOO!! YOU WON!!!");
  } else if (cmpScr > userScr) {
    console.log("SORRY! YOU LOST :(");
  } else {
    console.log("MATCH TIE. PLAY AGAIN.");
  }
}

game();
