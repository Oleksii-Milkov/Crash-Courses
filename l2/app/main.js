//Task 1

//Task 2

//Task 3
/* const ticket = +prompt("Enter your ticket");
if ((0 <= ticket && ticket < 10 ** 6) && ticket.toString().length == 6) {
  if ((+ticket.toString()[0] + +ticket.toString()[1] + +ticket.toString()[2]) ==
    (+ticket.toString()[3] + +ticket.toString()[4] + +ticket.toString()[5])) {
    alert("Your ticket is happy.");
  } else {
    alert("Not happy.");
  }
} */

//Task 4 
//1
/* const age = +prompt("Enter your age");
if (age > 0 && age <= 100) {
  if (age > 0 && age <= 12) alert("Ребенок");
  else if (age > 12 && age <= 18) alert("Подросток");
  else if (age > 18 && age <= 60) alert("Взрослый");
  else alert("Пенсионер");
} else {
  alert("Not correct age");
} */

//2
/* const num = +prompt("Enter number");
if (num >= 0 && num <= 9) {
  switch (num) {
    case 1:
      alert("!");
      break;
    case 2:
      alert("@");
      break;
    case 3:
      alert("#");
      break;
    case 4:
      alert("$");
      break;
    case 5:
      alert("%");
      break;
    case 6:
      alert("^");
      break;
    case 7:
      alert("&");
      break;
    case 8:
      alert("*");
      break;
    case 9:
      alert("(");
      break;
    case 0:
      alert(")");
      break;
  }
} else alert("Not correct number"); */

//3
/* const num = +prompt("Enter number");
if (num.toString().length == 3) {
  if (num.toString()[0] != num.toString()[1] && num.toString()[0] !=
    num.toString()[2] && num.toString()[1] != num.toString()[2]) {
    alert("No");
  } else alert("Yes");
} */

//4
/* const year = +prompt("Enter year");
const isLeap = !(!(year % 400 && year % 100) || year % 4) ? alert("Yes") : alert("No"); */