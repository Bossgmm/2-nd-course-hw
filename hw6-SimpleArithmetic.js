let firstNumber;
let secondNumber;
let correctAnswer;
let userAnswer;

function startSimpleArithmetic() {
  firstNumber = Math.floor(Math.random() * 10);
  secondNumber = 0;
  randomOperator = randomOperation();

  while (randomOperator === "/" && secondNumber === 0) {
    secondNumber = Math.floor(Math.random() * 10);
  }
  switch (randomOperator) {
    case "+":
      correctAnswer = firstNumber + secondNumber;
      break;
    case "-":
      correctAnswer = firstNumber - secondNumber;
      break;
    case "*":
      correctAnswer = firstNumber * secondNumber;
      break;
    case "/":
      correctAnswer = firstNumber / secondNumber;
      break;
  }

  correctAnswer = parseFloat(correctAnswer.toFixed(2));
  userAnswer = Number(
    prompt(`Решите задачу: ${firstNumber} ${randomOperator} ${secondNumber}`)
  );
  if (correctAnswer === userAnswer) {
    alert("Верно");
  } else {
    alert("Не верно");
  }
}

function randomOperation() {
  const operators = ["+", "-", "*", "/"];
  let randomOperator = Math.floor(Math.random() * operators.length);
  return operators[randomOperator];
}
