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
  let userImg = document.querySelector(".userImg");
  let cmpImg = document.querySelector(".cmpImg");
  if (userChoice == "ROCK") {
    if (computerChoice == "ROCK") {
      userImg.innerHTML = "<img src='images/rock.png'>";
      cmpImg.innerHTML = "<img src='images/rock.png'>";
      result.textContent = "It's TIE!";
      desc.textContent = "Rock ties with rock";
      return 0;
    } else if (computerChoice == "PAPER") {
      userImg.innerHTML = "<img src='images/rock.png'>";
      cmpImg.innerHTML = "<img src='images/paper.png'>";
      result.textContent = "You Lose :(";
      desc.textContent = "Paper beats Rock";
      return "lose";
    } else {
      userImg.innerHTML = "<img src='images/rock.png'>";
      cmpImg.innerHTML = "<img src='images/scissors.png'>";
      result.textContent = "You Win :)";
      desc.textContent = "Rock beats Scissors";
      return "win";
    }
  } else if (userChoice == "PAPER") {
    if (computerChoice == "PAPER") {
      userImg.innerHTML = "<img src='images/paper.png'>";
      cmpImg.innerHTML = "<img src='images/paper.png'>";
      result.textContent = "It's TIE!";
      desc.textContent = "Rock ties with rock";
      return 0;
    } else if (computerChoice == "ROCK") {
      userImg.innerHTML = "<img src='images/paper.png'>";
      cmpImg.innerHTML = "<img src='images/rock.png'>";
      result.textContent = "You Win :)";
      desc.textContent = "Paper beats rock";
      return "win";
    } else {
      userImg.innerHTML = "<img src='images/paper.png'>";
      cmpImg.innerHTML = "<img src='images/scissors.png'>";
      result.textContent = "You Lose :(";
      desc.textContent = "Scissors beat paper";
      return "lose";
    }
  } else if (userChoice == "SCISSORS") {
    if (computerChoice == "SCISSORS") {
      userImg.innerHTML = "<img src='images/scissors.png'>";
      cmpImg.innerHTML = "<img src='images/scissors.png'>";
      result.textContent = "It's TIE!";
      desc.textContent = "Scissors tie with scissors";
      return 0;
    } else if (computerChoice == "ROCK") {
      userImg.innerHTML = "<img src='images/scissors.png'>";
      cmpImg.innerHTML = "<img src='images/rock.png'>";
      result.textContent = "You Lose :(";
      desc.textContent = "Rock beats Scissors";
      return "lose";
    } else {
      userImg.innerHTML = "<img src='images/scissors.png'>";
      cmpImg.innerHTML = "<img src='images/paper.png'>";
      result.textContent = "You Win :)";
      desc.textContent = "Scissors beat paper";
      return "win";
    }
  }
}

let userScr = 0,
  cmpScr = 0;

function updateScore() {
  let userScrBtn = document.querySelector(".userScr");
  let cmpScrBtn = document.querySelector(".cmpScr");
  let ans = playRound("rock", getComputerChoice());
  if (ans == "win") {
    ++userScr;
    userScrBtn.textContent = `${userScr}`;
  } else if (ans == "lose") {
    ++cmpScr;
    cmpScrBtn.textContent = `${cmpScr}`;
  }

  if (userScr == 5) {
    alert("WOHOO!! YOU WON!!!");
    return;
  } else if (cmpScr == 5) {
    alert("SORRY! YOU LOST :(");
    return;
  }
}

function game() {
  let rock = document.querySelector(".rock");
  let paper = document.querySelector(".paper");
  let scissors = document.querySelector(".scissor");

  rock.addEventListener("click", updateScore);
  paper.addEventListener("click", updateScore);
  scissors.addEventListener("click", updateScore);
}

game();
