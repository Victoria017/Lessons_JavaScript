// наслідування
/*
Person -> Employee  
*/

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

/*
Завдання 1
Реалізуйте клас Button, який містить ширину, висоту, текст 
кнопки, і метод showBtn(), який виводить кнопку на екран за допомогою
тегу button і функції document.write().
Реалізуйте клас BootstrapButton, успадкувавши його від 
класу Button. Додайте поле color і перевизначте метод showBtn()
так, щоб кнопка виводилася зі стилями і вказаним кольором.
*/
"use strict"
/*
class Button {
    constructor(width, height, text) {
        this.width = width || 200;
        this.height = height || 60;
        this.text = text || "Button";
    }

    showBtn() {
        document.write(`<button style = "width: ${this.width}px; height: ${this.height}px"> ${this.text}</button>`);
    }
}

let buttonPlay = new Button(300, 100, "Play");
console.log(buttonPlay);
console.log(typeof Button);
console.log(buttonPlay instanceof Button);
buttonPlay.showBtn();

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }
    showBtn() {
        document.write(`<button style = "width: ${this.width}px; height: ${this.height}px; color: ${this.color}"> ${this.text}</button>`);
    }
}

const buttonBootstrapStop = new BootstrapButton(200, 25, 'Stop Play', "#FF45AA");
buttonBootstrapStop.showBtn();

*/

class Button {
    #width;
    #height;
    constructor(width, height, text) {
        this.width = width;
        this.height = height || 60;
        this.text = text || "Button";
    }
    get width() {
        return this.#width;
    }
    set width(width) {
        this.#width = width > 0 ? width : 100;
    }
    get height() {
        return this.#height;
    }
    set height(height) {
        this.#height = height > 0 ? height : 50;
    }

    showBtn() {
        document.write(`<button style = "width: ${this.width}px; height: ${this.height}px"> ${this.text}</button>`);
    }
}

let buttonPlay = new Button(300, 50, "Play");
console.log(buttonPlay);
console.log(typeof Button);
console.log(buttonPlay instanceof Button);
buttonPlay.showBtn();

class BootstrapButton extends Button {
    #color;
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color || "blue";
    }
    get color() {
        return this.#color;
    }
    set color(color) {
        this.#color = color || "blue";
    }
    showBtn() {
        document.write(`<button style = "width: ${this.width}px; height: ${this.height}px; color: ${this.color}"> ${this.text}</button>`);
    }
}

const buttonBootstrapStop = new BootstrapButton(200, 25, 'Stop Play', "pink");
buttonBootstrapStop.color = "";
buttonBootstrapStop.showBtn();


/*
Завдання 3
Реалізуйте клас ExtentedArray, успадкувавши його від стандартного
 класу Array і додавши такі методи:
■ метод getString(separator) для отримання рядка з усіма 
елементами масиву, переліченими через зазначений роздільник: 
кома, тире, пробіл тощо;
■ метод getHtml(tagName) для отримання рядка з HTMLкодом,
 де кожен елемент масиву буде поміщений у вказаний тег
  (врахуйте, якщо вказується тег li, тоді всі елементи 
    додатково необхідно буде помістити в ul).
Створіть об’єкт класу ExtentedArray, заповніть його даними 
та виведіть на екран результати роботи методів getString() і 
getHtml()
*/

class ExtentedArray extends Array{
    constructor(arr=[]) {
        super(...arr);
    }
    getString(separator) {
        let text = "[";
        // for(let i = 0; i < this.length; i++) {
        //     //text += String(this[i].concat(separator).concat(' '));
        //     text += this[i]+separator+" ";
        // }

        /*
// => func
        this.forEach((item) => {
            text += item + separator + " ";
        })
        */
// anonimna func
        this.forEach(function(item) {
            text += item + separator + " ";
        })
        return text+"]";
    }
    getHtml(tagName = '') {
        let textHtml = "";
        this.forEach(item => {
            textHtml += `<${tagName}>${item}</${tagName}>`;
        });
        if(tagName === "li") {
            textHtml = `<ul>${textHtml}</ul>`;
        }
        return textHtml;
    }
}

let arr1 = new ExtentedArray([4,5,8]);
console.log(arr1.getString(";"));
console.log(arr1.getHtml('li'));
document.write(arr1.getHtml('li'));
console.log(arr1.fill(25,1,7));


class ExtentedArrayNew extends Array{
    static countInstance = 0;
    constructor(value) {
        super(value);
        ExtentedArrayNew.countInstance++;

    }
    getString(separator) {
        let text = "[";
        this.forEach(function(item) {
            text += item + separator + " ";
        })
        return text+"]";
    }
    getHtml(tagName = '') {
        let textHtml = "";
        this.forEach(item => {
            textHtml += `<${tagName}>${item}</${tagName}>`;
        });
        if(tagName === "li") {
            textHtml = `<ul>${textHtml}</ul>`;
        }
        return textHtml;
    }
    static printCountInstance() {
        console.log("Count arr instance equal " + ExtentedArrayNew.countInstance);

    }
}

let arr2 = new ExtentedArrayNew(10);
console.log(arr2.getString(";"));
console.log(arr2.getHtml('li'));
document.write(arr2.getHtml('li'));
console.log(arr2.fill(Math.round(Math.random()*10)));
let arr3 = new ExtentedArrayNew(...arr2);
console.log(arr3.getString(":"));
console.log(arr3.countInstance);
console.log(ExtentedArrayNew.countInstance);
ExtentedArrayNew.printCountInstance();
//let arr4 = new Array();



/*
Завдання 2
Реалізуйте клас, що описує геометричну фігуру з властивостями
 та методами:
■ get-властивість для отримання назви фігури;
■ метод для виведення інформації про фігуру (сторони та їх 
довжина);
■ метод для обчислення площі фігури;
■ метод для обчислення периметра фігури.
Реалізуйте класи-спадкоємці: квадрат, прямокутник, трикутник. 
Перевизначте методи виведення та обчислень у класах-спадкоємцях.
Створіть масив з різними фігурами та виведіть інформацію 
про кожну з них, включаючи площу та периметр
*/

class Figure {
    static countFigure = 0;
    #name;

    constructor(name='Figure') {
        this.#name = name;
        Figure.countFigure++;
    }
    get name() {
        return this.#name;
    }
    getInfoFigure() {
        console.log('Nothing');
    }
    
    getSquare() {
        return 0;
    }
    getPerimetr() {
        return 0;
    }
}
console.warn('Трикутник');

class Tringle extends Figure{
    #side1;
    #side2;
    #side3;

    constructor(side1, side2, side3) {
    super("Tringle");
    this.side1=side1;
    this.side2=side2;
    this.side3=side3;

    }
    get side1() {
        return this.#side1;
    }
    set side1(value) {
    this.#side1 = value >= 0 ? value : 0;
    }
    get side2() {
        return this.#side2;
    }
    set side2(value) {
    this.#side2 = value = value >= 0 ? value : 0;
    }
    get side3() {
        return this.#side3;
    }
    set side3(value) {
    this.#side3 = value = value >= 0 ? value : 0;
    }
    getInfoFigure() {
        console.log(`Name figure:  ${this.name}: \n a =  ${this.side1}  \n b =  ${this.side2}  \n c =  ${this.side3} `)
    }
  
    getPerimetr() {
        return this.side1 + this.side2 + this.side3;
    }
    getSquare() {
    let p = this.getPerimetr();
    return Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3));
    }

}

const figure1 = new Tringle(4,5,6);
figure1.getInfoFigure();
console.log('Square = ' + figure1.getSquare());
console.log('Perimetr = ' + figure1.getPerimetr());

////////////////////////////////////////////////
console.warn('Прямокутник');
 
class Rictangle extends Figure{
    #side1;
    #side2;

    constructor(side1, side2, side3) {
    super("Rictangle");
    this.side1=side1;
    this.side2=side2;
    this.side3=side3;

    }
    get side1() {
        return this.#side1;
    }
    set side1(value) {
    this.#side1 = value >= 0 ? value : 0;
    }
    get side2() {
        return this.#side2;
    }
    set side2(value) {
    this.#side2 = value = value >= 0 ? value : 0;
    }
    
    getInfoFigure() {
        console.log(`Name figure:  ${this.name}: \n a =  ${this.side1}  \n b =  ${this.side2} `)
    }
  
    getPerimetr() {
        return (this.side1 + this.side2)*2;
    }
    getSquare() {
    let p = this.getPerimetr();
    return this.side1 * this.side2;
    }

}

const figure2 = new Rictangle(4,7);
figure2.getInfoFigure();
console.log('Square = ' + figure2.getSquare());
console.log('Perimetr = ' + figure2.getPerimetr());

let arrFigures = [figure1,figure2, new Rictangle(2,5), new Tringle(5,6,8)];
console.log(arrFigures);
console.log(Figure.countFigure);
arrFigures.forEach(function(itemFigure) {
    itemFigure.getInfoFigure();
    console.log(`Perimetr = ${itemFigure.getPerimetr()}.${itemFigure.getSquare()}`);
});

//////////////////////////////////////////////////
console.warn('Квадрат');

class Square extends Figure{
    #side1;

    constructor(side1,) {
    super("Square");
    this.side1=side1;

    }
    get side1() {
        return this.#side1;
    }
    set side1(value) {
    this.#side1 = value >= 0 ? value : 0;
    }
    
    getInfoFigure() {
        console.log(`Name figure:  ${this.name}: \n a =  ${this.side1} `)
    }
  
    getPerimetr() {
        return this.side1 * 4;
    }
    getSquare() {
    let p = this.getPerimetr();
    return this.side1 * this.side1;
    }

}

const figure3 = new Square(10);
figure3.getInfoFigure();
console.log('Square = ' + figure3.getSquare());
console.log('Perimetr = ' + figure3.getPerimetr());

