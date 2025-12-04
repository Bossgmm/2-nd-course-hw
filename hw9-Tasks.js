// Задание 1
const text1 = document.querySelector("#text1");
const button1 = document.querySelector("#button1");

button1.addEventListener("click", function () {
  if (text1.style.display === "none") {
    text1.style.display = "block";
    button1.textContent = "Скрыть";
  } else {
    text1.style.display = "none";
    button1.textContent = "Показать";
  }
});

// Задание 2
const text2 = document.querySelector("#text2");
const button2 = document.querySelector("#button2");

button2.addEventListener("click", function () {
  text2.style.color = "blue";
});

// Задание 3
const text3 = document.querySelector("#text3");
const button3 = document.querySelector("#button3");

button3.addEventListener("click", function () {
  text3.textContent = "Привет, мир!";
});

// Задание 4
const allDescriptions = document.querySelectorAll(".description");
const button4 = document.querySelector("#button4");

button4.addEventListener("click", function () {
  allDescriptions.forEach((description) => {
    description.textContent = "Измененный текст";
  });
});

// Задание 5
const allDescriptions5 = document.querySelectorAll(".description5");
const button5 = document.querySelector("#button5");

button5.addEventListener("click", function () {
  allDescriptions5.forEach((description) => {
    description.textContent = "Новый текст";
  });
});

// Задание 6

const button6 = document.querySelector("#button6");

button6.addEventListener("click", function () {
  const newP = document.createElement("p");
  newP.textContent = "Новый абзац";

  document.body.appendChild(newP);
});

// Задание 7
const button7 = document.querySelector("#button7");

button7.addEventListener("click", function () {
  const paragraph = document.querySelector(".description7");
  paragraph.remove();
});
