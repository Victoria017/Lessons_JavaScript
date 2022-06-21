
//      Home work 4 (number 1-5)

//1
// Напишіть функцію, яка приймає 2 числа і повертає -1, якщо
// перше менше, ніж друге; 1 - якщо перше більше, ніж друге;
// 0 - якщо числа рівні.


function retNumber(a,b){
    let resNumb;
    if(a < b){
        resNumb = -1;
    }else if(a > b){
        resNumb = 1;
    }else if(a === b){
        resNumb = 0;
    }
    return resNumb;
}
console.log(retNumber(5,9));

///////////// 2
// Напишіть функцію, яка вираховує факторіал переданого
// їй числа.

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


//3
// Напишіть функцію, яка приймає три окремі цифри і перетворює їх на одне число.
// Наприклад: цифри 1, 4, 9 перетворяться на число 149.

function numbers(n1, n2, n3){
    //let figur = n1.toString() + n2.toString() + n3.toString();
    let figur = `${n1}${n2}${n3}`;
    return figur;
}

let figur = numbers(1,4,9);
console.log(figur);

// 4
// Напишіть функцію, яка приймає довжину та ширину прямокутника і обчислює 
// його площу. 
// ? Якщо у функцію передали 1 параметр, вона вираховує площу квадрата

function square (a, b) {
    let sqr = b ? a * b : a * a;
    return sqr;
} 
console.log('2 and 4 S=', square(2, 4));
console.log('3 S=', square(3));



// //5
// Напишіть функцію, яка перевіряє, чи є передане їй число
// досконалим. Досконале число – це число, що дорівнює сумі
// всіх своїх власних дільників.


function doskonalNum(n){
    let allDilnyks = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            allDilnyks += i;
            console.log('i=', i);
        }
    }
    console.log('allDilnyks=', allDilnyks);
    return allDilnyks === n;
}

const num = +prompt("Введіть число: ");

const isDoskonale = doskonalNum(num);
if(isDoskonale){
    alert("Число досконале.")
}else{
    alert("Число не досконале.")
}

