// Затримки і інтервали

// setTimeout(function/compareDone, pause, arg1, arg1, ...) return identificator timera
// 1sec = 1000 milisec
// setTimeout()

function printWord() {
    console.log("Hi, world!");

}
setTimeout(printWord, 1000);

function printHelloName(name) {
    console.log(`Hello, ${name}`);

}
setTimeout(printHelloName, 2000, "Olga");

setTimeout("console.log(`Hello`)", 3000);

setTimeout(function() {
    console.log("Hi, world!");

}, 4000);

let id_timer = setTimeout(function(name) {
    console.log("Hi, " + name);

}, 5000, "Igor");

console.log("id timer = " + id_timer);

clearTimeout(id_timer);

//////////////////////////////////////////////////
/*
1. Написати функцію, яка послідовно буде виводити в консоль 
числа від а до b через інтервал 2секунди
*/

function print() {
    console.log(a);
    if (a !== b) {
        setTimeout(print, 20)
        a++;
    }
} 

let  a = 1;
let b = 10;
let timer = setTimeout(print, 2000);

 // copy
/*
let  a = 1;
let b = 10;
let timer = setTimeout(function print() {
    console.log(a);
    if (a !== b) {
        setTimeout(print, 20)
        a++;
    }
}, 2000);
*/


//setInterval( printWord, 6000);

// setInterval(function(){
//     alert("Hello");
// }, 2000);

function printNumber(a, b, interval) {
    let id_timer3 = setInterval(
        function () {
            document.write(a + ", ");
        //console.log(a);
        if (a == b) { 
        clearInterval(id_timer3);
        //return;
    }
        a++;
    }, 200);
    
}
printNumber(10, 20, 200);

///////////////////////////////////////////////////////////

const today = new Date();
console.log(today);
// 1/01/1970

let date1 = new Date(`05, 27, 2022`);
console.log(date1);

let date2 = new Date("12/05/2021");
console.log(date2);

console.log(date2.getMonth());
console.log(date1.getDate());
