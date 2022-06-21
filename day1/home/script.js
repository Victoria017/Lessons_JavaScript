'use strict'

//Домашня робота №1

//1
let firstName;
firstName = prompt("Введіть своє ім'я, будь ласка!");
console.log(firstName);
let text=`Привіт, ${firstName}!`;
alert(text);

//2
let yourBirthday;
yourBirthday = prompt("Введіть рік свого народження");
const currentYear = 2022;
const age = currentYear - yourBirthday;
console.log('Вам: ', age);
alert('Вам: ' + age);

//3
let squareLength;
squareLength = prompt("Яка довжина сторони квадрата?");
console.log('squareP=', squareLength * 4);
alert('Периметр квадрата: ' + squareLength * 4);

//4
let circleLength;
circleLength = prompt("Який радіус кола?");
console.log('circleS=',Math.PI*circleLength*circleLength);
alert('Площа кола: ' + Math.PI*circleLength*circleLength);


//5
let lengthTown;
let clockHour;
lengthTown = prompt("Яка відстань між містами в км?");
clockHour = prompt("За скільки годин Ви хочете дістатися?");
console.log('speed=', lengthTown / clockHour);
alert('Ваша оптимальна швидкість: ' + lengthTown / clockHour);


///6
let summaUsa;
let summaEur;
summaUsa = prompt("Сума конвертації в USD?");
const kursEURToUSD = 1.09;
console.log('summaEur=', summaUsa / kursEURToUSD);
alert ('Ви отримаєте:' +  summaUsa / kursEURToUSD + 'EUR');

//7
let sizeGb;
let sizeFile;
let convertMb;
sizeGb = prompt("Введіть обсяг флешки у ГБ");
const sizeMbUser = 820;
const fileConvert = 1024;
console.log('sizeFile=', sizeGb * fileConvert / sizeMbUser);
alert ('Ви отримаєте:' +  sizeGb * fileConvert / sizeMbUser + 'файлів');



//8
let summaMoney;
let summaOne;
summaMoney = prompt("Введіть суму");
summaOne = prompt("Введіть вартість однієї шоколадки");
console.log('sizeFile=', summaMoney / summaOne);
alert ('Ви можете купити:' + summaMoney / summaOne + 'шоколадок');



//9
let number = +prompt("Enter number");
alert ('Palindrome' + number % 10 + Math.trunc(number / 10) % 10 + Math.trunc(number / 100));


//10
let yourNumb = +prompt("Введіть ціле число");
let result = (yourNumb % 2 == 0);
alert(result ? 'parne' : 'ne parne');

