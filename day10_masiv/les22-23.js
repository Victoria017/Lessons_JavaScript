// Список завдань на день. Властивості: title, time(minutes), done (true false)
// 1) написати функцію виведення справ на екран спочатку ті що зроблені,  
// а потім ті що треба зробити
// 2) написати функцію додавання справ у список
// 3)  написати функцію що виводить інформацію про завдання, на яке витрачено
// найменше часу

let listTasks = [
    {title: "task1", time: 15, done: true},
    {title: "task2", time: 10, done: false},
    {title: "task3", time: 30, done: false},
    {title: "task4", time: 45, done: true},

]
function compareDone(value1, value2) {
    if(value1.done > value2.done) {
        return -1;
    } else if (value1.done < value2.done) {
        return 1;
    } else return 0;
}

function printListTasks(listTasks = []) {
    listTasks.sort(compareDone);
    for(let i = 0; i < listTasks.length; i++) {
        console.log(`${i+1}. ${listTasks[i].title} ${listTasks[i].time} ${listTasks[i].done}`);
    }
/*
//те ж
    for(let item of listTasks) {
        console.log(`${item.title} ${item.time} ${item.done}`);

    }
*/
}
printListTasks(listTasks);

function addEntry(listTasks, title, time, done = false) {
    let isFlag = false;
    for(let item of listTasks) {
        if(item.title == title) {
            item.time += time;
            isFlag = true;
            break;
        }
    }

    if(!isFlag) {
        listTasks.push({title, time, done});
        //listTasks.push({title:title, time:time, done:done});
    } 

}
addEntry(listTasks, "task5", 60);
//console.log(listTasks);
printListTasks(listTasks);


addEntry(listTasks, "task5", 10);
printListTasks(listTasks);

/*
listTasks.sort(compareDone);
console.log(listTasks);
let listTasksSort = new Array(...listTasks); // = [...listTasks]
console.log(listTasksSort);

*/

///////////////////////////////////////////////

function compareTime(value1, value2) {
    if(value1.time < value2.time) {
        return -1;
    } else if (value1.time > value2.time) {
        return 1;
    } else return 0;
}
/*
function printListTasks(listTasks = []) {
    listTasks.sort()
}

listTasks.sort(compareTime);
console.log(listTasks);
*/
/////////////////////////////////////////////////



