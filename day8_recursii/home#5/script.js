// Home work 5
// 1 
//Напишіть функцію зведення числа у ступінь.

function power(a, b) {
    if(b === 0) {
        return 1;
    } else {
        return a * power(a, b - 1);
    }
}

console.log(power(5, 3));
console.log(power(2, 5));
console.log(power(6, 3));


/*
a = 5 * 5 * 5 * 1 = 125
b = 3   2   1   0
*/

///////////
// 2 
//Напишіть функцію пошуку найбільшого спільного дільника


function nsd(a, b){
    if(a === b) {
        return a;
    } else if(a > b) {
        return nsd(a - b, b);
    } else {
        return nsd(a, b - a);
    }
}

console.log("Найбільший спільний дільник: " + nsd(12, 16));
console.log("Найбільший спільний дільник: " + nsd(22, 110));
console.log("Найбільший спільний дільник: " + nsd(22, 33));


/// 3 
//Напишіть функцію Пошук максимальної цифри у числі

function maxDigit(a, max) {
    
    if(a === 0) return max;
    if (a%10>max) max = a%10;
    return maxDigit(Math.trunc(a/10), max);
}
console.log(maxDigit(1543122, 0));
console.log(maxDigit(15993122, 0));


//4
//Напишіть функцію, яка визначає чи є передане число простим

function isPrime(num, col) {
    col = col ? col : 2; //(col || 2)

    if(num <= col) return true;  
    if(num % col === 0) return false;  
    return isPrime(num, col + 1);  
}

console.log(isPrime(2)); 
console.log(isPrime(3)); 
console.log(isPrime(4)); 
console.log(isPrime(5)); 
console.log(isPrime(7)); 

 
//5. Напишіть функцію для виведення усіх множників, переданих числу 
// у зростаючому порядку.  Наприклад: число 18 – множники 2*3*3.


function numberM(a, dilnik = 2) {
    if(a / dilnik == 1) { 
        //console.log('step-1', a, dilnik); 
        return dilnik;
    } else if(a % dilnik == 0) {
        //console.log('step-2', a, dilnik); 
        return  `${dilnik} * ` + numberM(a / dilnik, dilnik);
    }
    //console.log('step-3', a, dilnik); 
    return  numberM(a, dilnik + 1);
}

console.log(numberM(18)); 
console.log(numberM(19)); 
console.log(numberM(20)); 
console.log(numberM(21)); 
console.log(numberM(22)); 
console.log(numberM(23)); 

/*
step-2 18 2
step-3 9 2
step-2 9 3
step-1 3 3
2 * 3 * 3
*/

//6
/*
Написати функцію, яка повертає число Фібоначчі за переданим порядковим 
номером. 
Числа Фібоначчі: 1, 1, 2, 3, 5, 8, 13 ... Ряд ґрунтується на 
тому, що кожне число дорівнює сумі двох попередніх чисел. 
Наприклад: порядковий номер 3 – число 2, порядковий 
номер 6 – число 8
*/
let numIndex = +prompt("input number: ")
function fibonacci(numFib) {
    return numFib <= 1 ? numFib : fibonacci(numFib - 1) + fibonacci(numFib - 2);
  }
  
console.log( fibonacci(numIndex) );  //=8
alert( fibonacci(numIndex) ); 