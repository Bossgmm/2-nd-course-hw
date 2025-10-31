function startQuiz() {
  // Массив вопросов и правильных ответов
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2, // номер правильного ответа
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];

  let count = 0;
  let = userAnswer = Number(
    prompt(`Вопрос №1: \n${quiz[0]["question"]}\n${quiz[0]["options"]}`)
  );

  if (quiz[0]["correctAnswer"] === userAnswer) {
    count++;
  }

  userAnswer = Number(
    prompt(`Вопрос №2: \n${quiz[1]["question"]}\n${quiz[1]["options"]}`)
  );

  if (quiz[1]["correctAnswer"] === userAnswer) {
    count++;
  }

  userAnswer = Number(
    prompt(`Вопрос №3: \n${quiz[2]["question"]}\n${quiz[2]["options"]}`)
  );

  if (quiz[2]["correctAnswer"] === userAnswer) {
    count++;
  }

  alert(`Правильных ответов ${count}`);
}
