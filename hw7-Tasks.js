// //Задание 1
// let string = "js";
// let toUP = string.toUpperCase();
// console.log(toUP);

// //Задание 2
// function arrStr(arr2, str2) {
//   const str2Low = str2.toLowerCase();

//   return arr2.filter((item) => {
//     return item.toLowerCase().startsWith(str2Low);
//   });
// }

// const arr2 = [
//   "ПРИВЕТ",
//   "программа",
//   "ПрОгРеСС",
//   "праздник",
//   "тест",
//   "Профессия",
// ];
// const str2 = "При";

// const result2 = arrStr(arr2, str2);
// console.log(result2);

// //Задание 3
// const numb3 = 32.58884;
// let numFloor = Math.floor(numb3);
// let numCeil = Math.ceil(numb3);
// let numRound = Math.round(numb3);
// console.log(numFloor);
// console.log(numCeil);
// console.log(numRound);

// //Задание 4
// let min = Math.min(52, 53, 49, 77, 21, 32);
// let max = Math.max(52, 53, 49, 77, 21, 32);
// console.log(min);
// console.log(max);

// //Задание 5
// function randomNumb() {
//   numb = Math.floor(Math.random() * 10);
//   console.log(numb);
// }

// randomNumb();

// //Задание 6
// function randomArr(numb) {
//   const arrLenght = Math.floor(numb / 2);
//   let ramdomArr = [];

//   for (let i = 0; i < arrLenght; i++) {
//     const randomNum = Math.floor(Math.random() * numb);
//     ramdomArr.push(randomNum);
//   }

//   return ramdomArr;
// }

// let result6 = randomArr(10);
// console.log(result6);

// //Задание 7
// function returnRandomNumber(number1, number2) {
//   return Math.floor(Math.random() * (number1 - number2 + 1)) + number2;
// }

// const result7 = returnRandomNumber(1, 100);
// console.log(result7);

// //Задание 8
// const getDate = new Date();
// console.log(getDate);

// //Задание 9
// const currentDate = new Date();
// const futureDate = new Date(currentDate + 73);

// futureDate.setDate(currentDate.getDate() + 73);

// console.log(currentDate);
// console.log(futureDate);

// //Задание 10
// const time = new Date();

// function dateReturn(date) {
//   const optionsDate = { day: "numeric", month: "long", year: "numeric" };
//   const optionsWeekday = { weekday: "long" };
//   const optionsTime = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

//   const formattedDate = date.toLocaleDateString("ru-RU", optionsDate);
//   const weekday = date.toLocaleDateString("ru-RU", optionsWeekday);
//   const time = date.toLocaleTimeString("ru-RU", optionsTime);

//   return `Дата: ${formattedDate} — это ${weekday}.\nВремя: ${time}`;
// }

// console.log(dateReturn(time));
