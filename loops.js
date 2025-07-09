//9.	Write a for loop to print the multiplication table of 7.
console.log("Multiplication Table of 7:");
for (let i = 1; i <= 10; i++) {
  console.log(7*i);
}


  //10.	Use a while loop to print all even numbers from 2 to 20.
  console.log("Even Numbers from 2 to 20:");
  let num = 2;
while (num <= 20) {
  console.log(num);
  num += 2;
}


  //11.	Use a do-while loop to print numbers from 10 to 1.
  console.log("Numbers from 10 to 1:");
let i = 10;
do {
  console.log(i);
  i--;
} while (i >= 1);


  //12.	Explain the difference between for, while, and do-while with use cases.
  console.log("Using FOR loop:");
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
console.log("Using WHILE loop:");
let x = 1;
while (x <= 3) {
  console.log(x);
  x++;
}
console.log("Using DO-WHILE loop:");
let y = 4;
do {
  console.log(y);
  y++;
} while (y <= 3);


  //13.	Write a loop that calculates the sum of numbers from 1 to 100.
  let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100 is:", sum);