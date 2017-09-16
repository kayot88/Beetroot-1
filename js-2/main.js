// const STR = "Konatnta";

// let str = "Мама мыла раму";

// str = 'Одинарные кавычки тоже подойдут';

// console.log(str);
// console.log(STR);


// let visitorName = prompt('Как вас зовут?', 'Буряк');

// console.log(visitorName);


// let str1 = "stroka 1";
// let str2 = "stroka 2";

// console.log(`${str1} ${str2}`);

// let num1 = 1;
// let str1 = "2";

// console.log(num1 + str1);

// let visitorName = prompt('Как вас зовут?', 'Буряк');
// let message = "Привет " + visitorName + '. Добро пожаловать на урок по JavaScript. ' + 'Рад наблюдать за твоими успехами';

// message = message + '...';
// message += "....";

// console.log(message);

// let num = 12;
// let num1 = 12.23;

// let vegetable = { 
//   name: "Буряк",
//   qty: 2,
// };

// let message = "Нам нужны овощи:";
// // message = message + vegetable.name;
// // message = message + ", в количестве: ";
// // message = message + vegetable.qty;
// // message = message + " штук.";

// let message1 = `${message} ${vegetable.name}, в количестве ${vegetable.qty} штук`;

// document.write(message1);

// let tsr = "12312";

// console.log(typeof(tsr));

// console.log(315 % 33);

// let i = 2;

// i++;
// console.log(i) //3

// i--;
// console.log(i) //2

// var i = 1;
// console.log(2 * i++);
// console.log(i);

// let n = 2;
// n += 5; // теперь n=7 (работает как n = n + 5)
// n *= 2 + 3; // теперь n=14 (работает как n = n * 2)

// console.log(n);

// три операции в одной строке
// for (
//   a = 1, b = 3, c = a * b; 
//   a < 10; 
//   a++
// ) {
//   console.log(c);
//   console.log('--->>>',a);
// }


// console.log('А' > 'Ю'); // true

// 'a'.charCodeAt(0); //97

// console.log('Аа цадцушг ашдугц ацушд а'.charCodeAt(4));
// console.log('Б'.charCodeAt(0));
// console.log('В'.charCodeAt(0));
// console.log('Г'.charCodeAt(0));
// console.log('Ю'.charCodeAt(0));
// console.log('Я'.charCodeAt(0));
// console.log('hjfjwo fowe '.charCodeAt(0));

// console.log('Ц' > 'Я');

// let year = prompt('В каком году появилась спецификация ECMA-262 5.1?');

// if (year != 2011) {
//   alert('А вот и неправильно!');
// } else if {
//   alert('dqwdqwdqw');
// } else {
//   alert('dqw dqw dqw ');
// }

// console.log(year);
// console.log(typeof(+year));

// let name = "Alefewfwea";
// let name2 = " wdwe fne;w"

// let surname = (name === name2) ? 'Balo' : 'Martushka';

// console.log(surname);

// let name = "Alefewfwea";
// let name2 = " wdwe fne;w"
// let inputValid = true;

// if ( name && name2) {
//   console.log("names are existing");
// } else {
//   console.log("error");
// }

// if (!inputValid) {
//   console.log("input error");
// } else {
//   console.log("input correct");
// }

// const VALID = !inputValid ? 'input error' : 'input success';
// console.log(VALID);

// let i = 10;
// let i1 = 'we dw';
// alert(Boolean(i) == !!i1);

// let _a = prompt('выберите от 1 - 10');
// console.log(_a);

// let a = +_a;
// console.log(typeof(a));

// switch (a) {
//   case 1:
//   case 2:
//   case 3:
//     console.log('1-3');
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log('4-6');
//     break;
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     console.log('7-10');
//     break;
//   default:
//     alert('вы ничего не выбрали');
//     break;
// }


// var sum = 0;
// var value = 0;
// while (true) {
//   if (!value)
//   console.log(!value);
//   break;
//   sum += value;
//   console.log(sum);
// }


// for (let i = 0; i < 10; i++) {

//   if (i % 2 == 0) continue;

//   console.log(i);
// }


// console.log(`Привет
//                                 Мир`);


console.log(parseInt('12px a123')); // 12
// alert(parseFloat('12.3.4')) /* 12.3, ошибка 
//                                на второй точке */
// alert(parseInt('a123')); // NaN



