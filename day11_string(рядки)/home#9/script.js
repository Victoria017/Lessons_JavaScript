//          Завдання
/*
1. Напишіть функцію, яка приймає рядок та виводить статистику: 
кількість літер, кількість цифр та кількість інших знаків.
*/

console.log("Завдання 1 ================");

function selectSymbol(str = "") {
  console.log(str);

  let countSymbol = 0,
    countDigit = 0,
    countOther = 0;

  for (const symbol of str) {
    let code = symbol.codePointAt(0);
    if ((code > 65 && code <= 90) || (code >= 97 && code <= 122)) countSymbol++;
    else if (code >= 48 && code <= 57) countDigit++;
    else countOther++;
  }
  alert(
    `В реченні букв: ${countSymbol}, цифр: ${countDigit} та інших символів: ${countOther}`
  );
  return { countSymbol, countDigit, countOther };
}

let resObj = selectSymbol("Hello! It wonderful world...2022");

console.log(
  `Букв:` +
    resObj.countSymbol +
    " " +
    `цифр:` +
    resObj.countDigit +
    " " +
    `інших символів:` +
    resObj.countOther
);

////////////////////////////////////////////////////
console.log("Завдання 2 ================");
/*
2. Напишіть функцію, яка приймає двозначне число і повертає його в 
текстовому вигляді. Наприклад: 
35 – тридцять п’ять, 89 – вісімдесят дев’ять, 12 – дванадцять.
*/



let n = +prompt('Введіть двозначне число: ');
function convertorNumberToStr(number) {
  let numbers_symbol = {
    1: "один",
    2: "два",
    3: "три",
    4: "чотири",
    5: "п'ять",
    6: "шість",
    7: "сім",
    8: "вісім",
    9: "дев'ять",
    10: "десять",
    20: "двадцять",
    30: "тридцять",
    40: "сорок",
    50: "п'ятдесят",
    60: "шістдесят",
    70: "сімдесят",
    80: "вісімдесят",
    90: "дев'яносто",

  };
  let strNumber =
    numbers_symbol[Math.trunc(number / 10) * 10] +
    " " +
    numbers_symbol[number % 10];
  return strNumber;
}

console.log(convertorNumberToStr(n));
alert(convertorNumberToStr(n));


////////////////////////////////////////////////////
console.log("Завдання 3 ================");
/*
3. Напишіть функцію, яка замінює в отриманому рядку великі літери 
на маленькі, маленькі – на великі, а цифри – на знак нижнього підкреслення.
*/

function convertUpToLow(str = "") {
  let strNew = "";
  for (const symbol of str) {
    let isUS = symbol.toUpperCase() == symbol;
    if (symbol.codePointAt(0) >= 48 && symbol.codePointAt(0) <= 57)
      strNew += "_";
    else if (isUS) strNew += symbol.toLowerCase();
    else if (!isUS) strNew += symbol.toUpperCase();
  }
  return strNew;
}
let stringNew = convertUpToLow("Hello! It wonderful world...2022");
console.log(stringNew);  


////////////////////////////////////////////////////
console.log("Завдання 4 ================");
/*
4.Напишіть функцію, яка перетворює назви CSS-стилів з 
дефісом у назву в Сamelcase-стилі: font-size у fontSize, 
background-color у backgroundColor, text-align у 
textAlign
*/
function camelCase(str) {
  return str
    .split("-")
    .map(function (word, index) {
      return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

const newValue1 = camelCase("background-color");
console.log("newValue=", newValue1);

const newValue2 = camelCase("font-size");
console.log("newValue=", newValue2);

const newValue3 = camelCase("text-align");
console.log("newValue=", newValue3);


////////////////////////////////////////////////////
console.log("Завдання 5 ================");

/*
Напишіть функцію, яка приймає словосполучення і перетворює його на 
абревіатуру. Наприклад: cascading style sheets у CSS, 
об’єктно орієнтоване програмування в ООП. 
*/

function abbreviation(str) {
    return str
    .split (" ")
    .map(function(word, index) {
        return word[0].toUpperCase();
    })
    .join("");

}

const newAbb1 = abbreviation("cascading style sheets");
console.log("newAbb1=", newAbb1);

const newAbb2 = abbreviation("об’єктно орієнтоване програмування");
console.log("newAbb2=", newAbb2);

////////////////////////////////////////////////////
console.log("Завдання 6 ================");

/*
6. Напишіть функцію, яка приймає будь-яку кількість рядків, 
об’єднує їх в один довгий рядок і повертає його. 
*/

function unitesStrings(strRows = []) {
  return strRows.join(' ');
}

console.log(
    unitesStrings([
    "У JavaScript будь-які текстові дані є рядками. ",
    "Немає окремого типу «символ», ",
    " що є у інших мов."
    ])
);

////////////////////////////////////////////////////
console.log("Завдання 7 ================");
/*
7. Напишіть функцію – калькулятор. Функція приймає рядок 
із прикладом, визначає, яку дію необхідно виконати +, -, *,/,
переводить операнди у числа, розв’язує приклад і повертає 
результат

*/


function calculate(num1, num2, mark) {
    switch (mark) {
      case "*":
        return num1 * num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "не делится на нуль";
        }
    }
  }

console.log(calculate(15, 10, "+"));


////////////////////////////////////////////////////
console.log("Завдання 8 ================");

/*
8. Напишіть функцію, яка отримує url і виводить докладну 
інформацію про нього. 
Наприклад: url "https://itstep.org/ua/about", інформація 
"протокол: https, домен: itstep.org, шлях: /ua/about”.
*/


let url = new URL('https://itstep.org/ua/about');

console.log("протокол ", url.protocol); 
console.log("домен ", url.host);     
console.log("шлях ", url.pathname);



////////////////////////////////////////////////////
console.log("Завдання 9 ================");

/*
9. Напишіть функцію, яка приймає рядок та роздільник, і 
повертає масив підрядків, розбитих за допомогою вказаного роздільника. 
Наприклад: рядок "10/08/2020", роздільник "/", результат: 
"10", "08", "2020". 
Виконуючи завдання, не використовуйте функцію split()
*/

function rozdilnyk(str) {
    return str
      .split("/")
      .map(function (word, index) {
        return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
      })
      .join(", ");
  }
  
  const newStr1 = rozdilnyk("10/08/2020");
  console.log("newStr=", newStr1);


  ////////////////////////////////////////////////////
console.log("Завдання 10 ================");

/*
10. Напишіть функцію виведення тексту за заданим шаблоном. 
Функція приймає першим параметром шаблон, у тексті 
якого може використовуватися %. Після символу % вказується індекс 
вхідного параметра. При виведенні замість 
%індекс необхідно вивести значення відповідного вхідного параметра. 
Наприклад: print("Today is %1 %2.%3.%4", "Monday", 10, 
8, 2020) має вивести "Today is Monday 10.8.2020".
*/

function textOutput() {
  console.log('arguments=', arguments);
  if (arguments.length > 0) {
    let template = arguments[0];

    for(let i = 1; i < arguments.length; i++) {
      template = template.replace(`%${i}`, arguments[i]);
    }
    return template;
  }

  return '';
  
}

console.log(textOutput("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020));