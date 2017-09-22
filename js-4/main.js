// let studentsString = 'Alex, Sasha, Ira, Nika';

// let students = studentsString.split(' ');

// console.log(students);

// let currentStudents = ['Alex', 'Sasha', 'Ira'];
// let newStudents = ['Nika', 'Gustav'];

// // let allStudents = currentStudents.concat(newStudents);
// let allStudents = [...currentStudents, ...newStudents];

// console.log(allStudents);

// let students = ['Alex', 'Sasha', 'Ira'];

// students.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

// console.log(students);

// // удалить 2 первых элемента и добавить другие вместо них
// students.splice(0, 2, "Nika", "Olya");

// console.log(students);

// var student = {
//   name: {
//     firstName: 'Vasya',
//     lastName: 'Pupkin',
//   },
//   wage: 25
// };

// console.log(student.name.lastName);
// console.log(student.age);

// student.name.lastName = "Vas'kin";
// console.log(student);

// let person = {
//   name: 'Alex',
//   country: 'UA',
//   age: 29,
//   beetrootTeacher: true,
//   skills: ['JavaScript', 'HTML', 'CSS']
// };

// for (let key in person) {
//   //console.log(key); // ключ
//   //console.log(person[key]); // значение

//   //console.log(person.key); // не сработает

//   // прикольная фича
//   console.log(key, ':', person[key]);
// }


// var codes = {
//   // телефонные коды в формате "код страны": "название"
//   "46": "Швеция",
//   "1": "США",
//   "38": "Украина"
// };

// var person = {
//   name: 'Alex',
//   country: 'UA',
//   age: 29,
//   beetrootTeacher: true,
//   skills: ['JavaScript', 'HTML', 'CSS']
// };

// for (var key in codes) {
//   console.log(key, ':', codes[key]);
// }

// let person = {
//   name: 'Alex',
//   country: 'UA',
//   age: 29,
//   beetrootTeacher: true,
//   skills: ['JavaScript', 'HTML', 'CSS']
// };

// let evilClone = {}; // пустой

// // скопируем в него все свойства person
// for (let key in person) {
//   evilClone[key] = person[key];
// }

// console.log(evilClone);

// обычные переменные
var message = "Привет";
var phrase = message;

// Объекты 
var person = {
  name: 'Alex',
  country: 'UA',
  age: 29,
  beetrootTeacher: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

var evilClone = person;
console.log(evilClone);
evilClone = 0;

console.log(evilClone);
console.log(person);
