//                              Завдання
/*
1. Напишіть функцію, яка приймає 2 рядки та порівнює їх 
довжину. Функція повертає 1, якщо в першому рядку 
більше символів, ніж у другому; -1 – якщо у другому більше символів,
 ніж у першому; 0 – якщо рядки однакової 
довжини
*/
console.log("Завдання 1 =====================");

function equelStr(str1="", str2="") {
    if(str1.length > str2.length) {
    return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else return 0;
}
console.log(equelStr("Java", "JavaScript"));

/* 
2. Напишіть функцію, яка переводить у верхній регістр 
перший символ переданого рядка.
*/
console.log("Завдання 2");


function firstSymbolUpperCase(str="") {
    //return str[0].toUpperCase() + str.substring(1);
    return str[0].toUpperCase().concat(str.substring(1));

}
console.log(firstSymbolUpperCase("javascript is cool programming lang"));

///////////////////////////////////
// 2.1) У всіх словах, що розділені пропуском перевести у верхній регістр

console.log("Завдання 2.1=====================");


let text = "У всіх словах, що розділені пропуском перевести у верхній регістр";

function firstSymUpCaseWords(str = "") {
    let arrWords = str.split(" ");
    //console.log("arrWords =>" + arrWords);
    for(let i = 0; i < arrWords.length; i++) {
        arrWords[i] = firstSymbolUpperCase(arrWords[i]);
    }
    //console.log("arrWords UpTitle =>" + arrWords);
    return arrWords.join(" ");

}

//firstSymUpCaseWords(text);
let textNew = firstSymUpCaseWords(text);
console.log(text);
console.log(textNew);



/*
3. Напишіть функцію, яка підраховує кількість голосних 
літер у переданому рядку.
*/
console.log("Завдання 3 ================");

function symbolVowels(str = "") {
    let counter = 0;
    //console.log(str.length);  // довжина рядка
    for (let i = 0; i < str.length; i++) {
        switch (str.charAt(i).toLowerCase()) {
            case "а":
            case "о":
            case "е":
            case "і":
            case "у":
            case "и":
            counter++;
            default:
                console.log("Error!");

        }
    }
    return counter;
}
console.log(symbolVowels(text));


/*
4. Напишіть функцію для перевірки спаму в переданому 
рядку. Функція повертає true, якщо рядок містить спам. 
Спамом вважати наступні слова: 100% безкоштовно, 
збільшення продажів, тільки сьогодні, не видаляйте, ххх. 
Функція має бути нечутливою до регістру
*/
console.log("Завдання 4 =============");


function isSpam(text = "") {
    let arrSpam = ["100% безкоштовно", "збільшення продажів", 
    "тільки сьогодні", "не видаляйте", "ххх"];
    for (const spam of arrSpam) {
        if(text.includes(spam)) return true;
    }
    return false;
}
text="У всіх словах, що розділені пропуском перевести у верхній ххх регістр";

console.log(isSpam(text));


console.log("Завдання 4 варіант 2 =============");


function isSpamV2(text = "") {
    let arrSpam = ["100% безкоштовно", "збільшення продажів", 
    "тільки сьогодні", "не видаляйте", "ххх"];
    let flag = false;
    for (let i = 0; i < arrSpam.length; i++) {
        if(text.includes(arrSpam[i])) {
            flag = true;
            break;
    }
}
    return flag;
}
console.log(isSpamV2(text));


/*
5. Напишіть функцію скорочення рядка. Функція приймає 
рядок та його максимальну довжину. Якщо довжина рядка більша,
ніж максимальна, необхідно відкинути зайві 
символи, додавши замість них трикрапку. 
Наприклад: truncate("Hello, world!", 8) має повернути 
"Hello..."
*/
console.log("Завдання 5 =============");

function truncate(str = "", maxLenght) {

    if(str.length > maxLenght ?? maxLenght > 3) {
        return str.slice(0, maxLenght - 3) + "..."

    }
    return str;
}
console.log(truncate("Hello, world!", 8));

/*
function sliceStr(str = "", maxLength) {

    if (str.length > maxLength) {
 
       maxLength++
 
       return str.slice(0, maxLength).concat("...")
 
    }
 
    return str
 
 }
*/
