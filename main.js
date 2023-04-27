// // EX.1
// var ex1Conter = 0;

// while (ex1Conter < 2) {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
//   ex1Conter++;
// }

// console.log(" ");
// console.log("*************");
// console.log(" ");

// // Ex.2

// var ex2Counter = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     console.log(i);
//   }
// }

// console.log(" ");
// console.log("*************");
// console.log(" ");

// // Ex.3

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// console.log(" ");
// console.log("*************");
// console.log(" ");

// // Ex.4

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// console.log(" ");
// console.log("*************");
// console.log(" ");

// // Ex.5

// function fizzBuzz(num) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(num);
//   }
// }

// fizzBuzz(1);
// fizzBuzz(15);

// console.log(" ");
// console.log("*************");
// console.log(" ");

// // Ex.6

// function fizzBuzz(num) {
//   if (num > 100) {
//     return;
//   } else if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(num);
//   }

//   fizzBuzz(num + 1);
// }

// fizzBuzz(50);

// console.log(" ");
// console.log("*************");
// console.log(" ");

// // Ex.7

// function convertToBN(value, banknotes) {
//   var list = [];
//   var num;
//   for (let i = 0; i <= banknotes.length; i++) {
//     num = banknotes[i];
//     while (value >= num) {
//       list.push(num);
//       value -= num;
//     }
//   }
//   return list;
// }

// var value = 57;
// var banknotes = [25, 10, 5, 1];
// var result = convertToBN(value, banknotes);
// console.log(result);

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.8
