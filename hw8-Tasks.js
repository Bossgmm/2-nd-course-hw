// // Задание 1
// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// people.sort((a, b) => a.age - b.age);

// console.log(people);

// // Задание 2
// function isPositive(number) {
//   // писать код тут
//   return number > 0;
// }
// function isMale(person) {
//   // писать код тут
//   return person.gender === "male";
// }
// function filter(array, ruleFunction) {
//   // писать код тут
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (ruleFunction(array[i])) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//   { name: "Глеб", gender: "male" },
//   { name: "Анна", gender: "female" },
//   { name: "Олег", gender: "male" },
//   { name: "Оксана", gender: "female" },
// ];

// console.log(filter(people, isMale));

// Задание 3
const printDate = () => {
  const interval = setInterval(() => {
    console.log(new Date().toLocaleString());
  }, 3000);
  
  setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло');
  }, 30000); // 30 секунд соответствует 30000 миллисекундам
};

printDate();
