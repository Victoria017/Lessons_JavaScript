"use strict";
//Практична робота 2

// 1. Запросіть у користувача число та визначіть чи воно додатне,
// від’ємне або нуль

let numberBool = +prompt("Input number");
if (numberBool === 0) {
  alert("Ви ввели число 0.");
}
if (numberBool > 0) {
  alert("Ви ввели додатне число.");
}
if (numberBool < 0) {
  alert("Ви ввели від’ємне число.");
}

// 2 Запросіть у користувача його вік та перевірте коректність
// введених даних (0–120 років)

let yourAge = +prompt("Input your age");
if (yourAge >= 0 && yourAge <= 120) {
  alert("Все вірно!");
} else {
  alert("Щось пішло не так!");
}

//3 Запросіть у користувача число і виведіть його модуль
//  (||7| = 7, |-7| = 7)
let numberBool1 = +prompt("Input number");
if (numberBool1 < 0) {
  alert(numberBool1 * -1);
} else if (numberBool1 >= 0) {
  alert(numberBool1);
}

// 4. Запросіть у користувача час (години, хвилини, секунди) та
// перевірте коректність введених даних


let hour, minute, second;
hour = +prompt('Enter hour');
minute = +prompt('Enter minute');
second = +prompt('Enter second');
if (hour < 0 || hour >= 24) {
    alert('Години вказані невірно!')
}
if (minute < 0 || minute > 60) {
    alert('хвилини вказані невірно!')
}
if (second < 0 || second > 60) {
    alert('секунди вказані невірно!')
}


// //5
// Запросіть координати точки (x, y) та визначіть 
// номер чверті, в яку потрапила ця точка. 
//Необхідно врахувати випади
//  потрапляння точки на осі X або Y або на початок координат


let coordinateX, coordinateY;
coordinateX = +prompt('Enter X');
coordinateY = +prompt('Enter Y');
if (coordinateX === 0 && coordinateY === 0) {
    alert("Точки знаходяться на початку координат.")
}
if (coordinateX === 0 && coordinateY !== 0) {
    alert("Точки знаходяться на осі Y.")
}
if (coordinateX !== 0 && coordinateY === 0) {
    alert("Точки знаходяться на осі X.")
}
if (coordinateX > 0 && coordinateY > 0) {
    alert("Точки знаходяться в І чверті координат.")
}
if (coordinateX < 0 && coordinateY > 0) {
    alert("Точки знаходяться в ІI чверті координат.")
}
if (coordinateX < 0 && coordinateY < 0) {
    alert("Точки знаходяться в ІII чверті координат.")
}

if (coordinateX > 0 && coordinateY < 0) {
    alert("Точки знаходяться в ІV чверті координат.")
}

//SWITCH.

// 1. Запросіть у користувача номер місяця та виведіть на екран 
// його назву

let month = +prompt("Input number month");
switch (month) {
  case 1:
    alert("Січень");
    break;
  case 2:
    alert("Лютий");
    break;
  case 3:
    alert("Березень");
    break;
  case 4:
    alert("Квітень");
    break;
  case 5:
    alert("Травень");
    break;
  case 6:
    alert("Червень");
    break;
  case 7:
    alert("Липень");
    break;
  case 8:
    alert("Серпень");
    break;
  case 9:
    alert("Вересень");
    break;
  case 10:
    alert("Жовтень");
    break;
  case 11:
    alert("Листопад");
    break;
  case 12:
    alert("Грудень");
    break;
}

//2
// Реалізуйте калькулятор. Користувач вводить 2 числа та 
// знак + - * / 
// Залежно від введеного знака розв’яжіть приклад та виведіть результат.


let numberA = +prompt("Input first number");
let numberB = +prompt("Input second number");
let action = prompt("Input action (+, -, *, /");

switch (action) {
  case "+":
    alert(numberA + numberB);
    break;
  case "-":
    alert(numberA - numberB);
    break;
  case "*":
    alert(numberA * numberB);
    break;
  case "/":
    alert(numberA / numberB);
    break;
}


// тернарний оператор

//1. Запросіть 2 числа і виведіть більше з них.


let number1 = +prompt("Input first number");
let number2 = +prompt("Input second number");
//(number1 > number2) ? alert('Більше число ' + number1) : alert('Більше число ' + number2);
alert('Більше число ' + (number1 > number2 ? number1 : number2));


//2. Запросіть 1 число та перевірте його на кратність 5.

let yourNumber = +prompt("Input number");

if (yourNumber % 5 === 0) {
    alert(yourNumber + ' Кратне числу 5!');
} else {
    alert('Не кратне числу 5!');
  }


// 3. Запросіть у користувача назву планети. Якщо користувач 
// ввів «Земля» або «земля», то виведіть «Привіт, землянине!». 
// В інших випадках виведіть «Привіт, інопланетянине!».


let planet = prompt('Вкажіть назву планети на якій проживаєте');

if (planet.toUpperCase() === 'ЗЕМЛЯ') {
  alert('Привіт, землянине!');
} else {
  alert('Привіт, інопланетянине!.');
}

