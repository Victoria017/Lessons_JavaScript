/*
1. Student: id, Прізвище, Ім'я, По батькові, Дата народження, Адреса, Телефон, Факультет, Курс, Група.
Створити масив об'єктів. Вивести:
 список студентів заданого факультету;
 списки студентів для кожного факультету та курсу;
 список студентів, які народились після заданого року;
 список навчальної групи.

*/
console.warn('Завдання 1');

class Student {
  constructor(id, firstName, secondName, fatherName, birthday, address, telephone, faculty, kurs, groupe) {
    this.id = id;
    this.firstName = firstName;
    this.secondName = secondName;
    this.fatherName = fatherName;
    this.birthday = birthday;
    this.address = address;
    this.telephone = telephone;
    this.faculty = faculty;
    this.kurs = kurs;
    this.groupe = groupe;

  }
  setStudents(value) {
    this.faculty = value;
  }
  getStudents() {
    return this.faculty;
  }
  toString() {
    return `${this.id}. ${this.firstName} ${this.secondName} ${this.fatherName} ${this.birthday} ${this.address} ${this.telephone} ${this.faculty} ${this.kurs} ${this.groupe}`
  }

}

const students1 = [
  new Student(1, 'Петренчук1', 'Іван1', 'Петрович1', 01/05/1988, 'Rivne', 0978800880, 'Вища математика', 2, 'MK-15'),
  new Student(2, 'Петренчук2', 'Іван2', 'Петрович2', 01/05/1985, 'Rivne', 0978800880, 'Історія', 2, 'І-45'),
  new Student(3, 'Петренчук3', 'Іван3', 'Петрович3', 01/05/1987, 'Rivne', 0978800880, 'Вища математика', 2, 'MK-15'),
  new Student(4, 'Петренчук4', 'Іван4', 'Петрович4', 01/05/1988, 'Rivne', 0978800880, 'ТРО', 2, 'ТРО-40'),
  new Student(5, 'Петренчук5', 'Іван5', 'Петрович5', 01/05/1985, 'Rivne', 0978800880, 'Історія', 2, 'І-45'),
  new Student(6, 'Петренчук6', 'Іван6', 'Петрович6', 01/05/1987, 'Rivne', 0978800880, 'ТРО', 2, 'ТРО-40'),
  new Student(1, 'Петренчук1', 'Іван1', 'Петрович1', 01/05/1988, 'Rivne', 0978800880, 'Вища математика', 3, 'MK-15'),
  new Student(2, 'Петренчук2', 'Іван2', 'Петрович2', 01/05/1985, 'Rivne', 0978800880, 'Історія', 3, 'І-45'),
  new Student(3, 'Петренчук3', 'Іван3', 'Петрович3', 01/05/1987, 'Rivne', 0978800880, 'Вища математика', 3, 'MK-15'),
  new Student(4, 'Петренчук4', 'Іван4', 'Петрович4', 01/05/1988, 'Rivne', 0978800880, 'ТРО', 3, 'ТРО-40'),
  new Student(5, 'Петренчук5', 'Іван5', 'Петрович5', 01/05/1985, 'Rivne', 0978800880, 'Історія', 3, 'І-45'),
  new Student(6, 'Петренчук6', 'Іван6', 'Петрович6', 01/05/1987, 'Rivne', 0978800880, 'ТРО', 3, 'ТРО-40'),
]

console.warn("/////////////////1/////////////////");

function showStudentByFaculty(students, faculty) {
  for (let i = 0; i < students.length; i++) {
    if (faculty == students[i].faculty) {
      console.log(students[i].toString());
    }
  }
}

showStudentByFaculty(students1, "ТРО");
///////////////////////////////////////////

console.warn("/////////////////2/////////////////");

function showStudentByFacultyAndKurs(students) {
  const fucs = ["Вища математика", "Історія", "ТРО"];
  const kurses = [2, 3];

  for (let f = 0; f < fucs.length; f++) {
    for (let k = 0; k < kurses.length; k++) {
      const group = [];

      for (let i = 0; i < students.length; i++) {
        if (students[i].kurs == kurses[k] && students[i].faculty == fucs[f]) {
         group.push(students[i]);
        }
      }

      console.log(`Facultet: ${fucs[f]} Grop: ${kurses[k]}`);
      console.log(group);

    }
  }
}

showStudentByFacultyAndKurs(students1);


///////////////////////////////////////////


/*
8. Створити класи, специфікації яких наведені нижче. 
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

console.warn('Завдання 8');

class Car {
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
    return `${this.id}. ${this.brand} ${this.model} ${this.release} ${this.color} ${this.price} ${this.number}`;
  }
}

const cars1 = [
  new Car(1, "BMW", "525", 2005, "black", 25000, "QW456123"),
  new Car(2, "Honda", "CR-V", 2007, "silver", 15000, "HY455599"),
  new Car(3, "Toyota", "I6", 2015, "red", 30000, "PO560545"),
  new Car(4, "Honda", "CR-V", 2010, "silver", 15000, "HY455599"),
  new Car(5, "Ford", "Q4", 2000, "blue", 10000, "PO500645"),
  new Car(6, "BMW", "525", 2008, "white", 28000, "QW456100"),
];

function showCarsByBrand(cars, brand) {
  for (let i = 0; i < cars.length; i++) {
    if (brand == cars[i].brand) {
      console.log(cars[i].toString());
    }
  }
}

showCarsByBrand(cars1, "Honda");

///////////////////////////////////////////////////////

console.log(
  "список автомобілів заданої моделі, які експлуатуються більше n років"
);

function showCarsByModel(cars, model, age) {
  for (let i = 0; i < cars.length; i++) {
    const carAge = new Date().getFullYear() - cars[i].release;
    if (model == cars[i].model && carAge > age) {
      console.log(cars[i].toString());
    }
  }
}
showCarsByModel(cars1, "525", 12);

///////////////////////////////////////////////////////

console.log(
  "список автомобілів заданого року випуску, ціна яких більше вказаної."
);

function showCarsByRelease(cars, release, price) {
  for (let i = 0; i < cars.length; i++) {
    if (release == cars[i].release && price < cars[i].price) {
      console.log(cars[i].toString());
    }
  }
}
showCarsByRelease(cars1, 2015, 20000);
