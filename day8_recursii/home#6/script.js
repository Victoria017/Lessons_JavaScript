// Home work 6

/* 
        Завдання 1
Створіть об’єкт, що описує автомобіль (виробник, модель, рік 
випуску, середня швидкість), і наступні функції для роботи з цим 
об’єктом
 */

let car1 = {
    producer: "BMW Motors",
    name: "BMW",
    age: 2005,
    speed: 100
}

// 1. Функція для виведення інформації про автомобіль на екран

function carModel(car) {
    console.log(car.producer, "\n",car.name,"\n", car.age,"\n", car.speed);
    alert("producer: " + car.producer+"\n"+ "name: " + car.name + "\n" + "age: " + car.age + "\n" + "speed: " + car.speed);
}

carModel(car1);

/* 
2. Функція для підрахунку необхідного часу для подолання 
переданої відстані із середньою швидкістю. Враховуйте, 
що через кожні 4 години дороги, водієві необхідно робити 
перерву на 1 годину
*/

let distance = + prompt("Input distance: ");

function timeLenght(car) {
    let result = distance / car.speed;
    return result;

}

function timeForBreak(time) {
    let lance = Math.trunc(time % 4);
    return lance;

}

function getTotalTime(car) {
    const time = timeLenght(car);
    console.log('Час в дорозі при середній швидкості =', time);
    
    const timeBreaks = timeForBreak(time);
    console.log('Час на перерву =', timeBreaks);

    return time + timeBreaks;
}

const totalTime = getTotalTime(car1);
console.log('Загальнйи час в дорозі=', totalTime);



///////////////////////////////////////////////////////////
/*
Завдання 2
Створіть об’єкт, що зберігає окремий чисельник і знаменник
дробу, і наступні функції для роботи з цим об’єктом.
4. Функція ділення 2 об’єктів-дробів.

*/

let frac1 = {
    numenator: 1,
    denominator: 3,

}

let frac2 = {
    numenator: 1,
    denominator: 2
}

function displayFrac(fraction) {
    console.log(`${fraction.numenator}/${fraction.denominator}`);
}

function displayFracReturn(fraction) {
    console.log(`${fraction.numenator}/${fraction.denominator}`);
}

//1. Функція додавання 2 об’єктів-дробів.


function addFrac(fraction1, fraction2) {
    let result = {
        numenator: fraction1.numenator * fraction2.denominator + fraction2.numenator * fraction1.denominator,
        denominator: fraction1.denominator * fraction2.denominator
    };
    return result;
}

displayFrac(frac1);
displayFrac(frac2);

console.log(" 1. Функція додавання 2 об’єктів-дробів.");
let addFraction = addFrac(frac1, frac2);
displayFrac(addFraction);


//2. Функція віднімання 2 об’єктів-дробів.


function substFraction(fraction1, fraction2) {
    let result = {
        numenator: fraction1.numenator * fraction2.denominator - fraction2.numenator * fraction1.denominator,
        denominator: fraction1.denominator * fraction2.denominator
        }
    return result;
}

console.log(" 2. Функція віднімання 2 об’єктів-дробів.");
let substResult = substFraction(frac1, frac2);
displayFrac(substResult);



///////////
//3. Функція множення 2 об’єктів-дробів.


function multiplyFrac(frac1, frac2) {
    let result = {
        numenator: frac1.numenator * frac2.numenator ,
        denominator: frac1.denominator * frac2.denominator
        }
    return result;

}

console.log(" 3.  Функція множення 2 об’єктів-дробів.");

let multiplicResult = multiplyFrac(frac1, frac2);
displayFrac(multiplicResult);


///// 4. Функція ділення 2 об’єктів-дробів.


function divisionFrac(frac1, frac2) {
    let result = {
        numenator: frac1.numenator * frac2.denominator,
        denominator: frac1.denominator * frac2.numenator 
        }
    return result;

}

console.log(" 3.  Функція ділення 2 об’єктів-дробів.");

let divisionResult = divisionFrac(frac1, frac2);
displayFrac(divisionResult);



//5. Функція скорочення об’єкта-дробу.

// знаходження найбільшого спільного дільника

function nsd(a, b){
    if(a === b) {
        return a;
    } else if(a > b) {
        return nsd(a - b, b);
    } else {
        return nsd(a, b - a);
    }
}



//скорочення дробу.

function custFrac(fraction) {
    let nsdFrac = nsd(fraction["numenator"], fraction["denominator"]);
    console.log(" Найбільший спільний дільник дробу = " + nsdFrac);
    fraction["numenator"] = fraction["numenator"] / nsdFrac;
    fraction["denominator"] = fraction["denominator"] / nsdFrac;
    return fraction;
}

console.log(" 5. Функція скорочення об’єкта-дробу.");
displayFrac(custFrac({numenator: 6, denominator: 8}));
*/
//////////////////////////////////////////////////
/* 
Завдання 3
Створіть об’єкт, що описує час (години, хвилини, секунди), і 
наступні функції для роботи з цим об’єктом.
1. Функція виведення часу на екран.
2. Функція зміни часу на передану кількість секунд.
3. Функція зміни часу на передану кількість хвилин.
4. Функція зміни часу на передану кількість годин.
Враховуйте те, що в останніх 3 функціях при зміні однієї частини часу, може змінитися й інша. Наприклад: якщо до часу 
«20:30:45» додати 30 секунд, то має вийти «20:31:15», а не «20:30:75»
*/

let time1 = {
    hour: 20,
    minute: 30,
    second: 45,
};

//1. Функція виведення часу на екран.
function displayTime(time) {
    console.log(time.hour + ":" + time.minute + ":" + time.second);
    alert(time.hour + ":" + time.minute + ":" + time.second);
}

displayTime(time1);

// 2. Функція зміни часу на передану кількість секунд.
//                           40
function changeSeconds(time, seconds) {
    //  85
    let newSeconds = time.second + seconds;
    if(newSeconds >= 60) {
        //    1
        const newMinute = Math.trunc(newSeconds / 60);
        //   31
        time.minute = time.minute + newMinute;
        //  25         85
        newSeconds = newSeconds % 60;
    }

    time.second = newSeconds;
    console.log('time.second=', time.second);
    return time.second;
}

console.log(changeSeconds(time1, 40));
displayTime(time1);

//3. Функція зміни часу на передану кількість хвилин.
//                           40
function changeMinutes(time, minutes) {
    //  70
    let newMinutes = time.minute + minutes;
    if(newMinutes >= 60) {
        //    1
        const newHour = Math.trunc(newMinutes / 60);
        //   21
        time.hour = time.hour + newHour;
        //  10         70
        newMinutes = newMinutes % 60;
    }

    time.minute = newMinutes;
    console.log('time.minute=', time.minute);
    return time.minute;
}

console.log(changeMinutes(time1, 40));
displayTime(time1);

// 4. Функція зміни часу на передану кількість годин.

let newHours;

function changeHour(time, hours) {
    newHours = time.hour + hours;
    time.hour = newHours;
    console.log('time.hour =' + time.hour);
    return time.hour;

}

console.log(changeHour(time1, 1));
displayTime(time1);
