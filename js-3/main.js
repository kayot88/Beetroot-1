
// function getMessage() {
//   let message = '124234242342342';
//   console.log(11, message);
// }

// getMessage();

// const MESSAGE = 'fblwejfblewiewbilfbfl';
// console.log(22, MESSAGE);


// function getMessage2() {
//   console.log(33, MESSAGE);
// }

// getMessage2();

// function showMessage(param1, param2) {
//   console.log(`${param1} ${param2}!`);
// }

// showMessage('Привет', 'Димон!!!!');
// showMessage('Привет', 'вйцвйцв!!!!');
// showMessage('Привет', 'вйцвйцвйцв!!!!');
// showMessage('Привет', 'Дивйцвйцвйцмон!!!!');
// showMessage('Привет', 'вйцвйцвйцвйц!!!!');

// function getRandom(param1, param2) {
//   var randomNumber = param2 + param1;
//   console.log(randomNumber);
// }

// getRandom(12, 20);
// getRandom(2, 2);
// getRandom(1, 2);
// getRandom(123, 123);

// function showMessage(message = "Hello", name = "World") {
//   // параметры message, name
//   // if (name === undefined) {
//   //   name = 'World';
//   // }
//   // name = name || 'World';
//   function () {
//     return .....
//     function () {
//       return
//     }
//   }

//   alert(message + ' ' + name + '!');
//   return ....;
// }

// showMessage("'fm'wemf'we");

// function sayHey() {
//   alert("Привет");
// }

// alert(sayHey());

// function getAge(age) {
//   if (age >= 18) {
//       alert('OK!');
//     } else {
//       alert('До 18 нельзя');
//     }
// }

// let age = prompt("Укажите ваш возраст");

// getAge(age);

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   alert("Вы согласились.");
// }

// function showCancel() {
//   alert("Вы отменили выполнение.");
// }

// ask("Вы согласны?", showOk, showCancel);

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// ask(
//   "Вы согласны?",
//   function () { alert("Вы согласились.");},
//   function () { alert("Вы отменили выполнение.");}
// );

function pow(x, n) {
  if (n != 1) { 
    // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

alert(pow(4, 3)); // 8
