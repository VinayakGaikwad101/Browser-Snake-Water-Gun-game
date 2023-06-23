let gameArray = ["snake", "water", "gun"];
const computerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  return gameArray[randomNum];
};
// func computerChoice returns snake, water or gun
let score = 0;
let turnCount = 0;
let gameStart = confirm("Do you want to play snake, water gun? ");
if (gameStart) {
  while (score < 10) {
    let userInput = prompt("Enter'snake', 'water', or 'gun' only: ")
      .toLowerCase()
      .trim();
    if (userInput == gameArray[0]) {
      turnCount++;
      if (computerChoice() == gameArray[0]) {
        alert(
          `It's a tie!\nScore:${score}\nYour Choice:${userInput}\nComputer Choice:${computerChoice()}`
        );
      } else if (computerChoice() == gameArray[1]) {
        score++;
        alert(
          `You win, your score is ${score}\nYour Choice:${userInput}\nComputer Choice:${computerChoice()}`
        );
      } else if (computerChoice() == gameArray[2]) {
        alert(
          `You lose, score is ${score}\nYour Choice:${userInput}\nComputer Choice:${computerChoice()}`
        );
      }
    } else if (userInput == gameArray[1]) {
      turnCount++;
      if (computerChoice() == gameArray[0]) {
        alert(
          `You lose, score is ${score}\nYour Choice:${userInput}\nComputer Choice:${computerChoice()}`
        );
      } else if (computerChoice() == gameArray[1]) {
        alert(
          `It's a tie!\nScore:${score}\nYour Choice:${userInput}\nComputer Choice:${computerChoice()}`
        );
      } else if (computerChoice() == gameArray[2]) {
        score++;
        alert(
          `You win, your score is ${score}\nYour Choice:${userInput}\nComputer Choice:${computerChoice()}`
        );
      }
    } else if (userInput == gameArray[2]) {
      turnCount++;
      if (computerChoice() == gameArray[2]) {
        alert(
          `It's a tie!\nScore:${score}\nYour Choice:${userInput}\nComputer Choice:${computerChoice()}`
        );
      } else if (computerChoice() == gameArray[0]) {
        score++;
        alert(
          `You win, your score is ${score}\nYour Choice:${userInput}\nComputer Choice:${computerChoice()}`
        );
      } else if (computerChoice() == gameArray[1]) {
        alert(
          `You lose, score is ${score}\nYour Choice:${userInput}\nComputer Choice:${computerChoice()}`
        );
      }
    } else {
      alert("Wrong Input, try again");
    }
  }
  alert(`Congrats,you win\nYour turns: ${turnCount}\nYour score:${score}`);
  let x = confirm("Do you want to play again?");
  if (x) {
    location.reload();
  }
} else {
  alert("Ok, maybe next time");
}
