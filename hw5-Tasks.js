// //Задание 1
// function smallTwoNumbers(firstNumber, secondNumber) {
//     firstNumber = Number(prompt('Введите первое число: '));
//     secondNumber = Number(prompt('Введите второе число: '));

//     if (firstNumber > secondNumber) {
//         alert(`меньшее число - ${secondNumber}`);
//         return secondNumber;
//     } else {
//         alert(`меньшее число - ${firstNumber}`);
//         return firstNumber;
//     }
// }

// let firstNumber, secondNumber;
// smallTwoNumbers(a, b);

// //Задание 2
// function evenOdd(evenOddNumber) {
//     evenOddNumber = Number(prompt('Введите число'));
//     if (evenOddNumber % 2 == 0) {
//         alert('Ваше число чётное');
//     } else {
//         alert('Ваше число нечётное');
//     }
//     return evenOddNumber;
// }

// let evenOddNumber;
// evenOdd(evenOddNumber);

// //Задание 3
// function degree(degreeNumber){
//     degreeNumber = Number(prompt('Введите число'));
//     degreeNumber **= 2;
//     // console.log(degreeNumber);
//     return degreeNumber;
// }

// let degreeNumber;
// degree(degreeNumber);
// console.log(degreeNumber);

// //Задание 4
// function userAge (age){
//     age = Number(prompt('Введите свой возвраст'));

//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age > 0 && age <= 12) {
//         alert('Привет, друг!');
//     } else{
//         alert('Добро пожаловать!');
//     }
// }


// let age;
// userAge(age);

// //Задание 5
function stringNumb(firstStringNumber, secondStringNumber){
    let num1 = Number(firstStringNumber);
    let num2 = Number(secondStringNumber);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

let firstStringNumber = Number(prompt('Введите первое число'))
let secondStringNumber = Number(prompt('Введите второе число'))
