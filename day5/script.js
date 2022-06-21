//              12.05

// 7. Запросіть у користувача число і на скільки цифр його змістити.
// Змістіть цифри числа та виведіть результат
//(якщо число 123456 змістити на 2 цифри, то вийде 345612).
/*

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
*/

//2 version
/*
inputN = +prompt("Input number:");
let seekN = +prompt("Input step");
let workingN = inputN;
console.log(workingN);
let countCifr = 0;  //leftN

while(workingN !== 0){          //> можна і більше
    workingN = Math.trunc(workingN/10);
    console.log(workingN);
    countCifr++;
}

console.log(countCifr);
// Math.trunc(345/10)!==0 34==0
// Math.trunc(34/10)!==0 4==0
// Math.trunc(3/10)!==0 0==0

//12345 6     s+6*(10**countIteration)+5*10**(countIteration)
//123456 = 1*(10**5)+2*(10**4)+3*(10**3)+4*(10**2)+5*(10**1)+6*(10**0)
            //FOR 

let leftN = "",  rightN = "",  res = "";

for(let index = countCifr; countCifr > seekN; countCifr--  ){
    leftN = (inputN % 10) + leftN;
    // console.log(leftN);
    inputN = Math.trunc(inputN / 10);
}

res = leftN + inputN;
console.log(res);

*/

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

/* //Ми вгадуємо число
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
*/
/*
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
*/

// 9. Виведіть таблицю множення для всіх чисел від 2 до 9. 
// Кожне число необхідно помножити на числа від 1 до 10.

/*
let row;

for(let j=2; j<=9; j++){
    row = " ";
    for(let i=1; i<=10; i++){
        row = row + j*i + " ";
    }

console.log(row)
}
*/
//8
// Зацикліть виведення днів тижня таким чином: «День 
// тижня. Бажаєте побачити назву наступного дня тижня?”, 
// і так доти, доки користувач натискатиме OK. 
/*
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
*/








