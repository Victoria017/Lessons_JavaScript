'use strict'

//Завдання, в яких необхідно використати WHILE.

/*
//1. Виведіть # стільки разів, скільки вказав користувач

let n=+prompt("Input number for print #");
let step=0;
while(step<n) {
    console.log("#");
    step++;
}
console.log("finish while")

*/

// 2. Користувач ввів число, а на екран було виведено всі числа: 
//від введеного до 0

let cifra = '';
let number = +prompt("Input number");

while(number >= 0) {
    cifra = cifra + number + ',';
    console.log('number=' + number);
    console.log('cifra=' + cifra);
    console.log('---------------------');
    number = number - 1;
}
alert(cifra);