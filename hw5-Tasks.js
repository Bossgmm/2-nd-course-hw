// //Задание 1
// function smallTwoNumbers(firstNumber, secondNumber) {
//     if (firstNumber > secondNumber) {
//         alert(`меньшее число - ${secondNumber}`);
//         return secondNumber;
//     } else {
//         alert(`меньшее число - ${firstNumber}`);
//         return firstNumber;
//     }
// }

// let firstNumber, secondNumber;
// firstNumber = Number(prompt('Введите первое число: '));
// secondNumber = Number(prompt('Введите второе число: '));
// smallTwoNumbers(firstNumber, secondNumber);

// //Задание 2
// function evenOdd(evenOddNumber) {
//     if (evenOddNumber % 2 == 0) {
//        return alert('Ваше число чётное');
//     } else {
//        return alert('Ваше число нечётное');
//     }

// }

// let evenOddNumber;
// evenOddNumber = Number(prompt('Введите число'));
// evenOdd(evenOddNumber);

// //Задание 3
// function degree(degreeNumber){
//     degreeNumber **= 2;
//     return degreeNumber;
// }

// let degreeNumber;
// degreeNumber = Number(prompt('Введите число'));
// console.log(degree(degreeNumber));

// //Задание 4
// function userAge (age){

//     if (age < 0) {
//        return alert('Вы ввели неправильное значение');
//     } else if (age > 0 && age <= 12) {
//        return alert('Привет, друг!');
//     } else{
//        return alert('Добро пожаловать!');
//     }
// }

// let age;
// age = Number(prompt('Введите свой возвраст'));
// userAge(age);

// //Задание 5
// function stringNumb(firstStringNumber, secondStringNumber){

//     if (isNaN(firstStringNumber) || isNaN(secondStringNumber)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return firstStringNumber * secondStringNumber;
//     }
// }

// let firstStringNumber = Number(prompt('Введите первое число'))
// let secondStringNumber = Number(prompt('Введите второе число'))
// alert(stringNumb(firstStringNumber, secondStringNumber));

// //Задание 6
// function param(n) {

//     if (isNaN(n)){
//         alert('Переданный параметр не является числом');
//     }
//     else{
//         alert(`${n} в кубе равняется ${n ** 3}`);
//     }
// }

// let userParam = Number(prompt('Введите число'));
// param(userParam);

// //Задание 7
// let radius1 = Number(prompt('Введите радиус первой окружности'));
// let circle1 = {
//     rad : radius1,
//     getArea(){
//        return Math.PI * this.rad * this.rad;
//     },

//     getPerimeter(){
//        return 2 * Math.PI * this.rad

//     }
// }

// let radius2 = Number(prompt('Введите радиус второй окружности'));
// let circle2 = {
//     rad : radius2,

//     getArea(){
//        return Math.PI * this.rad * this.rad;
//     },

//     getPerimeter(){
//        return 2 * Math.PI * this.rad

//     }
// }

// console.log(circle1.getArea());
// console.log(circle2.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getPerimeter());
