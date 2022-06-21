// Home work 8 (to 12.06.2022)
//Module 2_Week_2 N2,3
/*
Завдання 1
Створить масив «список покупок». Кожен елемент масиву є 
об'єктом, який містить назву продукту, необхідну кількість і чи 
був він куплений. 
Напишіть декілька функцій для роботи із таким масивом.
1. Виведення всього списку на екран таким чином, щоб спочатку 
йшли некуплені продукти, а потім куплені.
2. Додавання покупки до списку. Враховуйте, що при додаванні
 покупки з вже існуючим продуктом у списку, необхідно збільшувати 
 кількість в існуючій покупці, а не додавати нову. 
3. Купівля продукту. Функція приймає назву продукту і 
помічає його як придбаний
*/


console.warn('Завдання 1');

let listShop1 = [
    {name: "хліб", count: 1, bought: true},
    {name: "молоко", count: 2, bought: false},
    {name: "курка", count: 10, bought: false},
    {name: "сіль", count: 5, bought: true},
    {name: "картопля", count: 20, bought: true},
    {name: "морква", count: 8, bought: true},
    {name: "цибуля", count: 15, bought: false},


]

function compareBought(value1, value2) {
    if(value1.bought > value2.bought) {
        return 1;
    } else if (value1.bought < value2.bought) {
        return -1;
    } else return 0;
}

function printListShop(listShop = []) {
    console.log('--------------------------------');
    listShop.sort(compareBought);
    for(let item of listShop) {
        console.log(`${item.name} ${item.count} ${item.bought}`);

    }
    console.log('--------------------------------');
}
printListShop(listShop1);

function addProduct(listShop, name, count, bought=false) {
    console.log(`addProduct ${name} ${count}`);
    let exists = false;
    for(let item of listShop) {
        if(item.name == name) {
            item.count += count;
            exists = true;
            break;
        }
    }
    if(!exists) {
        listShop.push({name, count, bought});
    } 
}

addProduct(listShop1, "хліб", 2);
printListShop(listShop1);

addProduct(listShop1, "молоко", 4);
printListShop(listShop1);

console.log("=============================");

function setBoughtProduct(listShop, name) {
    console.log(`setBoughtProduct ${name}`);
    for(let item of listShop) {
        if(item.name == name) {
            item.bought = true;
            break;
        }
    } 
}

setBoughtProduct(listShop1, "курка");
printListShop(listShop1);

setBoughtProduct(listShop1, "молоко");
printListShop(listShop1);

console.log("=============================");





/*
Завдання 4
Створіть масив аудиторій академії. Об’єкт-аудиторія складається із 
назви, кількості місць (від 10 до 20) та назви факультету, 
для якого вона призначена. 
Напишіть декілька функцій для роботи з ним.
1. Виведення на екран усіх аудиторій. 
2. Виведення на екран аудиторій для зазначеного факультету.
3. Виведення на екран тільки тих аудиторій, які підходять 
для переданої групи. Об’єкт-група складається з назви, 
кількості студентів і назви факультету. 
4. Функція сортування аудиторій за кількістю місць.
5. Функція сортування аудиторій за назвою (за алфавітом). 
*/
console.warn('Завдання 4');

let arrAcademi1 = [
    {name: "classRoom1", quantity: 10, faculty: "Frontend" },
    {name: "classRoom4", quantity: 18, faculty: "History" },
    {name: "classRoom5", quantity: 20, faculty: "Designer" },
    {name: "classRoom6", quantity: 12, faculty: "Frontend" },
    {name: "bisnesRoom6", quantity: 12, faculty: "Frontend" },
    {name: "zRoom", quantity: 12, faculty: "Frontend" },
    {name: "classRoom2", quantity: 16, faculty: "Psychologi" },
    {name: "classRoom3", quantity: 12, faculty: "Marketing" },
    {name: "classRoom7", quantity: 10, faculty: "Psychologi" },
    {name: "classRoom8", quantity: 15, faculty: "Marketing" },
    {name: "classRoom9", quantity: 16, faculty: "History" },
    {name: "wRoom", quantity: 36, faculty: "Designer" },
    {name: "aRoom", quantity: 26, faculty: "History" },


]

function displayAuditory(arrAcademi) {
    console.log('--------------------------');
    console.log(`Display all auditory:`);
    let auditoriaContent = '';

    for(let i = 0; i < arrAcademi.length; i++){
        auditoriaContent = auditoriaContent + arrAcademi[i].name + ' -  ' + arrAcademi[i].quantity + ' - ' + arrAcademi[i].faculty + '\n';
    }
    auditoriaContent = auditoriaContent + '--------------------------' + '\n';
    console.log(auditoriaContent);

}
displayAuditory(arrAcademi1);

console.log('--------------------------');


function auditoryForFaculty(arrAcademi, faculty) {
    console.log('--------------------------');
    console.log(`Aудиторій для зазначеного факультету: ${faculty}:`);
    for(let item of arrAcademi) {
        if(item.faculty == faculty) {
            console.log(item.name + ' -  ' + item.quantity + ' - ' + item.faculty);
        }
    } 
}

auditoryForFaculty(arrAcademi1, "Frontend");

console.log('--------------------------');

let objectGroup = {
    name:'classRoom1',
    count: 16,
    faculty: 'Frontend',
};

function auditoriaForGroup(arrAcademi1, objectGroup) {
    console.log(`3.Виведення аудиторій, які підходять для переданої групи: `);

    for(let auditoria of arrAcademi1) {
        if(auditoria.quantity >= objectGroup.count) {
            console.log(auditoria.name + ' -  ' + auditoria.quantity + ' - ' + auditoria.faculty);
        }
    } 

}
auditoriaForGroup(arrAcademi1, objectGroup);

console.log('--------------------------');

///////////////////////////////////////////////////////////////////

function sortAuditoryForQuantity(value1, value2) {
    if(value1.quantity > value2.quantity) {
        return 1;
    } else if (value1.quantity < value2.quantity) {
        return -1;
    } else return 0;
}

function sortAuditory(arrAcademi1 = []) {
console.log('4. Функція сортування аудиторій за кількістю місць');
    arrAcademi1.sort(sortAuditoryForQuantity);
    for(let item of arrAcademi1) {
        console.log(`${item.name} ${item.quantity} ${item.faculty}`);

    }
    console.log('--------------------------------');
}
sortAuditory(arrAcademi1);

////////////////////////////////////////////////////////////

function sortAuditoryForAbetka(a, b) {
    if(a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else return 0;
}

function sortForAbetka(arrAcademi1 = []) {
    console.log('5. Функція сортування аудиторій за назвою (за алфавітом). ');
        arrAcademi1.sort(sortAuditoryForAbetka);
        for(let item of arrAcademi1) {
            console.log(`${item.name} ${item.quantity} ${item.faculty}`);
    
        }
        console.log('--------------------------------');
    }
    sortForAbetka(arrAcademi1);