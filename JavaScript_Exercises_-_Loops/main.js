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

// console.log(" ");
// console.log("*************");
// console.log(" ");

// // Ex.8

// function charactersCounter(str, chr) {
//   var text = str.toLowerCase();
//   var character = chr.toLowerCase();

//   if (text.includes(character)) {
//     var match = text.matchAll(character);
//     var array = Array.from(match);
//     console.log(array.length);
//   } else {
//     console.log("There is no such Character in " + text);
//   }
// }

// charactersCounter("Coding Academy by Orange", "a");

// console.log(" ");
// console.log("*************");
// console.log(" ");

// // Ex.9

// // A
// for (let i = 0; i <= 20; i++) {
//     console.log(i)

// }
// console.log("*************");
// // B
// for (let i = 3; i <= 29; i++) {
//   if (i % 2 != 0) {
//     console.log(i)
//   }
// }

// console.log("*************");

// // C

// for (let i = 12; i >= -14; i--) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// console.log("*************");

// // D
// for (let i = 50; i >= 20; i--) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }

// console.log(" ");
// console.log("*************");
// console.log(" ");

// // Ex.10

// var text = "CodingAcademy";
// var array = [7, 500, "KH404", "black", 36];

// // E
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// // F
// var txtArray = Array.from(text);

// for (let i = txtArray.length - 1; i >= 0; i--) {
//   console.log(txtArray[i]);
// }



// console.log(" ");
// console.log("*************");
// console.log(" ");

// // Ex.11

// // sort the array ((insertion sort algorithm))
// var unsortedArray = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
// var key;
// var i;
// console.log("unsorted " + unsortedArray);

// for (let j = 1; j < unsortedArray.length; j++) {
//   key = unsortedArray[j];
//   i = j - 1;
//   while (i >= 0 && unsortedArray[i] > key) {
//     unsortedArray[i + 1] = unsortedArray[i];
//     i = i - 1;
//   }
//   unsortedArray[i + 1] = key;
// }

// // put the numbers in sorted array
// var sortedArray = [];
// for (let i = 0; i < unsortedArray.length; i++) {
//   sortedArray.push(unsortedArray[i]);
// }
// console.log("sorted " + sortedArray);

// // put the even and odd numbers in arrays
// var evenArray = [];
// var oddArray = [];

// for (let i = 0; i < sortedArray.length; i++) {
//   if (sortedArray[i] % 2 == 0) {
//     evenArray.push(sortedArray[i]);
//   } else {
//     oddArray.push(sortedArray[i]);
//   }
// }

// //print evenArray
// console.log("even array " + evenArray);

// //print oddArray
// console.log("odd array " + oddArray);


console.log(" ");
console.log("*************");
console.log(" ");

// Ex.12

// function getRndInteger(min, max) {
//      console.log( Math.floor(Math.random() * (max - min+1)) + min);
//   }
//   getRndInteger(1,6)

proteinArray=['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']
grainArray=['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
vegetableArray=['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']
beverageArray=['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
dessertArray=['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']

var numOfMeals=3



for (let i = 1; i <=numOfMeals ; i++) {

var proteinItem = proteinArray[Math.floor(Math.random() * proteinArray.length)];
var grainItem = grainArray[Math.floor(Math.random() * grainArray.length)];
var vegetableItem = vegetableArray[Math.floor(Math.random() * vegetableArray.length)];
var beverageItem = beverageArray[Math.floor(Math.random() * beverageArray.length)];
var dessertItem = dessertArray[Math.floor(Math.random() * dessertArray.length)];

 
    console.log("meal number : "+i)
    console.log("proteinItem "+proteinItem)
    console.log("grainItem "+grainItem)
    console.log("vegetableItem "+vegetableItem)
    console.log("beverageItem "+beverageItem)
    console.log("dessertItem "+dessertItem)
}
