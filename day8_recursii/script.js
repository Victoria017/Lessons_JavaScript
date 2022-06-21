//1*2*3=> 3

/*
function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        console.log(i);
        result *= i;
    }
    return result;
}

const myNumb = +prompt("Введіть число для знаходження факторіалу:")
const myFact = factorial(myNumb);
alert("факторіал переданого числа :" + myFact);

console.log("факторіал переданого числа :" + myFact);
*/

/*
let n = +prompt("Input n: ")
let factorial = 1;
for(let i=2; i<=n; i++){
    factorial = factorial * i;

}
alert(factorial);
*/

/*
function factorial1(n) {
    let factorial = 1;
    for(let i = 2; i <= n; i++) {
        factorial = factorial * i;
    
    }
    return factorial;
}

alert(factorial1(6));

//0=1!
//1=1!
//1*2=2!    => 1! * 2 = 2!
//(1*2)*3=3!  => 2! * 3 = 3!
//(1*2*3)*4=4!  => 3! * 4 = 4!

// 1*2*3*...*(n-1)*n => (n-1)!* n =n!

//1) повернення певного значення при певному значенні параметру
//2) повторний виклик функції самої себе

function factorial(n){
    if (n == 1) return 1
    else return factorial(n - 1) * n;
}

alert(factorial(3));
alert(factorial(4));


// n = 4
// factorial(4) => factorial(3)*4 => (factorial(2)*3)*4 => ((factorial(1)*2)*3)*4=> (((factorial(0)*1)*2)*3)*4 = 24

//              2
// Напишіть функцію, яка виводить усі числа із заданого
// користувачем діапазону у прямому порядку. 
//  ((("1") + "2") + "3") + "4"


let number = +prompt("Input number");

function print(n) {
    if (n == 1) return "1";
    else return print(n - 1) + ", " + n;
}

alert(print(number));

//І ще одну функцію – для виведення у зворотному порядку.
// 4 3 2 1



let number1 = +prompt("Input number");

function print1(n) {
    if (n == 1) return "1";
    else return n + ", " + print1(n - 1);
}

alert(print1(number1));


/////
/*
Напишіть функцію, яка приймає число і виводить відпо-
відну кількість вкладених пар круглих дужок.
Наприклад: число 4 – (((()))).
*/
/*
function parnaD(n){
    if (n == 1) return "()";
    else return "(" + parnaD(n - 1) + ")";
}
console.log(parnaD(2));
console.log(parnaD(3));
console.log(parnaD(4));


/////////
/*
Напишіть функцію, яка виводить передане їй число па-
ліндромом (число-перевертень).
Наприклад: число 1234 вивести як 4321.
*/
/*
function palindrom(a){
    console.log('a=', a);
    if(a === 0) return "";
    else return a%10 + palindrom(Math.trunc(a / 10));
    }

console.log(palindrom(1234));

//version2
/*
function palindrom(a){
    console.log('a=', a);
    if(a === 0) {
        return '';
    } else {
        const lastNumber = a % 10;
        return lastNumber + '' + palindrom(Math.trunc(a / 10));
    }

}

console.log(palindrom(12345678));
*/


///////////
// Напишіть функцію зведення числа у ступінь.
/*
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
// Напишіть функцію пошуку найбільшого спільного дільника

/*
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


///  Напишіть функцію Пошук максимальної цифри у числі
//125689
function maxDigit(a, max) {
    
    if(a === 0) return max;
    if (a%10>max) max = a%10;
    return maxDigit(Math.trunc(a/10), max);
    /*
    else {
        const nextNumber = a % 10;
        return maxDigit(Math.trunc(a / 10), !max || nextNumber > max ? nextNumber : max);
    }
    */
/*
console.log(maxDigit(1543122, 0));
console.log(maxDigit(15993122, 0));

*/
