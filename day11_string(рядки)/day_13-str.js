
// /*
// 6. Напишіть функцію, яка перевіряє, чи є переданий рядок 
// паліндромом
// */
// console.log("===========6===========");

// function palindrom(str = "") {
//     let len, counter = 0;
//     let strN = str.toLowerCase;
//     // if (str.length % 2 == 1) {
//     //     len = Math.round(str.length / 2) + 1;
//     // } else len = str.length / 2;
//     for(let i = 0; i < Math.round(strN.length / 2); i++) {
//         if(strN[i] !== strN[strN.length-1-i]) return false;
//     }
//     return true;

// }
// console.log(palindrom("pilip"));

// /////////////////////////////////////////////////////
// /*
// 1. Напишіть функцію, яка приймає рядок та виводить статистику:
//  кількість літер, кількість цифр та кількість інших 
// знаків.
// */

// console.log("================================HW-1===========");

// /*
// let str = "";
// for(let i = 0; i < 255; i++) {
//     str+=String.fromCodePoint(i);
// }
// console.log(str);


// function selectSymbol(str = "") {
//     let countSymbol = 0, countDigit = 0, countOther = 0;
//     for (const symbol of str) {
//         let code = symbol.codePointAt(0);
//         if((code > 65 && code<=90) || (code >= 97 && code<=122)) countSymbol++;
//         else if (code >= 48 && code<=57) countDigit++;
//         else countOther++;
//     } 
//     alert(`В реченні букв: ${countSymbol}, цифр: ${countDigit} та інших символів: ${countOther}`);
//     return {countSymbol, countDigit, countOther};
// }
// selectSymbol("df;ds 555 fdo657*^$%");
// let resObj = selectSymbol("df;ds 555 fdo657*^$%");
// console.log(resObj.countSymbol + " " + resObj.countDigit + " " + resObj.countOther);

// */

// /*
// Напишіть функцію, яка приймає двозначне число і повертає його
//  в текстовому вигляді
// Наприклад: 35 – тридцять п’ять, 89 – вісімдесят дев’ять, 
// 12 – дванадцять
// */

// console.log("================================HW-2===========");



// //console.log(numbers_symbol[20]);

// let n = 21;
// function convertorNumberToStr(number) {
//   let numbers_symbol = {
//     1: "один",
//     2: "два",
//     20: "двадцять",
//   };
//   let strNumber =
//     numbers_symbol[Math.trunc(number / 10) * 10] +
//     " " +
//     numbers_symbol[number % 10];
//   return strNumber;
// }

// console.log(convertorNumberToStr(n));


// console.log("================================HW===========");

// /*
// function convertUpToLow(str = "") {
//     let strNew = "";
//     for (const symbol of str) {
//         let isUS = symbol.toUpperCase() == symbol;
//         if (symbol.codePointAt(0) >= 48 && symbol.codePointAt(0) <= 57) strNew += "_";
//         else if(isUS) strNew += symbol.toLowerCase();
//         else if (!isUS) strNew += symbol.toUpperCase();
//     } 
//        return strNew;
// }
// let stringNew = convertUpToLow("Ghdk %*kk 548");
// console.log(stringNew)  

// */


// /*
// Напишіть функцію, яка підраховує кількість слів у реченні.

// */
// console.log("================================7===========");

// function countWordsInString(str = "") {
//     let arrWord = str.split(" ");
//     return arrWord.length;
// }

// console.log("кількість слів: " + countWordsInString("Напишіть функцію, яка підраховує кількість слів у реченні."));

// /*
// 8. Напишіть функцію, яка повертає найдовше слово з речення

// */
// console.log("================================8===========");
// //maxLenWord("sdfg kkd pppdf uu i");
// function maxLenWord(str="") {
//     let arrWord = str.split(" ");
//     let maxLen =-Infinity;
//     let maxWord = "";
//     for (const word of arrWord) {
//         if(word.length > maxLen) {
//             maxLen = word.length;
//             maxWord = word;
//         }
//     }
//     return maxWord;
// }
// let maxWord = maxLenWord("повертає довше слово");
// console.log(maxWord);
// alert(maxWord);

// /*
// 9. Напишіть функцію, яка підраховує середню довжину 
// слова у реченні
// */
// console.log("================================9===========");

// let avargeLenWord = function(str="") {
//     let suma = 0;
//     let arrWord = str.split(" ");
//     for (const word of arrWord) {
//         suma += word.length;
        
//     }
//     return Math.trunc(suma / arrWord.length);
// }


// console.log(avargeLenWord("Cool day"));


