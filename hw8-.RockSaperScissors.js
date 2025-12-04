const elem = ["камень", "ножницы", "бумага"];
function startRockSaperScissors() {
  let userAnswer = prompt(`Выберите: ${elem}`).toLowerCase();
  do {
    userAnswer = prompt(`Выберите: ${elem.join(", ")}`).toLowerCase();
    if (!elem.includes(userAnswer)) {
      alert(
        "Ошибка! Пожалуйста, введите одно из следующих значений: камень, ножницы, бумага."
      );
    }
  } while (!elem.includes(userAnswer));

  let computerAnswer = randomComputerAnswer(elem);

  console.log(userAnswer);
  console.log(computerAnswer);

  if (userAnswer === computerAnswer) {
    result = "Ничья!";
  } else if (
    (userAnswer === "камень" && computerAnswer === "ножницы") ||
    (userAnswer === "ножницы" && computerAnswer === "бумага") ||
    (userAnswer === "бумага" && computerAnswer === "камень")
  ) {
    alert(`Вы выиграли! \nКомпьютер = ${computerAnswer} \n Вы = ${userAnswer}`);
  } else {
    alert(
      `Вы проиграли!! \nКомпьютер = ${computerAnswer} \n Вы = ${userAnswer}`
    );
  }
}

function randomComputerAnswer(elem) {
  const ramdomElem = Math.floor(Math.random() * elem.length);
  return elem[ramdomElem];
}
