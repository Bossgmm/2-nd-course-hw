// Задание 1
for(let i = 0; i < 2; i++){
    console.log('Привет');
    }

// Задание 2
let i = 1;
while(i < 6){
    console.log(i);
    i++
}

// Задание 3
for (let index = 7; index < 23; index++) {
    console.log(index);
}

// Задание 4
let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Задание 4
let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++
}
console.log('Количество итераций - ' + num);
console.log('Результат - ' + n);

// Задание 5
let friday = 5;
let month = 31
for(let day = friday; day <= month; day += 7){
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}