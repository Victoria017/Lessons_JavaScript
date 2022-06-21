// Home work 8 (to 12.06.2022)
//Module 2_Week_2 N2,3


/*
Завдання 2
Створить масив, який описує чек у магазині. Кожен елемент 
масиву складається із назви товару, кількості та ціни за одиницю 
товару. 
Напишіть наступні функції. 
1. Виведення чека на екран.
2. Підрахунок загальної суми покупки.
3. Отримання найдорожчої покупки у чеку.
4. Підрахунок середньої вартості одного товару у чеку.
*/
console.warn('Завдання 2');

let check1 = [
    {productsName: "хліб", productsSize: 2, productPrice: 33},
    {productsName: "сир", productsSize: 1, productPrice: 22},
    {productsName: "молоко", productsSize: 1, productPrice: 25},
    {productsName: "вода", productsSize: 1, productPrice: 16},
    {productsName: "сік", productsSize: 3, productPrice: 40},
];

function displayCheck(check) {
    let checkContent = '';

    checkContent = checkContent + '--------------------------' + '\n';
    for(let i = 0; i < check.length; i++){
        checkContent = checkContent + check[i].productsName + ' ' + check[i].productsSize + ' ' + check[i].productPrice + '\n';
    }
    checkContent = checkContent + '--------------------------' + '\n';
    console.log(checkContent);
}

displayCheck(check1);

function calcProductsCount(check) {
    let count = 0;
    for(let i = 0; i < check.length; i++) {
        count = count + check[i].productsSize;
    }
    return count;
}
console.log("Кількість товарів:" + calcProductsCount(check1));

function calcTotalSumm(check) {
    let sumaCheck = 0;

    for(let i = 0; i < check.length; i++) {
        sumaCheck = sumaCheck + check[i].productPrice * check[i].productsSize;
    }
    return sumaCheck;
}
console.log("Total suma = " + calcTotalSumm(check1));

function calcAveragePrice(check) {
    let averagePrice = Math.trunc(calcTotalSumm(check) / calcProductsCount(check));
    return averagePrice;
}

console.log("Serednja price: " + calcAveragePrice(check1));


//3. Отримання найдорожчої покупки у чеку.

function maxPrice(check) {
    let maxPrice = check[0].productPrice;
    for(let i = 0; i < check.length; i++) {
        if(check[i].productPrice > maxPrice) maxPrice = check[i].productPrice;
    }
    return maxPrice;

}

console.log("цінa найдорожчої покупки у чеку = " + maxPrice(check1));
console.log("============================");


/*
Завдання 3
Створіть масив CSS-стилів (колір, розмір шрифту, вирівнювання, 
підкреслення тощо). Кожен елемент масиву – це об’єкт, що 
складається із двох властивостей: назва та значення стилю. 
Напишіть функцію, яка приймає масив стилів та текст, і виводить 
цей текст за допомогою document.write() у тегах <p style = textStyle></p>, 
и у відкритий тег атрибут style з усіма стилями, 
переліченими у масиві.
*/
console.warn('Завдання 3');

let arrStyle = [
    {property: "color", value: "green"},
    {property: "background", value: "lightblue"},
    {property: "text-align", value: "center"},
    {property: "font-style", value: "italic"},
    {property: "font-size", value: "1.5rem"},
  

]
function printHtml(arrStyle, text = "") {
    let textStyle = "";
    for(let item of arrStyle) {
        textStyle += item.property + ":" + item.value + "; ";
    }
    document.write(`<p style="${textStyle}">${text}</p>`);
}
console.log(arrStyle,  "We learning JavaScript!");
printHtml(arrStyle, "We learning JavaScript!");

