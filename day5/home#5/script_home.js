// Home work N3
//1

// Підрахуйте суму всіх чисел у заданому користувачем 
// діапазоні. 

let begin = +prompt("Введите початкове число","");
let end = +prompt("Введите кінцеве число","");
let sum = 0;

while (begin <= end) {
    sum += begin;
    begin++;
}    
console.log(sum);



// //2
// Запросіть 2 числа і знайдіть тільки найбільший спільний 
// дільник.


let firstNum = +prompt("Введите перше число","");
let secondNum = +prompt("Введите друге число","");
let dilnyk = firstNum > secondNum ? secondNum : firstNum;

while(firstNum % dilnyk !== 0 || secondNum % dilnyk !==0){
    dilnyk--;
    console.log(dilnyk);
}
alert("Найбільший спільний дільник: " + dilnyk);



// 3   Запросіть у користувача число та виведіть усі дільники 
// цього числа


let number = +prompt("Input number");
let dilnyk = 1;
let allDilnyks = '';


while(dilnyk <= number) {
    if (number % dilnyk === 0) {
        allDilnyks = allDilnyks + dilnyk + ', ';
    }
    dilnyk++;
}

alert('Всі дільники: ' + allDilnyks);


// //4
// Визначте кількість цифр у введеному числі.


let num = +prompt("Input numbers");
let i = 0;

do {
    num = Math.trunc(num / 10);
    i++;
}while (num !== 0);
alert("кількість цифр " + i);


 // 5. 
 /*Запросіть у користувача 10 чисел і підрахуйте, скільки він 
 ввів додатних чисел, від’ємних та нулів. При цьому підрахуйте також кількість парних і непарних чисел. Виведіть 
 статистику на екран. Враховуйте те, що достатньо однієї 
 змінної (не 10) для введення чисел користувачем*/


let positive = 0;
let negative = 0;
let zero = 0;

let even = 0;
let odd = 0;

let i = 1;
while (i <= 10) {
    let num = +prompt("Input 10 numbers");

    if (num > 0) {
        positive++;
    } else if (num < 0) {
        negative++;
    } else {
        zero++;
    }

    if (num % 2 === 0) {
        even++;
    } else {
        odd++;
    }
    i++;
} 


//6
/*
Зацикліть калькулятор. Запросіть у користувача 2 числа і 
знак, розв’яжіть приклад, виведіть результат і запитайте, 
чи хоче він розв’язати ще один приклад. І так триватиме 
доти, доки користувач не відмовиться
*/

let answer;
do {
    let numberFirst = +prompt("Input number first:");
    let numberSecond = +prompt("Input number second:");
    let dija = prompt("Input +, -, *, / :");
    
    switch(dija){
        case '+':
            answer = numberFirst + numberSecond;
        break;
        case '-':
            answer = numberFirst - numberSecond;
        break;
        case '*':
            answer = numberFirst * numberSecond;
        break;
        case '/':
            answer = numberFirst / numberSecond;
        break;
    }
} while(confirm(`Результат: ${answer}. Бажаєте розв’язати ще один приклад? `));

console.log(answer)
console.log("Finish!")



// 7.
/* Запросіть у користувача число і на скільки цифр його змістити.
 Змістіть цифри числа та виведіть результат
(якщо число 123456 змістити на 2 цифри, то вийде 345612).*/


let inputN = prompt("Input n:");
let countCifra = +prompt("Input seek:");
let lenN = inputN.length
inputN = +inputN;
console.log(inputN);
console.log(lenN);
let leftN = "",  rightN = "",  res = "";

while (lenN > countCifra) {
  leftN = (inputN % 10) + leftN;

  // console.log(leftN);

  inputN = Math.trunc(inputN / 10);

  lenN--;
}
rightN = inputN;
res = leftN + rightN;
console.log(res);


//2 version
//Кількість цифр

inputN = +prompt("Input number:");
let seekN = +prompt("Input step");
let workingN = inputN;
console.log(workingN);
let countCifr = 0;  //leftN

while(workingN !== 0){          
    workingN = Math.trunc(workingN/10);
    console.log(workingN);
    countCifr++;
}

console.log(countCifr);

            //FOR 

let leftN = "",  rightN = "",  res = "";

for(let index = countCifr; countCifr > seekN; countCifr--  ){
    leftN = (inputN % 10) + leftN;
    // console.log(leftN);
    inputN = Math.trunc(inputN / 10);
}

res = leftN + inputN;
console.log(res);




//8
// Зацикліть виведення днів тижня таким чином: «День 
// тижня. Бажаєте побачити назву наступного дня тижня?”, 
// і так доти, доки користувач натискатиме OK. 


let answerUser;
let day;
let numberDay=1;

do {
    if(numberDay > 7){
        numberDay=1;
    }
    switch(numberDay){
        case 1:  day = "Понеділок"; break;
        case 2:  day = "Вівторок"; break;
        case 3:  day = "Середа"; break;
        case 4:  day = "Четвер"; break;
        case 5:  day = "П'ятниця"; break;
        case 6:  day = "Субота"; break;
        case 7:  day = "Неділя"; break;
    }
    numberDay++;
}while(confirm(`${day}. Бажаєте побачити назву наступного дня тижня? `));

console.log("Finish!")




// 9. Виведіть таблицю множення для всіх чисел від 2 до 9. 
// Кожне число необхідно помножити на числа від 1 до 10.


let row;

for(let j=2; j<=9; j++){
    row = " ";
    for(let i=1; i<=10; i++){
        row = row + j*i + " ";
    }

console.log(row)
}


//          circle function

// 10. Гра «Вгадай число». Запропонуйте користувачеві загадати 
// число від 0 до 100 і відгадати його наступним способом: в 
// кожній ітерації циклу поділяєте діапазон чисел навпіл, 
// записуєте результат в N і запитуєте у користувача «Ваше 
// число > N, < N або == N?». Залежно від відповіді користувача,
// зменшуєте діапазон. Початковий діапазон від 0 до 
// 100, поділяєте навпіл і отримуєте 50. Якщо користувач 
// вказав, що його число > 50, змінюєте діапазон числа від 51 
// до 100. І так доти, доки користувач не вибере == N.

//Ми вгадуємо число

let number, randNumber, startDiapazon=0, endDiapazon=100;
alert("Гра вгадай число від 0 до 100! Старт...");
randNumber=Math.trunc(Math.random()*100);  
console.log(randNumber);//90
do{
    number=+prompt(`Ваше число  ${startDiapazon} до ${endDiapazon} `);//45
    if(number==randNumber){
        alert(`Загадане число = ${number} `);
    }else if(number>randNumber){
        alert(`Загадане число < ${number} `);
    }else if(number<randNumber){
        alert(`Загадане число > ${number} `);
    }
}while(number!==randNumber);
//false -> exit from cicle
console.log("FINISH!");

//2 version

console.log("FINISH!");

let number, resultNumber, start=0, end=100, seredina=Math.round((end-start)/2);
let answerUser;
alert("Пограймо! Загадай число від 0 до 100! Старт?");

do{
   answerUser=prompt(`Ваше число > ${seredina}, < ${seredina} чи ==${seredina}`);
   switch(answerUser){
       case ">":
          start=seredina + 1;
          seredina=start+Math.round((end-start)/2)
        //   start=seredina;
          break;
       case "<":
          end=seredina;    
          seredina=start+Math.round((end-start)/2)
          break;
       default:
          alert("Не зрозуміла відповідь!")
   }
  
}while(answerUser!=="==")











