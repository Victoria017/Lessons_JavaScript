//4
// Напишіть функцію, яка перевіряє, чи є передане їй число простим.

/*
function isNumSimple(number){
    let flag = false;
    let count = 0; //кількість дільників
    for(let i=1; i<=number; i++){
        if (number % i == 0) count++;
    }
    if (count == 2) flag = true;

    return flag;
}

//2 version

function isNumSimple(number){
    //let count = 0; //кількість дільників
    for(let i=2; i<=Math.sqrt(number) ; i++){
        if (number % i == 0) return false;
    }

    return true;
}

/*
console.log(isNumSimple(19));
console.log(isNumSimple(28));
console.log(isNumSimple(6));

*/
/*

//v3
function isNumSimple(number){
    let count = 0; //кількість дільників
    for(let i=1; i<=number; i++){
        if (number % i == 0) count++;
    }
    if (count == 2) return true
    else return false;
}


console.log(isNumSimple(19));
console.log(isNumSimple(28));
console.log(isNumSimple(6));



*/
//Підрахувати кількість простих чисел в діапазоні від 11 до 99

/*
function isNumSimple(number){
    let count = 0; //кількість дільників
    for(let i=1; i<=number; i++){
        if (number % i == 0) count++;
    }
    if (count == 2) return true
    else return false;
}

function numbers(min, max){
    let count = 0;
    for (let i = min; i < max; i++) {
        if (isNumSimple(i)) {
            count++;
            console.log('i=', i);
        }
    }
    console.log('count=', count);
    return count;
}

const kilkist = numbers(11, 99);
alert("кількість простих чисел:" + kilkist);


*/
//Підрахувати кількість простих чисел в діапазоні від 11 до 99

/*
function isNumSimple(number){
    let count = 0; //кількість дільників
    for(let i=1; i<=number; i++){
        if (number % i == 0) count++;
    }
    if (count == 2) return true
    else return false;
}

function countSimpleRange(a, b){
    let count = 0;
    for (let i = a; i < b; i++) {
        if (isNumSimple(i)) {
            count++;
            console.log('i=', i);
        }
    }
    console.log('count=', count);
    return count;
}

let a = +prompt("Input first number");
let b = +prompt("Input second number");


const kilkist = countSimpleRange(a, b);
alert("кількість простих чисел:" + kilkist);


*/


// Напишіть функцію, яка приймає число і виводить табли-
// цю множення для цього числа. Викличте функцію для всіх
// чисел від 2 до 9.

/*
function table(num){
    console.log("Table on " +num);
    for(let i=1; i<=9; i++){
        console.log(`${num} * ${i} = `, num * i);
    }

}
for(let i=1; i<=9; i++){
    table(i);
}
*/


//
// Напишіть функцію, яка виводить усі парні або непарні
// числа у вказаному користувачем діапазоні. Які числа ви-
// водити, визначається третім параметром типу bool (true –
// парні, false – непарні).


/*
function filterNumbers(a, b, odd) {
    let numbers = '';
    for ( let i=a; i<=b; i++) {
        if(odd == true && i % 2 === 0) {
            numbers += i + ', ';
        } else if(odd == false && i % 2 !== 0) {
            numbers += i + ', ';
        }
    }
    return numbers;

}

const res = filterNumbers(10,45, true);
const res2 = filterNumbers(10,45, false);


console.log("Парні " + res);
console.log("Непарні " + res2);
*/


// //Напишіть функцію, яка реалізує роботу оператора %. 
// Функція приймає 2 параметри та повертає залишок від ділення
// першого параметра на другий. У функції використовуйте
// тільки + - * /, а оператор % не використовувати.

/*
function mod(a,b) {
    while(a >= b) {
        a=a-b;
    }
    return a;
}

console.log("result=" + (2**3+mod(45,4)));

*/


//Напишіть функцію, яка приймає від 1 до 5 чисел і повертає
//більше з них.

/*
function suma(n1,n2=0,n3=0,n4=0,n5=0){

    return n1 + n2 + n3 + n4 + n5;

}
console.log("Suma = " + suma(4));
console.log("Suma = " + suma(4,5));
console.log("Suma = " + suma(4,5,6));
console.log("Suma = " + suma(4,5,6,7));
console.log("Suma = " + suma(4,5,6,7,8));

*/

//arguments => 0,1 ...? lenght (3,4,88,55,4)
// max (3,4,88,55,4)     arguments =>[3,4,88,55,4]
/*
function max(){
    let maxN = arguments[0];
    for(let i=0; i<=arguments.length; i++){
        console.log(arguments[i]);
        if(arguments[i] > maxN = arguments[i]);
    }
    return maxN;
}
let maxNumber = max(3,4,89,34,97);
console.log(maxNumber);
*/

// Напишіть функцію, яка приймає дату (день, місяць, рік) і
// повертає дату наступного дня у вигляді рядка «день.місяць.
// рік». Перевірку на


function hightYear(year){
   if(year % 4 == 0 && year % 100 !== 0) return true;
    else return false;
}

function nextDate(day ,month, year){
    let isHightYear  =  hightYear(year);

    let daysInMoth;
    
    switch (month) {
      case 2:
          if (isHightYear){
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
    
       return (day < 10 ? '0' + day : day) + '.' + (month < 10 ? '0' + month : month) + '.' + year;
    } else {
      day = day + 1;
      return (day < 10 ? '0' + day : day) + '.' +  (month < 10 ? '0' + month : month) + '.' + year;
    }
    
}

console.log(nextDate(28,02,2011));
console.log(nextDate(28,02,2012));
console.log(nextDate(31,12,2010));












