//14.	Write a switch case to print the day of the week for a given number (1 = Monday, … 7 = Sunday).
let dayNumber = 3; 
switch(dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}


//15.	What will be the output? Why?
let day = 9;
switch(day){
  case 1: console.log("Mon"); break;
  case 2: console.log("Tue"); break;
  default: console.log("Invalid");
}
//Output:Invalid
