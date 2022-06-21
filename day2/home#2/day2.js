"use strict";
//Домашнє завдання 2
//1

let ageHuman;
ageHuman = +prompt("Input age");
if (ageHuman > 0 && ageHuman <= 12) {
  alert("дитина");
} else if (ageHuman > 12 && ageHuman <= 18) {
}
if (ageHuman > 12 && ageHuman <= 12) {
  alert("підліток");
}

if (ageHuman > 18 && ageHuman <= 60) {
  alert("дорослий");
}
if (ageHuman > 60) {
  alert("поважна людина");
}

//2

let expressionStr = prompt("Input number");
let expression = parseFloat(expressionStr);
switch (expression) {
  case 0:
    alert(")");
    break;
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
  default:
    alert("not key value");
}


//3
let numberThree = prompt("Input three-digit number");

if (
    numberThree.charAt(0) === numberThree.charAt(1) ||
    numberThree.charAt(0) === numberThree.charAt(2) ||
    numberThree.charAt(1) === numberThree.charAt(2)
) {
    alert("Число містить однакові цифри");
} else {
    alert("Число не містить однакові цифри");
};

//4
let numberYear = prompt("Input Year");
if (numberYear % 400 === 0 ||
    numberYear % 4 === 0 && numberYear % 100 !== 0) {
    alert("Високосний рік")
} else {
    alert("Не високосний рік!");
};


//5
let number = prompt("Enter 5 number");
if (number.charAt(0) === number.charAt(4) &&
    number.charAt(1) === number.charAt(3) 
    )   {
        alert("Число паліндром!");
        }   else {
            alert("Число не паліндром!");
        };


// 5 (2)
let number = prompt("Enter 5 number");
let rPart, lPart= '';
rPart = rPart + number%10;//1
console.log(rPart);
number = Math.trunc(number/10); //1232
rPart = rPart + number%10;//2
number = Math.trunc(number/100); //12
console.log(number);
if(lPart===rPart){
  console.log("palindrom")
}else {
    console.log("not palindrom")

  }

//6
let summa = prompt("Enter amount in USD");
let currency = prompt("Enter currency");
const EUR = 0.94;
const AZN = 0.59;

if (currency.toUpperCase() === 'EUR') {
    const convertedSumma = summa *	EUR;
    alert ("EUR = " + convertedSumma);
}

if (currency.toUpperCase() === 'AZN') {
    const convertedSumma = summa *	AZN;
    alert ("AZN = " + convertedSumma);
}

//7
let numberSuma = prompt("Enter $");
if (numberSuma >= 200 && numberSuma <= 300) {
    const znygka = numberSuma - numberSuma * 0.03;
  alert("сумa до сплати зі знижкою: " + znygka);
}
if (numberSuma > 300 && numberSuma <= 500) {
    const znygka = numberSuma - numberSuma * 0.05;
  alert("сумa до сплати зі знижкою: " + znygka);
}

if (numberSuma > 500) {
    const znygka = numberSuma - numberSuma * 0.07;
  alert("сумa до сплати зі знижкою: " + znygka);
}



//8
// Запросіть у користувача довжину кола та периметр квадрата. 
// Визначте чи може таке коло поміститися у зазначений квадрат. 


const lengthCircle = +prompt("Enter length circle");
const squareP = +prompt("Enter square perimeter");

const squareA = squareP / 4;
const diametr = lengthCircle / Math.PI;

if (squareA >= diametr) {
    alert('True')
}
if (squareA < diametr) {
    alert('False')
}




// 9
// Задайте користувачеві 3 питання, у кожному питанні по 3 
// варіанти відповіді. 
// За кожну правильну відповідь нараховується 2 бали. 
// Після запитань виведіть користувачеві кількість набраних балів


let firstQ = +prompt("Скільки місяців у році?\n 10, 7, 12");
let secondQ = +prompt("Яка правильна відповідь виразу 5+0*5?\n  0, 5, 25");
let thirdQ = +prompt("Яке значення виразу 60*0+60/1 ?\n 0, 30, 60");
let balls = 0;

if (firstQ === 12) {
  balls = balls + 2;
} 
if (secondQ === 5) {
  balls = balls + 2;
} 
if (thirdQ === 60) {
  balls = balls + 2;
  alert("Ви отримуєте балів : " + balls);
};


//Запросіть дату (день, місяць, рік) і виведіть наступну дату. 
// Врахуйте можливість переходу на наступний місяць, рік, 
// а також високосний рік. 

let year = +prompt("Введіть рік");
let month = +prompt("Введіть місяць");
let day = +prompt("Введіть день");

const isFullYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
let daysInMoth;

switch (month) {
  case 2:
      if (isFullYear){
        daysInMoth = 29;
      } else
        daysInMoth = 28;
      break;
  case 4:
  case 6:
  case 9:
  case 11:
    daysInMoth = 30;
      break;
  default:
    daysInMoth = 31;
}

if (day > daysInMoth) {
  alert('Wrong date')
} else if (month > 12) {
  alert('Wrong month')
} else if (day === daysInMoth) {
  day = 1;

  if (month === 12){
    month = 1;
    year = year + 1;
  } else {
    month = month + 1;
  }

  alert('Next day is ' + year + '.' + month + '.' + day)
} else {
  day = day + 1;
  alert('Next day is ' + year + '.' + month + '.' + day)
}

