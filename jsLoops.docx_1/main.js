// Ex.1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.2
var counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.3
var array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.4

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.5

var sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.6
var array = [1, 2, 3, 4, 5];
var max = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max);

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.7
var array = [5, 4, 3, 2, 1];
var min = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}
console.log(min);

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.8

var array = [1, 2, 3, 4, 5];
var sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum / array.length);

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.9

var fac = 1;
var num = 5;
for (let i = 1; i <= num; i++) {
  fac *= i;
}
console.log(fac);

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.10

const num = 10;
let a = 0,
  b = 1,
  c;

for (let i = 0; i < num; i++) {
  if (i <= 1) {
    c = i;
  } else {
    c = a + b;
    a = b;
    b = c;
  }
  console.log(c);
}

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.11

const num = 20;

for (let i = 2; i <= num; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.12
var num = 5;

for (let i = 1; i <= 10; i++) {
  console.log(num + " X " + i + " = " + num * i);
}

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.13
var array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    console.log(array[i][j]);
  }
}

console.log(" ");
console.log("*************");
console.log(" ");

// Ex.14
var array = [1, 2, 3, 4, 5];
for (let i = array.length; i > 0; i--) {
  console.log(i);
}

console.log(" ");
console.log("*************");
console.log(" ");
// Ex.15

var array = [1, 2, 3, 4, 5];
var first = 2;
var last = 4;

for (let i = first; i <= last; i++) {
  console.log(array[i]);
}

console.log(" ");
console.log("*************");
console.log(" ");
// Ex.16

var array = [1, 2, 3, 4, 5];
var num = 2;
for (let i = 0; i < array.length; i += num) {
  console.log(array[i]);
}

console.log(" ");
console.log("*************");
console.log(" ");
// Ex.17

var array = [1, 2, 3, 4, 5];
var num = 4;

for (let i = 0; i < array.length; i++) {
  if (array[i] == num) {
    console.log("true");
  }
}

console.log(" ");
console.log("*************");
console.log(" ");
// Ex.18

var array = [1, 2, 1, 3, 2, 1];
var num = 1;
var counter = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] == num) {
    counter++;
  }
}
console.log(counter);
