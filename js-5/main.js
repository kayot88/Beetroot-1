
// let name = "вася";

// console.log(name.charAt(0).toUpperCase() + name.slice(1));

// function min(a,b) {
//   if (a > b) {
//     console.log(b);
//   } else if ( a == b){
//     console.log( 'значения равны');
//   } else {
//     console.log(a);
//   }
// }

// min(2, 5);
// min(3, -1);
// min(1, 1);



// function numberInput() {
//   let numberCustom = prompt("Number");
//   let numberBasic = 100;

//   if (numberCustom !== null) {
//     if (numberCustom / 1 == numberCustom) {
//       if (numberCustom > numberBasic) {
//         console.log("OK");
//       } else {
//         numberInput();
//       }
//     } else {
//       console.log("Input NaN");
//       numberInput();
//     }
//   } else {
//     console.log("Closed");
//   }
// }
// numberInput();

// // var num;

// // do {
// //   num = prompt("Введите число больше 100?", 0);
// // } while (num <= 100 && num != null);

// const NUM = 100;

// let num = prompt('Enter num');

// while (num >= 100) {
//   if (num != NUM) {
//     alert('false');
//     num = prompt('Enter num')
//   } else {
//     alert('ok');
//   }
// }



// function numbers() {
//   let number1 = prompt('введите число №1', 0);
//   let number2 = prompt('введите число №1', 0);

//   if (number1 < number2) {
//     for (i = number1; i < number2; i++) {
//       if (i > 1) {
//         for ( j = i; j < number2; j++ ) {
//           let k = i / j;
//           if ( k === 1 ) {
//             console.log(k);
//           }
//         }
//       }
//     } 
//   }
//   else {
//     console.log("второе число должно быть больше первого");
//   }
// }

// numbers();

// let num1 = prompt('Enter 1');
// let num2 = prompt('Enter 2');


// for (let i = num1; i < num2; i++) {
//   if ( i > 1) {
//     let j = (i % 2);
//     if (j != 0) {
//       console.log(i);
//     }
//   }
// }

// let num1 = prompt("Input First Number!");
// let num2 = prompt("Input Second Number!");
// let simple = 0;
// let ostatok;

// console.log(`Num1: ${num1}, num2: ${num2}`);

// if (num1 !== null || num2 !== null) {
//   if (num1 > num2) {
//     console.log("number1 > number2")
//   } else {
//     for (let j = num1; j != num2; j++) {
//       let i = 2;
//       //console.log(`j ${i}`); 
//       if (j == 1) {
//         simple = 0;
//       } else if (j == 2) {
//         simple = 0;
//       } else {
//         while (i != (j - 1)) {
//           ostatok = j % i;
//           //console.log(`                    i ${i}`);
//           i++;
//           if (ostatok == 0) {
//             simple = 1;
//             break;
//           }
//         }
//       }
//       simple == 0 ? console.log(`${j} - is SIMPLE`) : console.log(`${j} - NOT a simple`);
//       simple = 0;
//     }
//   }
// } else {
//   console.log("Closed");
// }

// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// let total = 0;

// for (var key in salaries) {
//   total += salaries[key]
// }

// console.log(total);

// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// let name = '';
// let maxValue = 0;

// for (let key in salaries) {
//   if (maxValue < salaries[key]) {
//     maxValue = salaries[key];
//     name = key;
//   }
// }

// console.log('maxValue =', maxValue);
// console.log('name = ', name);

//function square(x) { return x * x; } // возведение в квадрат
//console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]

let arr = [1, 2, 3, 4];
let arr2 = [];
square = x => x * x;

map = (fn, arr) => {
  arr.map((x) => {
    let item2 = fn(x);
    arr2.push(item2);
    }
  );
}

console.log(arr2);
map(square, arr);


