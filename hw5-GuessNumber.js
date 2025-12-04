function generateNumber() {
  let numb = Math.round(Math.random() * 101);
  return numb;
}

function startGuessGame() {
  let guessNumb = generateNumber();
  console.log(guessNumb);
  let userNumb = null;

  while (guessNumb != userNumb) {
    userNumb = Number(prompt("Угадай число от 0 до 100:"));

    if (guessNumb > userNumb) {
      alert("Больше");
    } else if (guessNumb < userNumb) {
      alert("Мнеьше");
    } else {
      alert("Поздравляю !!!");
      break;
    }
  }
}
