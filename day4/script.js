
//day4 10-05

// 2 Користувач ввів число, а на екпан виведено всі числа від 0

// 6 => 0 1 2 3 4 5 
/*
let number= +prompt("Input number");


let count=0;
while(count <= number ){
    console.log(count);
    count ++;

}

                        // WHILE//

// 2,1 Користувач ввів число, а на екпан виведено всі числа до 0
// 6 => 0 1 2 3 4 5 6

let number= +prompt("Input number");

while(number >= 0 ){
    console.log(number);
    number --;

}

// 3. Запросіть число та ступінь. 
// Зведіть число у вказаний ступінь та виведіть результат

// 2**4 = 2*2*2*2
//let hello

let num, step, index, pow;
num=+prompt("num=");
step=+prompt("step=");

pow=1;
index=1; 
while(index<=step){
    //hello="hello";
    //var text="text"; //var неалежно визначає змінну а let ні
    pow=pow*num;
    console.log("pow="+pow);
    index++;
}
// console.log(hello);
// console.log(text);

//1    1<=4  pow=2  index=2 
//2    2<=4  pow=4  index=3
//3    3<=4  pow=8  index=4
//4     4<4  pow=16 index=5
//5    5<= false(exist)

console.log(pow);


// Нехай температура в кімнаті має початкове значення t=18.
// Зростає кожну хв (ітерація) на 3 градуси.
// Вивести на екран повідомлення "Пожежа!" , якщо t>60

// Вхідні дані: t=18, deltaT=3
//Вихідні дані: виведення повідомлення "Пожежа!" , якщо t>60

let t=18;
const deltaT=3;

while(t<=60){
    console.log(t);
    t=t+deltaT;
}
console.log("end while => " +t);
console.log("Fire!", t);
console.log("No Fire!");


                            //  do-while//
t=18;
do{
    console.log(t);
    t=t+deltaT;
}while(t<=60)
console.log("Fire!", t);



//Порахувати суму чисел від 1 до 10.

let n = 1;
let sum = 0;
while(n <= 10) {
    //console.log("n=", n);
    sum = sum + n;
    //console.log("sum=", sum);
    //n = n + 1;
    n++;
}
console.log("sum=", sum);

//2
let sum = 0;
let n = 1;
do{
    sum = sum + n;
    console.log("n=", n);
    console.log("sum=", sum);
    n = n + 1;
}while(n<=10)
console.log("sum=", sum);



//Є мішечок з монетами. Кількість невідома.
//Нам потрібно порахувати. Кількість монет задано завчасно.
//на екран виводити рахунок монет 1-монета, 2-м, 3-м ...

let countMonet=12;
let currentMonet=1;
while(currentMonet <= countMonet){
    console.log(currentMonet+"-монета");
    currentMonet++;
}
// copi 2 variant
countMonet=12;
currentMonet=0;
while(currentMonet < countMonet){
    currentMonet++;
    console.log(currentMonet+"-монета");
}

let countMonet=12;
let currentMonet=1;
do{
    console.log(currentMonet+"-монета");
    currentMonet++;
}while(currentMonet <= countMonet);



//Потрібно отримати два випадкових числа, 
//що визначають номер двох виграшних квитків.

let n1 = Math.trunc(Math.random()*100);
let n2 = Math.trunc(Math.random()*100);

while(n1==n2){
    n2 = Math.trunc(Math.random()*100);
}
console.log(n1+" and " +n2);

// coppi 2 variant
console.log("**************");
n1 = Math.trunc(Math.random()*100);
let countIter=0;
do{
    countIter++;
    n2 = Math.trunc(Math.random()*100);
}while(n1==n2);
console.log(n1+" and " +n2);
console.log(countIter);

res=confirm("Продовжити далі?"); ///This
alert(res);
let answer;
do
    answer=prompt("Continue: yes or no");
while(answer != "no" && answer !="yes");



// Завдання, у яких необхідно використати DO WHILE.
// 1. Запропонуйте користувачеві розв’язати приклад 2 + 2 * 2, 
// доки він не надасть правильну відповідь.

let message;
do{
    message=+prompt("2+2*2=?");

}while((2+2*2)!==message);
alert("Good!");

*/
                //for//

//Є мішечок з монетами. Кількість Нам невідома.
//Нам потрібно порахувати. Кількість монет задано завчасно.
//на екран виводити рахунок монет 1-монета, 2-м, 3-м ...


// let countMonet=12;  //невідома кількість 
// let currentMonet=0;
/*
for(let currentMonet=1; currentMonet<=12; currentMonet++ ){
    console.log(currentMonet+" - монета");
}

// ==
for(currentMonet=1; currentMonet<=12; currentMonet++ ){
    console.log(currentMonet+" - монета");
}
//==
currentMonet=1;
for(;  currentMonet<=12; currentMonet++ ){
    console.log(currentMonet+" - монета");
}
//==
currentMonet=1;
for(;  currentMonet<=12;){
    console.log(currentMonet+" - монета");
    currentMonet++ ;
}

//==
currentMonet=1;
for( ; ; ){
    console.log(currentMonet+" - монета");
    currentMonet++ ;
    if (currentMonet>12)
        break;
}

            // FOR //
// Завдання, в яких потрібно використати FOR.
// 1. Виведіть усі числа від 1 до 100, 
// які кратні числу зазначеному користувачем

let kratne=+prompt("Input number for solution");
for(let i=1; i<=100; i++){
    if(i % kratne == 0) {
    console.log(i);
    }
}

// 2. Виведіть кожен 4-ий елемент із зазначеного користувачем 
// діапазону. Користувач вказує мінімальне та максимальне 
// значення діапазону.

let startValue = +prompt("Input start value");
let endValue = +prompt("Input end value");

for(let i=startValue; i<=endValue; i+=4){
    console.log(i);
}
*/