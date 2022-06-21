/*
Завдання 2
Розрахуйте скільки днів, годин, хвилин і секунд залишилося до Нового року. Виведіть 
ці значення відповіднім чином, використовуючи метод document. write() з тегами <p> 
та <span> та класами для них. Стилі можна записати в окремому CSS-файлі. Якщо одне 
з чисел буде менше ніж 10, його потрібно вивести з провідним 0, наприклад, так:
*/



function displayBlock(number, title) {
    document.write(`
        <span class="item">
            <p class="number">${number}</p>
            <p class="title">${title}</p>
        </span>
    `);
}


function displayDiffToNewYear() {
    const today = new Date();
    console.log(today);
    const dateNewYear = new Date('01, 01, 2023'); 
    console.log(dateNewYear);

    const msInDay = 24*60*60*1000;
    const msInHour = 60*60*1000;
    const msInMinute = 60*1000;



    let diffInMs = dateNewYear.getTime() - today.getTime();
    let days = Math.trunc(diffInMs / msInDay);
    displayBlock(days, 'Days');

    let hours = Math.trunc((diffInMs - days*msInDay) / msInHour);
    displayBlock(hours, 'Hours');

    let minutes = Math.trunc((diffInMs - days*msInDay - hours*msInHour) / msInMinute);
    displayBlock(minutes, 'Minutes');

    let seconds = Math.trunc((diffInMs - days*msInDay - hours*msInHour - minutes*msInMinute) / 1000);
    displayBlock(seconds, 'Seconds');


}

displayDiffToNewYear();
