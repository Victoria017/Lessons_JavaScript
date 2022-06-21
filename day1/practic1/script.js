'use strict'

//Практична робота №1
//1

let targetNumber = prompt("Введіть число");
let newNumber = Math.pow(targetNumber, 2);
alert('Ваше число в степені 2 становить: ' + newNumber);

//2

let firstNumberStr = prompt("Введіть перше число");
let secondNumberStr = prompt("Введіть друге число");
let yourNumber =( parseFloat(firstNumberStr) + parseFloat(secondNumberStr) ) / 2;
alert('Cереднє арифметичне цих чисел: ' + yourNumber);

//3

let squareLength = prompt("Яка довжина сторони квадрата?");
let squareS = parseFloat(squareLength) * parseFloat(squareLength);
alert('Площа квадрата: ' + squareS);
 

//4
let lengthKm = prompt("Введіть шлях у кілометрах");
const calcConvert = 0.621371;
let lenghtMl = parseFloat(lengthKm) * calcConvert;
alert('Ваш шлях у милях становить: ' + lenghtMl);


//5

let firstNumberStr1 = prompt("Введіть перше число");
let secondNumberStr1 = prompt("Введіть друге число");

let suma = parseFloat(firstNumberStr) + parseFloat(secondNumberStr);
let riznytcia = parseFloat(firstNumberStr) - parseFloat(secondNumberStr);
let dobootok = parseFloat(firstNumberStr) * parseFloat(secondNumberStr);
let chastka = parseFloat(firstNumberStr) / parseFloat(secondNumberStr);
alert(
    'Сума цих чисел: ' + suma +
    '\nРізниця цих чисел: ' + riznytcia +
    '\nДобуток цих чисел: ' + dobootok +
    '\nЧастка цих чисел: ' + chastka);


//6
let numberA = prompt("Введіть значення а");
let numberB = prompt("Введіть значення b");
let numberX = - parseFloat(numberB) / parseFloat(numberA);
alert('x =  ' + numberX);



//7 

let dateHours = prompt("Введіть години");
let dateMinute = prompt("Введіть хвилини");
const hours = 24;
const minute = 60;

let dateNewH  = hours - dateHours;
let dateNewM  = minute - dateMinute;
if (minute > 0) {
    dateNewH = dateNewH - 1;
}

alert('До наступного дня залишилося годин :' + dateNewH + 
    '\nхвилин : ' + dateNewM);


// //8
// Запросіть у користувача тризначне число та 
// виведіть другу цифру цього числа. Для вирішення завдання 
// використовуйте оператор % (залишок від ділення).
let numberThree = +prompt("Введіть тризначне число", 0);  
let numberSecond = Math.trunc(numberThree / 10) % 10;
alert(numberSecond);



//9
// Запросіть у користувача п’ятизначне число та перемістіть 
// останню цифру на початок (із числа 12345 має вийти число 51234). 

let number2 = +prompt("Введіть п’ятизначне число", 0);  
number2 = parseInt(number2); 
let resultNumber = String(number2 % 10) + Math.trunc(number2 / 10);
alert(resultNumber)


//10
// Зарплата працівника становить $250 + 10% від продажу. 
// Запросіть загальну суму продажу за місяць і підрахуйте 
// зарплату. 


let Summa = +prompt('Сума продажу становить: ');
const zarplata = 250 + Summa * 0.1;
alert(zarplata);
