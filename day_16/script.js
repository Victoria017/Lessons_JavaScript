/*
Створити класи, специфікації яких наведені нижче. 
Визначити конструктори та методи setТип(), getТип(), toString(). 
Визначити масив об'єктів. Задати критерій вибору даних 
та вивести ці дані на консоль.
 Car: id, Марка, Модель, Рік випуску, Колір, Ціна, Реєстраційний номер. 
Створити масив об'єктів. Вивести:
    • список автомобілів заданої марки;
    • список автомобілів заданої моделі, 
    які експлуатуються більше n років;
    • список автомобілів заданого року випуску, 
    ціна яких більше вказаної.
*/

class Employee {
    // id = 0;
    // brand = '';
    // model = '';
    // release = 0;
    // color = '';
    // price = 0;
    // number = '';

    constructor(id, brand, model, release, color, price, number) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.release = release;
        this.color = color;
        this.price = price;
        this.number = number;
    }

    setModel(value) {
        this.model = value;
    }

    getModel() {
        return this.model;
    }

    toString() {
        return `${this.id}. ${this.brand} ${this.model} ${this.release} ${this.color} ${this.price} ${this.number}`
    }
}

const cars1 = [
    new Employee(1, 'BMW', '525', 2005, 'black', 25000, 'QW456123'),
    new Employee(2, 'Honda', 'CR-V', 2007, 'silver', 15000, 'HY455599'),
    new Employee(3, 'Toyota', 'I6', 2015, 'red', 30000, 'PO560545'),
    new Employee(4, 'Honda', 'CR-V', 2010, 'silver', 15000, 'HY455599'),
    new Employee(5, 'Ford', 'Q4', 2000, 'blue', 10000, 'PO500645'),
    new Employee(6, 'BMW', '525', 2008, 'white', 28000, 'QW456100'),
];

function showCarsByBrand(cars, brand) {
    for (let i = 0; i < cars.length; i++) {
        if(brand == cars[i].brand){
            console.log(cars[i].toString());
        }
    }
}

showCarsByBrand(cars1, "Honda");

///////////////////////////////////////////////////////

console.log("список автомобілів заданої моделі, які експлуатуються більше n років");

function showCarsByModel(cars, model, age) {
    for (let i = 0; i < cars.length; i++) {
        const carAge = new Date().getFullYear() - cars[i].release;
        if(model == cars[i].model && carAge > age){
            console.log(cars[i].toString());

        }
    }
}
showCarsByModel(cars1, "525", 12);

///////////////////////////////////////////////////////

console.log("список автомобілів заданого року випуску, ціна яких більше вказаної.");

function showCarsByRelease(cars, release, price) {
    for (let i = 0; i < cars.length; i++) {
        if(release == cars[i].release && price < cars[i].price){
            console.log(cars[i].toString());

        }
    }
}
showCarsByRelease(cars1, 2015, 20000);



console.warn("Home work 3");

/*
Завдання 3
Реалізувати клас, який описує CSS- клас. 
Клас CssClass має містити в собі:
■ назву CSS-класу;
■ масив стилів;
■ метод встановлення стилю;
■ метод видалення стилю;
■ метод getCss(), який повертає CSS-код у вигляді рядка.
*/

class CssClass {

    constructor(name, styles) {
        this.name = name;
        this.styles = {};
        for (const property in styles) {
                this.styles[property] = styles[property];
            }
        }
    //метод встановлення стилю;

    setStyle(property, value) {
        // if(this.hasOwnProperty(property)) {
        //     return '';
        // }
        this.styles[property] = value;
    }
    getStyle(property) {
        return this.styles[property];
    }
    deleteStyle(property) {
        delete this.styles[property];
    }
    getCss() {
        let textCss = '';
        for (const property in this.styles) {
            if(Object.hasOwnProperty.call(this.styles, property)){
            textCss += `${property}: ${this.styles[property]};\n`
        }
    }
        console.log(textCss);
        return `.${this.name} {\n${textCss}}`;
    }
}


const textNews = new CssClass("textNews", {color: 'green', 'font-size': '24px'});
console.log(textNews);
textNews.setStyle('background-color', 'yellow');
console.log(textNews);
textNews.setStyle('background-color', 'red');
console.log(textNews);
textNews.deleteStyle('color');
console.log(textNews);
console.log(textNews.getCss());

const textNews1 = new CssClass("textNews1", {color: 'green', 'font-size': '24px', 'background-color': 'pink'});
textNews1.setStyle('font-size', '16px');
document.write(`<style>${textNews1.getCss()}${textNews.getStyle()}</style>`);

// наслідування

/*
Person -> Employee  
*/

console.warn("////// наслідування //////");

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(this.name + " " + this.age);
    }
}

class Employee extends Person {
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }
    // перевизначaємо printInfo
    /*
    printInfo() {
        console.log(this.name + " " + this.age + " " + this.company);
    }
    */
    printInfo() {
        super.printInfo();
        console.log("In work this company" + this.company);
    }
    work() {
        console.log(this.name + " work in " + this.company);
    }
}

const andriy = new Person("Andriy", 33);
andriy.printInfo();
let employee1 = new Employee("Igor", 35, "Google");
employee1.printInfo();





