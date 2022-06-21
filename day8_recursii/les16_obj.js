let rectangular = {
    x1 : 0,
    y1 : 5,
    x2 : 6,
    y2 : 0

}

let rectangular1 = {
    topLeft : {
        x : 0,
        y : 5,
    },
    bottomRight : {
        x : 6,
        y : 0
    }
}

console.log(`TopLeft point (${rectangular.x1}, ${rectangular.y1})`);
console.log(`BottomRight point (${rectangular.x2}, ${rectangular.y2})`);


console.log(`TopLeft point (${rectangular["x1"]}, ${rectangular["y1"]})`);
console.log(`BottomRight point (${rectangular["x2"]}, ${rectangular["y2"]})`);

console.log(rectangular1.topLeft.x);
console.log(rectangular1.topLeft.y);
console.log(rectangular1.bottomRight.x);
console.log(rectangular1.bottomRight.y);

//////////////////////////
/*
function change(x) {
    x = x*2;
    console.log("x in change: ", x);
}
let number = 10;
console.log("n befor change: ", number);
change(number);
console.log("n after change: ", number);

function changeUserInfo(user) {
    //user["name"] - "Andre";
    user.name = "Andre";
}

let student = {
    name: "Igor",
    age: 34
}

console.log("student befor change: ", student.name," ", student.age);
changeUserInfo(student);
console.log("student after change: ", student.name," ", student.age);
*/

///////////////////

function rectangularInfo(rectangular) {
    console.log(`TopLeft point (${rectangular.x1}, ${rectangular.y1})`);
    console.log(`BottomRight point (${rectangular.x2}, ${rectangular.y2})`);

}

rectangularInfo(rectangular);

//////////////

function rectangularInfo1(obj) {
    console.log("TopLeft point: (",obj.topLeft.x, ";", obj.topLeft.y,")"); // obj["topLeft"]["x"]  obj["topLeft"]["y"]

    console.log("BottomRight point: (",obj.bottomRight.x,"; ",obj.bottomRight.y,")"); //obj["bottomRight"]["x"] obj["bottomRight"]["y"]
}

rectangularInfo1(rectangular1);

///////////////

/*
function changeUser(user) {
    user = {
        name: "Ivanko"
    };

}

console.log("student befor change: ", student.name," ", student.age);
changeUser(student);
console.log("student after change: ", student.name," ", student.age);
*/


/////////////////////
/*
let rectangular1 = {
    topLeft : {
        x : 0,
        y : 5,
    },
    bottomRight : {
        x : 6,
        y : 0
    }
}
*/
//1.2 Функція приймає об’єкт-прямокутник і повертає його ширину.

function rectWidth(rectangular) {
    return Math.abs(rectangular.topLeft.x - rectangular.bottomRight.x);

}

alert("width rectangular = " + rectWidth(rectangular1));

//////////////////

//1.3 Функція приймає об’єкт-прямокутник і повертає його висоту

function rectHight(rectangular) {
    return Math.abs(rectangular.topLeft.y - rectangular.bottomRight.y);

}

alert("Height rectangular = " + rectHight(rectangular1));

/////////////////
/*
1.4 Функція приймає об’єкт-прямокутник і повертає його площу.

let rectangular = {
    x1 : 0,
    y1 : 5,
    x2 : 6,
    y2 : 0

}

*/

function squareRect(rectangular) {
    return Math.abs(rectangular.x2 - rectangular.x1)*Math.abs(rectangular.y2 - rectangular.y1);
}
console.log(squareRect(rectangular));

//////////////

// 1.5 Функція приймає об’єкт-прямокутник і повертає його периметр
/*
let rectangular = {
    x1 : 0,
    y1 : 5,
    x2 : 6,
    y2 : 0

}
*/

function squareRect(rectangular) {
    return 2 * (Math.abs(rectangular.x2 - rectangular.x1) + Math.abs(rectangular.y2 - rectangular.y1));
}
console.log(squareRect(rectangular));


// 1.6 Функція зміни ширини прямокутника. Вона приймає 
// об’єкт-прямокутник і на скільки одиниць змінити ширину
/*
let rectangular1 = {
    topLeft : {
        x : 0,
        y : 5,
    },
    bottomRight : {
        x : 6,
        y : 0
    }
}
*/

function changeWRect1(rectangular, width) {
    rectangular.bottomRight.x = rectangular.bottomRight.x + width;
    return rectWidth(rectangular);
}

console.log(changeWRect1(rectangular1, 4));
rectangularInfo1(rectangular1);


//////////////////

// 1.7 Функція зміни висоти прямокутника. Вона приймає 
// об’єкт-прямокутник і на скільки одиниць змінити висоту.


function movingX(rectangular1, step){
    rectangular1.topLeft.x+=step;
    rectangular1.bottomRight.x+=step;
}

movingX(rectangular1, -7);
rectangularInfo1(rectangular1);



//////////////
/*
Завдання 2
Створіть об’єкт, що зберігає окремий чисельник і знаменник
дробу, і наступні функції для роботи з цим об’єктом.
1. Функція додавання 2 об’єктів-дробів.

2. Функція віднімання 2 об’єктів-дробів.
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

function addFrac(fraction1, fraction2) {
    let rezult = {
        numenator: fraction1.numenator * fraction2.denominator + fraction2.numenator * fraction1.denominator,
        denominator: fraction1.denominator * fraction2.denominator
        }
    return rezult;
}

displayFrac(frac1);
displayFrac(frac2);


let addFraction = addFrac(frac1, frac2);
displayFrac(addFraction);

///////////
//3. Функція множення 2 об’єктів-дробів.
/*
function multiplyFrac(frac1, frac2) {
    let rezult = {
        numenator: frac1.numenator * frac2.numenator ,
        denominator: frac1.denominator * frac2.denominator
        }
    return rezult;

}

console.log(displayFracReturn(frac1), "", displayFracReturn(frac2),"=", displayFracReturn(multiplyFrac(frac1,frac2)));

*/

/////
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

//console.log("Найбільший спільний дільник: " + nsd(12, 16));

//скорочення дробу.

function custFrac(fraction) {
    let nsdFrac = nsd(fraction["numenator"], fraction["denominator"]);
    console.log(nsdFrac);
    fraction["numenator"] = fraction["numenator"] / nsdFrac;
    fraction["denominator"] = fraction["denominator"] / nsdFrac;
    return fraction;
}

displayFrac(custFrac({numenator: 6, denominator: 8}));


