function getComputerChoice() {
  let a = Math.floor(Math.random() * 3 + 1);
  if (a == 1) return "ROCK";
  else if (a == 2) return "PAPER";
  else return "SCISSORS";
}

function playRound(userChoice, computerChoice) {
  userChoice = userChoice.toUpperCase();
  let result = document.querySelector(".result");
  let desc = document.querySelector(".desc");
  if (userChoice == "ROCK") {
    if (computerChoice == "ROCK") {
      result.textContent = "It's TIE!";
      desc.textContent = "Rock ties with rock";
      return 0;
    } else if (computerChoice == "PAPER") {
      result.textContent = "You Lose :(";
      desc.textContent = "Paper beats Rock";
      return "lose";
    } else {
      result.textContent = "You Win :)";
      desc.textContent = "Rock beats Scissors";
      return "win";
    }
  } else if (userChoice == "PAPER") {
    if (computerChoice == "PAPER") {
      result.textContent = "It's TIE!";
      desc.textContent = "Rock ties with rock";
      return 0;
    } else if (computerChoice == "ROCK") {
      result.textContent = "You Win :)";
      desc.textContent = "Paper beats rock";
      return "win";
    } else {
      result.textContent = "You Lose :(";
      desc.textContent = "Scissors beat paper";
      return "lose";
    }
  } else if (userChoice == "SCISSORS") {
    if (computerChoice == "SCISSORS") {
      result.textContent = "It's TIE!";
      desc.textContent = "Scissors tie with scissors";
      return 0;
    } else if (computerChoice == "ROCK") {
      result.textContent = "You Lose :(";
      desc.textContent = "Rock beats Scissors";
      return "lose";
    } else {
      result.textContent = "You Win :)";
      desc.textContent = "Scissors beat paper";
      return "win";
    }
  }
}

function game() {
  let userScr = 0,
    cmpScr = 0;
  let rock = document.querySelector(".rock");
  let paper = document.querySelector(".paper");
  let scissors = document.querySelector(".scissor");

  rock.addEventListener("click", () => {
    let ans = playRound("rock", getComputerChoice());
    if (ans == "win") userScr++;
    else if (ans == "lose") cmpScr++;
  });

  paper.addEventListener("click", () => {
    let ans = playRound("rock", getComputerChoice());
    if (ans == "win") userScr++;
    else if (ans == "lose") cmpScr++;
  });

  scissors.addEventListener("click", () => {
    let ans = playRound("rock", getComputerChoice());
    if (ans == "win") userScr++;
    else if (ans == "lose") cmpScr++;
  });

  if (userScr == 5) {
    alert("WOHOO!! YOU WON!!!");
    return;
  } else if (cmpScr == 5) {
    alert("SORRY! YOU LOST :(");
    return;
  }
}

game();
