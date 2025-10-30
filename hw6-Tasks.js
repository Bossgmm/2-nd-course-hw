// // Задание 1
// let arr1 = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
//   if (arr1[i] === 10) break;
// }

// // Задание 2
// let arr2 = [1, 5, 4, 10, 0, 3];
// let index = arr2.indexOf(4);
// console.log(index);

// // Задание 3
// let arr3 = [1, 3, 5, 10, 20];
// let JoinArr3 = arr3.join(" ");
// console.log(JoinArr3);

// // Задание 4
// let rows = 3;
// let columns = 3;

// let arr4 = [];

// for (let i = 0; i < rows; i++) {
//   let row = [];

//   for (let j = 0; j < columns; j++) {
//     row.push(1);
//   }

//   arr4.push(row);
// }

// console.log(arr4);

// // Задание 5
// let arr5 = [1, 1, 1];
// console.log(arr5);

// arr5.push(2);
// arr5.push(2);
// arr5.push(2);

// console.log(arr5);

// // Задание 6
// let arr6 = [9, 8, 7, "a", 6, 5];
// console.log(arr6);

// arr6.sort((a, b) => a - b);
// console.log(arr6);

// let arrFil = arr6.filter((item) => item != "a");
// console.log(arrFil);

// // Задание 7
// let arr7 = [9, 8, 7, 6, 5];
// let userNumb = Number(prompt("Введите число:"));
// let found = arr7.includes(userNumb);
// if (found === true) {
//   alert("Угадал");
// } else {
//   alert("Не угадал");
// }

// // Задание 8
// let arrString = "abcdef";
// let arr8 = arrString.split("");
// console.log(arr8);
// let arrReverse = arr8.reverse();
// console.log(arrReverse);
// let word = arrReverse.join();
// console.log(word);

// // Задание 9
// let arr9 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// let arrSpread = [].concat(...arr9);
// console.log(arrSpread);

// // Задание 10
// let arr10 = [];
// const max = 10;

// for (let i = 0; i < max; i++) {
//   let random = Math.floor(Math.random() * 10) + 1;
//   arr10.push(random);
// }

// for (let i = 0; i < arr10.length - 1; i++) {
//   const sum = arr10[i] + arr10[i + 1];
//   console.log(`Сумма элементов ${arr10[i]} и ${arr10[i + 1]}: ${sum}`);
// }

// // Задание 11
// function arrMult(arr11) {
//   let multNumber = arr11.map((item) => item ** 2);
//   console.log(multNumber);
//   return multNumber;
// }

// let arr11 = [2, 3, 4, 5, 6];
// arrMult(arr11);

// // Задание 12
// function arrWords(arr12) {
//   const lengths = arr12.map((word) => word.length);
//   return lengths;
// }

// let arr12 = ["apple", "banana", "cherry"];
// let lengthsArr = arrWords(arr12);
// console.log(lengthsArr);

// // Задание 13
// function negativeNumbs(arr13) {
//   filterArr13 = arr13.filter((numb) => numb < 0);
//   console.log(filterArr13);
//   return filterArr13;
// }

// let arr13 = [
//   10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10,
// ];
// negativeNumbs(arr13);

// // Задание 14
// let arr14 = [];
// const max10 = 10;

// for (let i = 0; i < max10; i++) {
//   let random = Math.floor(Math.random() * 10) + 1;
//   arr14.push(random);
// }

// console.log(arr14);

// let arrEven = arr14.filter((evenNumbs) => evenNumbs % 2 === 0);
// console.log(arrEven);

// // Задание 15
// let arr15 = [];
// const max6 = 6;

// for (let i = 0; i < max6; i++) {
//   let random = Math.floor(Math.random() * 10) + 1;
//   arr15.push(random);
// }

// console.log(arr15);
// let summ = 0;

// for (let i = 0; i < arr15.length; i++) {
//   summ += arr15[i];
// }
// console.log("Сумма элементов массива: ", summ);
// console.log("среднее арифметическое ", summ / arr15.length);
