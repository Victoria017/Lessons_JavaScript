/*
let myVar;
if (myVar){
    console.log('Змінна myVar має значення: ${myVar}');
}
if(myVar !== underfined && myVar !== null) {
    console.log('Змінна myVar має значення: ${myVar}');
}
let flag = true;
let x= NaN;
if(x) {
    //false

}
let st="";
if(st){
    //false
}
// Object
let user = {name:"Anatoliy"}; //true
let human={}; // true
*/
/*
//x^2+y^2=R^2
//(x-x1)^2+(y-y1)^2=R^2
let pointX = 23, pointY = 10;
let R = 34;
if (pointX ** 2 + pointY ** 2 <= R**2) {
    console.log("true");
} else {
    console.log("false");
}
//#1

    0-500  --> 0%
    > 500  --> 5%
    >1000  --> 10%
    >5000   --> 15%
 
    
let suma = +prompt("Input suma: ");
if (suma>500 && suma < 1000) {
    console.log(suma - suma * 0.05); 
} else if  (suma>=1000 && suma < 5000) {
            console.log(suma - suma * 0.1);
} else if (suma > 5000) {
            console.log(suma - suma * 0.15);
} else if (suma>0 && suma < 500){
        console.log(suma);
}

if(suma >= 5000){
    console.log("15%")
    console.log(suma - suma * 0.15);
} else if  (suma>=1000) {
    console.log("10%")
    console.log(suma - suma * 0.1);
} else if  (suma>=500) {
    console.log("5%")
    console.log(suma - suma * 0.05);
} else {
    console.log("0%")
    console.log(suma);
} 

*/
//#2
//Порахувати кількість цифр у числі і вивести кожну цифру у консолі. 
//Наприклад, число  *46543* 2454  9 цифр
/*
let countNumber=0;
let cifra;
let number = +prompt("Input number for count");

cifra = number % 10; //4
console.log(cifra);
number = Math.trunc(number/10); //245
countNumber ++;

cifra = number % 10; //5
console.log(cifra);
number = Math.trunc(number/10); //24
countNumber ++;

cifra = number % 10; //4
console.log(cifra);
number = Math.trunc(number/10); //2
countNumber ++;

cifra = number % 10; //2
console.log(cifra);
number = Math.trunc(number/10); //0
countNumber ++;
*/
//коротка версія
/*
while(number>0) {
    cifra = number % 10; 
    console.log(cifra);
    number = Math.trunc(number/10); 
    countNumber++;
}
console.log("countNumber=" + countNumber);
*/

//1 
//Виведіть # стільки разів, скільки вказав користувач.
//якщо п=3, то степ =3

/*
let n=+prompt("Input number for print #");
let step=0;
while(step<n) {
    console.log("#");
    step++;
}
console.log("finish while");

// step<n (3)
// 0<3 step = 1
// 1<3 step = 2
// 2<3 step = 3
// 3<3 step = 4

*/

let n=+prompt("Input number for print #");
let step=0;
while(step<n) {
    console.log("#");
    step++;
}
console.log("finish while");