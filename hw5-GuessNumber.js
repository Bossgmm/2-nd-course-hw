function generateNumber() {
  let numb = Math.round(Math.random() * 101);
  return numb;
}

function startGuessGame() {
  let guessNumb = generateNumber();
  console.log(guessNumb);
  let userNumb = null;

  while (guessNumb != userNumb) {
    let userInput = prompt("Угадай число от 0 до 100:");
    
    // Проверка, является ли введённое значение числом
    if (!userInput || isNaN(userInput)) {
      alert("Ошибка: пожалуйста, введите корректное число!");
      continue;
    }

    userNumb = Number(userInput);

    if (guessNumb > userNumb) {
      alert("Больше");
    } else if (guessNumb < userNumb) {
      alert("Меньше");
    } else {
      alert("Поздравляю !!!");
      break;
    }
  }
}
