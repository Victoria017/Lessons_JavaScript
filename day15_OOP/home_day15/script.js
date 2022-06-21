/*
Завдання 1
Реалізуйте клас, що описує коло. Клас має складатися з
наступних компонентів:
■ поле з радіусом кола;
■ get-властивість, що повертає радіус кола;
■ set-властивість, що встановлює радіус кола;
■ get-властивість, що повертає діаметр кола;
■ метод, що обчислює площу кола;
■ метод, що обчислює довжину кола.
Продемонструйте роботу властивостей і методів.
*/
/*
class Circle {
    #_radius = 0

    constructor(radius) {
        this.#_radius = radius;

    }

    print(num) {
        document.write(
           `<p "radius: ${this.radius};
           diameter: ${this.diameter};
           square: ${this.square};
           length: ${this.length}; 
           ">
            ${num}
           </p>` 
        )

    }
    get radius() {
        return this.#_radius;
    }

    set radius(value) {
        this.#_radius = value;
    }

    get diameter() {
        return 2 * this.#_radius;
    }
    

    get square() {
        return Math.PI * (this.#_radius * this.#_radius);
    }

    get length() {
        return 2 * Math.PI * this.#_radius;
    }
}


let exampleCircle = new Circle(4);

exampleCircle.print("Excises 1");
exampleCircle.print('current radius = ' +  exampleCircle.radius);
exampleCircle.print('current diameter = ' +  exampleCircle.diameter);
exampleCircle.print('current diameter = ' +  exampleCircle.square);
exampleCircle.print('current diameter = ' +  exampleCircle.length);


console.log(exampleCircle);

console.log('current radius=', exampleCircle.radius);
console.log('current diameter=', exampleCircle.diameter);
console.log('current square=', exampleCircle.square);
console.log('current length=', exampleCircle.length);

// set method
exampleCircle.radius = 5;


console.log('new radius=', exampleCircle.radius);
console.log('new diameter=', exampleCircle.diameter);
console.log('new square=', exampleCircle.square);
console.log('new length=', exampleCircle.length);
*/

/////////////////////////////////////////////////////////////////////////

/*
Завдання 2
Реалізуйте клас, що описує HTML-елемент. 
Клас HtmlElement має містити:
■ назву тегу; //name
■ тег, що самозакривається;  //closeTag
■ текстовий вміст; // text
■ масив атрибутів; // attributes
■ масив стилів; //styles
■ масив вкладених таких самих тегів; // tags
■ метод встановлення атрибуту;
■ метод встановлення стилю;
■ метод додавання вкладеного елемента в кінець поточного 
елемента;
■ метод додавання вкладеного елемента на початок поточного елемента;
■ метод getHtml(), який повертає HTML-код у вигляді рядка, включаючи 
HTML-код вкладених елементів.
За допомогою написаного класу реалізувати наступний блок 
і додати його на сторінку за допомогою document.write().
*/

class HtmlElement {
    tag = '';
    text = '';
    attributes = {};
    styles = {};
    tags = [];

    constructor(tag, text, attributes, styles, tags) {
        this.tag = tag;
        this.text = text;
        this.attributes = attributes;
        this.styles = styles;
        this.tags = tags;
    }

    get isCloseTag() {
        if(this.tag === 'br') {
            return true;
        }
        return false;
    }

    //метод встановлення атрибуту;
    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    //метод встановлення стилю;
    setStyles(name, value) {
        this.styles[name] = value;
    }

    // метод додавання вкладеного елемента в кінець елемента;
    appendTag(tag) {
        this.tags.push(tag);
    }

    // метод додавання вкладеного елемента на початок поточного елемента;
    prependTag(tag) {
        this.tags.unshift(tag);
    }

    get attributesStr() {
        if(!this.attributes){
            return '';
        }
        return Object.keys(this.attributes).map((k) => {
            return `${k}="${this.attributes[k]}"`;
        }).join(' ');
    }

    get stylesStr() {
        if(!this.styles){
            return '';
        }
        return 'style="' + Object.keys(this.styles).map((k) => {
            return `${k}: ${this.styles[k]};`;
        }).join(' ') + '"';
    }

    // метод getHtml(), який повертає HTML-код у вигляді рядка, включаючи 
    // HTML-код вкладених елементів.
    getHtml() {
        if(this.isCloseTag) {
            return `<${this.tag} />`;
        }
        return `<${this.tag} ${this.attributesStr} ${this.stylesStr}>${this.text}</${this.tag}>`;
    }
}

// const divElement = new HtmlElement("div", 'test text');
// const divHtml = divElement.getHtml();

// console.log(divHtml);

//document.write(new HtmlElement("div", 'test text', {id: 'wrapper'}, {color: 'green'}).getHtml());
/*
const brElement = new HtmlElement("br");
const brHtml = brElement.getHtml();

console.log(brHtml);
document.write(brHtml);
*/

/////////////////////////////////////////////////////////////////////////

/*
Завдання 3
Реалізувати клас, який описує CSS- клас. 
Клас CssClass має містити в собі:
■ назву CSS-класу;
■ масив стилів;
■ метод встановлення стилю;
■ метод видалення стилю;
■ метод getCss(), який повертає CSS-код у вигляді рядка
*/

class CssClass {
    name = "";
    styles = {};

    constructor(name, styles,) {
        this.name = name;
        this.styles = styles;
    }

    //метод встановлення стилю;
    setStyle(name, value) {
        this.styles[name] = value;
    }

    //■ метод видалення стилю;
    deleteStyle(name) {
       delete this.styles[name];
    }

    get propertiesStr() {
        let str = '';
        for (const name in this.styles) {
            str += `${name}: ${this.styles[name]};\n`
        }
        return str;
    }

    getCss() {
        return `.${this.name} {\n${this.propertiesStr}}`;
    }
}
/*
const class1 = new CssClass("myClass1", {color: 'red', 'text-align': 'center'});

class1.setStyle('font-size', '22px');
class1.setStyle('display', 'flex');
console.log(class1.getCss());

class1.deleteStyle('display');
console.log(class1.getCss());
*/
/////////////////////////////////////////////////////////

/*
Завдання 4
Реалізуйте клас, що описує блок HTML-документ.
Клас HtmlBlock має містити:
■ колекцію стилів, описаних за допомогою класу CssClass; 
■ кореневий елемент, описаний за допомогою класу 
HtmlElement;
■ метод getCode(), який повертає рядок з HTML-кодом 
(спочатку теги style з описом усіх класів, а потім увесь 
HTML-вміст з кореневого тегу та його вкладених елементів).
За допомогою написаних класів, реалізувати наступний блок 
(див. рис. 2) і додати його на сторінку за допомогою document.
write()
*/

class HtmlBlock {
    cssClasses = [];
    htmlElement;
    constructor(cssClasses, htmlElement) {
        this.cssClasses = cssClasses;
        this.htmlElement = htmlElement;
    }

    getCssCode() {
        let str = '';
        for (const cssClass of this.cssClasses) {
            str = str + cssClass.getCss() + '\n';
        }
        return str;
    }

    getCode() {
        let strHtml = '';
        strHtml = `<style>${this.getCssCode()}</style>`;
        strHtml += this.htmlElement.getHtml();
        return strHtml;
    }

    
}


const class2 = new CssClass("wrap", {display: 'flex'});
//class2.setStyle('display', 'flex');
console.log(class2.getCss());

const class3 = new CssClass("block", {width: '300px', margine: '10px'});
//class3.setStyle('width', '300px', 'margine', '10px');
console.log(class3.getCss());

const class4 = new CssClass("img", {width: '100%'});
//class4.setStyle('width', '100');
console.log(class4.getCss());

const class5 = new CssClass("text", {'text-align': 'justify'});
//class5.setStyle('text-align', 'justify');
console.log(class5.getCss());

const wrapperElement = new HtmlElement("div", 'test text', {id: 'wrapper'}, {color: 'green'});


const block = new HtmlBlock(
    [class2, class3, class3, class4, class5],
    wrapperElement
);

document.write(block.getCode());
//let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias possimus beatae quas, velit quod corporis    consequatur saepe odio culpa expedita? Accusantium, impedit! Suscipit delectus culpa hic provident. Voluptas, officiis.  ";




