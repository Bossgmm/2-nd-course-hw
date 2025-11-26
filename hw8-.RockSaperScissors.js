const elem = ["камень", "ножницы", "бумага"];
function startRockSaperScissors () {
    let userAnswer = prompt(`Выберите: ${elem}`).toLowerCase();
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
        alert("Вы выиграли!");
    } else {
        alert("Вы проиграли!");
    }

}

function randomComputerAnswer(elem){
    const ramdomElem = Math.floor(Math.random() * elem.length);
    return elem[ramdomElem];
}