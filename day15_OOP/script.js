
class Person{
    
    #age = 18; // for privat info
    constructor(name,age) {
        this.name = name;
        this.#age = age;
        //console.log("Call constructor");
    };
    move(place) {
        console.log(`${this.name} go to ${place}`);

    }
    setAge(age) {
        if(age > 0 && age < 100) this.#age == age;
        else console.log("Error!");
    }
    getAge(age) {
        return this.#age;
    }
    print() {
        console.log(this.name + " is " + this.age + " years old.");
    }

}


 let person4 = new Person("Katia", 22);

 person4.print(); // Igor is 42 years old.
 person4.name = "Katia";
 person4.age = 26;

console.log(person4.getAge());

////////////////////////////////////////////////


/*
    //визначаємо приватне поле
    #field;
    set field(value) {
        this.#fields = value
    }
    get field() {
        return this.#field;
    }
*/



class Human {
    
    #age = 18; // for privat info
    #id;
    constructor(name,age, id) {
        this.#id = id;
        this.name = name;
        this.#age = age;
        //console.log("Call constructor");
    };
    
    set id(value) {
        this.#id = value;
    }
    set age(age) {
        console.log(`Задано значення: ${age}`);

        if(age > 0 && age < 100) this.#age == age;
        else console.log("Error!");
    }
    get age() {
        return this.#age;
    }
    move(place) {
        console.log(`${this.name} go to ${place}`);

    }
    print() {
        console.log("id: " + this.#id + " " + this.name + " is " + this.age + " years old.");

    }

}

let human1 = new Human("Galina", 29, 1);
console.log(human1.age);
human1.age = 35;
console.log(human1.age);
console.log(human1.id);
human1.print();
human1.id = 2;
human1.print();


/*
Завдання 2
Реалізуйте клас, що описує новину (заголовок, текст, масив 
тегів, дата публікації). У класі необхідно реалізувати один метод 
print, який виводить всю інформацію у такому вигляді, як на 
рисунку 1.
Зверніть увагу, як виводиться дата:
■ якщо з дати публікації пройшло менше дня, то виводиться 
«сьогодні»;
■ якщо з дати публікації пройшло менше тижня, то виводиться «N днів тому»
в інших випадках – повна дата у форматі «день.місяць.
рік»
*/


class HtmlPageNews {
    #titleNews;
    #textNews;
    #arrTag;
    #datePublic;

    constructor(titleNews = "", textNews = "", arrTag = [], datePublic = new Date()) {
        this.#titleNews = titleNews;
        this.#textNews = textNews;
        this.#arrTag = arrTag;
        //this.#datePublic = datePublic;
        this.#datePublic = new Date(datePublic) == "Invalid Date" ? new Date() : new Date(datePublic);


    }
     get titleNews() {
         return this.#titleNews;
     }
    // можна використовувати для присвоєння значення лише назву
    // властивості (поля) без #
    set titleNews(titleNews) {
        this.#titleNews = titleNews;
    }
    get textNews() {
        return this.#textNews;
    }
    get arrTag(){
        return this.#arrTag;
    }

    get datePublic(){
        return this.#datePublic;
    }
    print() {
        let textHtml = "";
        console.log(Date.parse(this.datePublic));
        document.write(`<h3>${this.titleNews}</h3>`);
        
        let createDate = (Date.now() - Date.parse(this.datePublic)) / (24*60*60*1000);
        let textDate = "";
        console.log(new Date(Date.now() - Date.parse(this.datePublic)).getHours());
// формування тексту для дати

        if(createDate < 1) textDate = "today"

        else if(createDate <= 7) textDate=Math.round(createDate) + " days ago"
        else textDate = this.datePublic.toLocaleDateString();
        
        document.write(`<p>${textDate}</p>`);
        document.write(`<p>${this.textNews}</p>`);
        for (const htag of this.#arrTag) {
            textHtml += "#" + htag + " ";
        };

        document.write(textHtml);
    }
    
}

let title = "What is Lorem Ispum?";
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias possimus beatae quas, velit quod corporis    consequatur saepe odio culpa expedita? Accusantium, impedit! Suscipit delectus culpa hic provident. Voluptas, officiis.  ";
let arrTagNews = ["lorem", "ispum", "text"];
let news1 = new HtmlPageNews(title,text,arrTagNews, "06/16/2022");
//news1.print();

let news2 = new HtmlPageNews(title,text,arrTagNews, "06/10/2022");
//news2.print();

let news3 = new HtmlPageNews(title,text,["script", "js"], "05/25/2022");
//news3.print();

//console.log((Date.now() - Date.parse("06/16/2022")) / (24*60*60*1000));



/*
Завдання 3
Реалізуйте клас, що описує стрічку новин. 
Клас має містити:
■ масив новин;
■ get-властивість, яка повертає кількість новин;
■ метод виведення на екран усіх новин;
■ метод додавання новини;
■ метод видалення новини;
■ метод сортування новин за датою (від останніх новин до 
старих);
■ метод пошуку новин за тегом (повертає масив новин, в 
яких вказано переданий тег у метод).
Продемонструйте роботу написаних методів
*/


class LineNews {

    #arrNews = [];
    constructor(arrNews = []) {
        this.#arrNews = arrNews;

    }
    get arrNews() {
        return this.#arrNews;

    }
    getLen() {
        return this.arrNews.length;

    }
    //друк новин з масиву
    printNews() {
        // for (const news of this.arrNews) {
        //     news.print();
        // }
        for(let i = 0; i<this.getLen(); i++) {
            this.arrNews[i].print();
        }
    }
    // додавання новини
    addNews(news = new HtmlPageNews()) {
        this.arrNews.push(news);
    }
    //видалення новини
    deleteNews() {
        this.arrNews.shift();
    }
    //метод сортування новин за датою new => old
    sortDate() {
        function compareDate(news1,news2) {
            if(news1.datePublic > news2.datePublic) {
                return -1;
            } else if(news1.datePublic < news2.datePublic) {
                return 1;
            } else return 0;
        }
        this.arrNews.sort(compareDate);
    }
    //
    findNewsByTag(tag) {
        let newArrNews = [];

        for (const news of this.arrNews) {
            let isTag = false;
            for (const htag of news.arrTag) {
                if(htag == tag) {
                    isTag = true;
                    break; }
            }
            if(isTag) newArrNews.push(news);
        }
        return newArrNews;

    }

}

let arraysNews = [news1, news2, news3];

let lorenNews = new LineNews(arraysNews);
let news4 = new HtmlPageNews(title,text,["script"], "05/30/2022");

//console.log(lorenNews.arrNews);
//lorenNews.printNews();
lorenNews.addNews(news4);
lorenNews.sortDate();
lorenNews.printNews();
console.log(lorenNews.findNewsByTag("script"));
//lorenNews.deleteNews();
//lorenNews.deleteNews();
//lorenNews.printNews();















