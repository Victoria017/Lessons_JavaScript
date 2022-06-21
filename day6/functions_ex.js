// alert("text");
// prompt("text")
// confirm()


// function namef(param1, param2, ...  paramN){
//     statments;//body
// }
// namef(3,4,5);

//додати 3 заголовки h3 в документ

/*
for (let i=1; i<=3; i++){
    document.write("<h3>Header 3</h3>")
}
*/

/*
function showH3(){
    for (let i=1; i<=3; i++){
        document.write("<h3>Header 3</h3>");
    }
}
 showH3();
// showH3();
// showH3();


//2

function showH4(n){
    for(let i=1; i<=n; i++){
        document.write("<h4> Header 4 </h4>");
    }
}
showH4(3);

// // 3
// Напишіть функцію, яка приймає 2 числа та повертає менше з них.

function minValue(a,b){
    let min=(a<b) ? a: b;
    console.log(min);
}

minValue(2,5);
minValue(5,-3);
minValue(-7,5);

//                                    RETURN (повертає результат)

function minValueReturn(a,b){
    let min=(a < b) ? a: b;
    return min;
}
console.log(minValueReturn(2,45) + minValueReturn(-7,5));

// 2. Напишіть функцію, яка зводить передане число у вказаний
// ступінь.

function power(a,b){

    // let sum = Math.pow(a, b);
    // return sum;
    //те ж
    return Math.pow(a, b);
}
console.log(power(5,3));

//2.1
function powerM(a,b){
    let result=1;
    for(let count = 0; count<b; count++){
        result*=a;
    }
    return result;
}
console.log(powerM(2,4) + powerM(3,2));
////
console.log(powerM(88)); //замість а = 1

//2.2
function minus(a,b){
    if(b === undefined) return -a;
//    else return a - b;
   return a - b;
}
//console.log(minus(a));
//?
const powerNumber = function(a,b){
    return powerM(a,b);
}
console.log(powerNumber(3,5));


////
/*
let myfunk = minus;
console.log(myfunk(2,3));
*/
// 3. Напишіть функцію, яка приймає 2 числа та знак (+ - * /),
// підраховує приклад і повертає результат.

// result = calc(2,3,"+") =>5
/*
function calc(n1,n2,op){
    let rezult;
    switch(op){
        case "+": rezult = n1 + n2; break;
        case "-": rezult = n1 - n2; break;
        case "*": rezult = n1 * n2; break;
        case "/": rezult = n1 / n2; break;
        if (n2 === 0) rezult = n1; 
        else rezult = n1 / n2;
        break;
        default:
            // alert("Operation error!!!");
            rezult = undefined;
    }
    return rezult;
}
console.log(`4*24=${calc(4,24,"*")}`);
let r1 = calc(5,3,"+");
console.log(calc(r1,4,"*"));



/////
//(5+3)*4=32

console.log(calc(calc(5,3,"*"),4,"*"));




/*
let n1 = 5;
let n2 = 7;
let op = prompt("input operation: ");
let rezult;

switch(op){
    case "+": rezult = n1 + n2; break;
    case "-": rezult = n1 - n2; break;
    case "*": rezult = n1 * n2; break;
    case "/": rezult = n1 / n2; break;
    if (n2 === 0) rezult = n1; 
    else rezult = n1 / n2;
    break;
    default:
        alert("Operation error!!!");
}
console.log("result = " + rezult);
*/
////////////////////////////////////////////////////////////////////////////
//Кількість цифр
// inputN = +prompt("Input number:");
// let countCifr = 0;  //leftN

// while(workingN !== 0){          
//     workingN = Math.trunc(workingN/10);
//     console.log(workingN);
//     countCifr++;
// }
// console.log(countCifr);
/*
function lenNumber(number){
    let countCifr = 0;  //leftN
    while(number !== 0){          
        number = Math.trunc(number/10);
        countCifr++;
    }
    // console.log(countCifr+" cifr");
    return countCifr;
}
let lenN = lenNumber(4567542);
console.log(lenN + " cifr");

number = +prompt("Input number");
console.log(`${number} has ${lenNumber(number)} digits`);

////////////////////////////////////////////////////////////////////////////

// 8. Напишіть функцію, яка приймає від 1 до 5 чисел і повертає їх суму.

let args = ["+", "-", "*", "/"]

function sum(){
    let result = 0;
    for(let arg of arguments){
        result+=arg;
    }
    return result;
}
console.log(sum());
console.log(sum(5));
console.log(sum(6,7));

function sumN(text,...numbers){
    console.log(text);
    let suma = 0;
    for(let number in numbers){
        // console.log(number);
        suma += numbers[number];
    }
    return suma;
}
sumN("Hello", (2,3,-6,5));

*/





































