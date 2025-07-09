//16.	Create an array with five student names and print the 3rd one.

let students = ["Alice", "Bob", "Charlie", "David", "Eva"];
console.log("3rd student:", students[2]); // Index starts at 0


//17.	Write a program to find the length of an array and print all values using a loop.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Array length:", fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}


 //18.	Differentiate between array literal and array constructor with an example.
  
let colors1 = ["Red", "Green", "Blue"];
let colors2 = new Array("Red", "Green", "Blue");
console.log("Using Literal:", colors1);
console.log("Using Constructor:", colors2);


  //19.	Given an array of numbers, write a loop to print only values greater than 50.
  let numbers = [12, 75, 34, 99, 51, 20];
console.log("Numbers > 50:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    console.log(numbers[i]);
  }
}


//20.	Predict the output:
let items = ["Pen", "Pencil", "Eraser"];
items[5] = "Scale";
console.log("Array length:", items.length);
//Output: Array length: 6