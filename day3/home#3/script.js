// 3   Запросіть у користувача число та виведіть усі дільники 
// цього числа

/*
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
*/


// 5. Запросіть у користувача 10 чисел і підрахуйте, скільки він 
// ввів додатних чисел, від’ємних та нулів. При цьому підрахуйте також кількість парних і непарних чисел. Виведіть 
// статистику на екран. Враховуйте те, що достатньо однієї 
// змінної (не 10) для введення чисел користувачем

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

alert(
    "Ви ввели додатних чисел: " + positive + '\n' +
    "Ви ввели від’ємних чисел: " + negative + '\n' +
    "Ви ввели нулів чисел: " + zero + '\n' +
    "Ви ввели парних чисел: " + even + '\n' +
    "Ви ввели непарних чисел: " + odd
);



// 7. Запросіть у користувача число і на скільки цифр його змістити. 
// Змістіть цифри числа та виведіть результат 
//(якщо число 123456 змістити на 2 цифри, то вийде 345612).

let numb = prompt("Input some number");
let digits = +prompt("How many digits to shift");

while(digits > 0) {
    numb = numb.substr(1) + numb.substr(0, 1)
    digits--;
}

alert('New number: ' + numb);

