// Home work 7 (to 10.06.2022)

/*
1. Написати програму, яка визначає останнє додатне і перше від'ємне 
число в масиві.
*/

const array1 = [4, 2, 8, -5, 2, -7, 3, -9];

function findNumbers(arr) {
    let positiveNumber;
    let negativeNumber;

    for(let i = 1; i<arr.length; i++) {
        if(arr[i] > 0) {
            positiveNumber = arr[i];
        } else if(arr[i] < 0 && !negativeNumber) {
            negativeNumber = arr[i];
        }

    }
    console.log("останнє додатне число " + positiveNumber);
    console.log("перше від'ємне число" + negativeNumber);

    
    return {
        lastPositiveNumber: positiveNumber,
        firstNegativeNumber: negativeNumber,
    };
}

const res = findNumbers(array1);
console.log(res);
console.log("================================");

/*
2. Написати функцію, яка знаходить мінімальне й максимальне значення 
в масиві і виводить їх на екран.
*/


function findMinMaxNumbers(arr) {
    let maxItem = arr[0]; 
    let minItem = arr[0]; 

    for(let i = 1; i<arr.length; i++) {
        if(arr[i] > maxItem) {
            maxItem = arr[i];
        } else if(arr[i] < minItem) {
            minItem = arr[i];
        }

    }
    return {
        maxNumber: maxItem,
        minNumber: minItem,
    };
}


const res2 = findMinMaxNumbers(array1);
console.log(res2);
console.log("================================");


/*
3. Дано масив, що містить дані температури повітря за кожен день 
травня. Написати функції, що визначають: а) середню температуру за 
місяць; б) скільки разів температура повітря опускалася нижче за 
зазначену мітку.
*/
const array2 = [10, 11, 18, 15, 11, 17, 13, 19, 22, 21, 14, 11, 18, 15, 11, 17, 13, 19, 22, 21, 14, 11, 18, 15, 11, 17, 13, 19, 22, 21, 30];

function findAverageTemp(arr) {
    let sumaTemperatures = 0;
    for(let i = 0; i<arr.length; i++) {
        sumaTemperatures += arr[i];
    }
    return Math.trunc(sumaTemperatures / arr.length) ;

}

const res4 = findAverageTemp(array2);
console.log('Average Temperature: ', res4);

function calcTemperatureFalls(arr, controlTemperuch) {
    let count = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] < controlTemperuch) {
            count += 1;
        }
    }
    return count;
}


let countTemperature = calcTemperatureFalls(array2, 15);
console.log('countTemperature: ', countTemperature);
console.log("================================");

/*
4. У масиві зберігається інформація про вартість 10 марок автомобілів. 
Написати функцію, що визначає суму найдорожчого автомобіля і 
дізнатися його номер. Якщо таких автомобілів декілька, визначити: а) 
номер першого такого автомобіля; б) номер останнього такого 
автомобіля. 
*/

//let array3 = [150, 800, 740, 560, 450, 770, 880, 990, 120, 990];

let array3 = [
    {brand: "BMW", price: 1150},
    {brand: "Audi", price: 800},
    {brand: "Honda", price: 740},
    {brand: "Opel", price: 560},
    {brand: "Suzuki", price: 450},
    {brand: "Hyundai", price: 770},
    {brand: "Ford", price: 880},
    {brand: "KIA", price: 990},
    {brand: "Mazda", price: 120},
    {brand: "Tesla ", price: 1150},

];


function findNumbCars(arr) {
    console.log(`arr[0]=`, arr[0]);
    let carWithMaxPrice = arr[0];
    let indexFirstCar = 0;
    let indexLastCar = 0;

    for(let i = 1; i < arr.length; i++) {
        console.log(`arr[${i}]=`, arr[i]);
        if(arr[i].price > carWithMaxPrice.price) {
            carWithMaxPrice = arr[i];
            indexFirstCar = i;
            indexLastCar = i;
        } else if(arr[i].price == carWithMaxPrice.price) {
            indexLastCar = i;
        }
    } 
    
    return {
        maxPrice: carWithMaxPrice.price,
        indexFirstCar,
        indexLastCar,
    } 
        
}

console.log(findNumbCars(array3));
console.log("================================");




/*
5. Написати функцію, яка знаходить у масиві значення, що повторюються 
два і більше разів, і виводить їх на екран
*/

let array4 = [11,12,13,11,12,13,11,15,16];

function findDouble(arr) {
    const counterObj = {};
    const twoAndMore = [];

    for(let i = 0; i < arr.length; i++) {
        if(counterObj[arr[i]]) {
            counterObj[arr[i]]++;

            if(counterObj[arr[i]] === 2) {
                twoAndMore.push(arr[i]);
            }
        } else {
            counterObj[arr[i]] = 1;
        }
    }
    
    console.log('counterObj=', counterObj);

    return twoAndMore;

}
console.log(findDouble(array4))