
//      Home work 4 (number 6-10)

// 6.
// Напишіть функцію, яка приймає мінімальне і максимальне
// значення для діапазону і виводить ті числа з діапазону, які
// є досконалими. Використовуйте написану раніше функцію,
// щоб перевірити число на досконалість


function doskonalNum(n){
    let allDilnyks = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            allDilnyks += i;
            //console.log('i=', i);
        }
    }
    //console.log('allDilnyks=', allDilnyks);
    return allDilnyks === n;
}

function findDoskonaly(min, max){
    let allDoskonaly = '';
    for (let i = min; i < max; i++) {
        if (doskonalNum(i)) {
            allDoskonaly += (i + ', ');
            console.log('i=', i);
        }
    }
    console.log('allDoskonaly=', allDoskonaly);
    return allDoskonaly;
}

const min = +prompt("Введіть число: ");
const max = +prompt("Введіть число: ");


const doskonaly = findDoskonaly(min, max);
alert("Досконалими є числа:" + doskonaly);


// //7
// Напишіть функцію, яка приймає час (години, хвилини, секунди) і виводить його на
// екран у форматі «година: хвилини:секунди». Якщо при виклику функції хвилини
// та/або секунди не були передані, виводити їх як 00.



function formatTime(hour, minut, second) {
    let hms = hour;

    if(minut){
        hms += ':' + minut;
    } else {
        hms += ':00';
    }

    if(second){
        hms += ':' + second;
    } else {
        hms += ':00';
    }

    console.log(hms);
    return hms;
}

let hour = +prompt("Input hour: ");
let minut = +prompt("Input minut: ");
let second = +prompt("Input second: ");

const result = formatTime(hour, minut, second);

alert("Your time " + result);



//8
// Напишіть функцію, яка приймає години, хвилини та секунди і повертає
// цей час у секунди

function allSec(hour, minute, seconds){
    const findSeconds = (hour * 3600) + (minute * 60) + seconds;
    return findSeconds;

}
console.log(allSec(2, 15, 55));
console.log(allSec(20, 10, 16));
console.log(allSec(8, 15, 55));




// 9. Напищіть функцію, яка приймає кількість секунд, переводить їх у години,
// хвилини та секунди і повертає у вигляді рядка «година:хвилини:секунди»


function formatNumber(num) {
    return num < 10 ? '0' + num : num;
}

function allSeconds(a){

    let hour, minute, seconds;

    hour = Math.trunc(a / 3600);
    //console.log("Година: " + hour);
    a = a % 3600;

    minute = Math.trunc(a / 60);
    //console.log("Хвилина: " + minute);
    a = a % 60;

    seconds = a;
    //console.log(("Секунди: " + seconds));

    return formatNumber(hour) + ':' + formatNumber(minute) + ':' + formatNumber(seconds);
}

console.log(allSeconds(8413));
console.log(allSeconds(123));
console.log(allSeconds(1023));
console.log(allSeconds(65123));
console.log(allSeconds(12300));
console.log(allSeconds(105023));


// 10. Напишіть функцію, яка підраховує різницю між датами. Функція
//  приймає 6 параметрів, що описують 2 дати, 
// і повертає результат у вигляді рядка «година:хвилини:
// секунди». Під час виконання завдання використовуйте 
// функції з попередніх 2 завдань: спочатку обидві дати переведіть 
// у секунди, дізнайтеся різницю в секундах, а потім 
// різницю переведіть назад у «година:хвилини:секунди»


function calcSecondsInDate(year, month, day) {
    const secondsInDay = 24 * 60 * 60;
    return day * secondsInDay + month * 30 * secondsInDay + year * 365 * secondsInDay;
}

function calcRiznytcia(year1, month1, day1, year2, month2, day2) {
    const seconds1 = calcSecondsInDate(year1, month1, day1);
    const seconds2 = calcSecondsInDate(year2, month2, day2);
    const secondR = seconds2 - seconds1;
    console.log(secondR);

    const formatSeconds = allSeconds(secondR);

    return formatSeconds;
}

const riznytciaInSeconds = calcRiznytcia(2022, 5, 12, 2022, 5, 15);
console.log(riznytciaInSeconds);


// для знаходження різниці у часових діапазонах

function calcSecondsInDate2(hour, minute, seconds) {
    const secondsInDay2 = allSec(hour, minute, seconds);
    return secondsInDay2;
}

function calcRiznytcia(hour1, minute1, second1, hour2, minute2, second2) {
    const seconds1 = calcSecondsInDate2(hour1, minute1, second1);
    const seconds2 = calcSecondsInDate2(hour2, minute2, second2);
    const secondR = seconds2 - seconds1;
    console.log(secondR);

    const formatSeconds = allSeconds(secondR);

    return formatSeconds;
}

const riznytciaInSeconds1 = calcRiznytcia(15, 5, 12, 20, 12, 15);
console.log(riznytciaInSeconds1);

