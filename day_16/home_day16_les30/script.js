/*
Завдання 1. Класи Employee, EmpTable
1) Реалізувати клас Employee, що описує працівника, та створити масив 
працівників банку.
2) Реалізувати клас EmpTable для генерації html коду таблиці зі списком 
працівників банку.
3) Масив працівників необхідно передавати через конструктор,
 а отримувати html-код за допомогою методу getHtml().
4) Створити об'єкт класу EmpTable та вивести на екран результат роботи 
методу getHtml(). Із використанням document.write();
*/

class Employee {
  constructor(id, firstName, secondName, birthday, salary, position) {
    this.id = id;
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthday = birthday;
    this.salary = salary;
    this.position = position;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = '';
    html = '<table>';
    html += `<tr><td>№</td><td>Ім'я</td><td>Прізвище</td><td> Дата<br>народження</td><td>Заробітна<br>плата</td><td>Посада</td></tr>`;

    for (const worker of this.employees) {
      html += `<tr><td>${worker.id}.</td><td>${worker.firstName}</td><td>${worker.secondName}</td><td>${worker.birthday}</td><td>${worker.salary}</td><td>${worker.position}</td></tr>`;
    }

    html += '</table>';
    return html;
  }
}

const workers1 = [
  new Employee(1, 'Іван', 'Петров', 1985, 25000, 'директор'),
  new Employee(2, 'Катерина', 'Іванова', 2000, 15000, 'менеджер'),
  new Employee(3, 'Марина', 'Ступка', 1988, 14000, 'консультант'),
  new Employee(4, 'Олег', 'Гривня', 2001, 14000, 'консультант'),
  new Employee(5, 'Олена', 'Іванова', 1970, 10000, 'прибиральник'),
];

const table1 = new EmpTable(workers1);
document.write(table1.getHtml());


/*
Завдання 2. Наслідування Student -> Aspirant
1) Створіть приклад успадкування, реалізуйте клас Student та 
клас Aspirant, аспірант відрізняється від студента наявністю якоїсь 
наукової роботи.
2) Клас Student містить змінні: firstName, lastName, group. А 
також, double averageMark, що містить середню оцінку.
3) Створити метод getScholarship() для класу Student, який повертає 
суму стипендії. Якщо середня оцінка студента дорівнює 5, то сума 3000 грн., 
інакше 2400. Перевизначити цей метод у класі Aspirant. Якщо середня 
оцінка аспіранта становить 5, то сума 8000 грн, інакше 7000.
4) Створити масив типу Student, що містить об'єкти класу Student
та Aspirant. Викликати метод getScholarship() кожного елемента 
масиву.
*/

class Student{ 
  constructor(firstName, lastName, group, averageMark) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
    this.averageMark = averageMark;
  }

  printInfo() {
    return this.firstName + " " + this.lastName + " " + this.group + " " + this.averageMark;
  }

  getScholarship() {
    if(this.averageMark == 5) {
      return '3000 грн';
    } else {
      return '2400 грн';
    }
  }
}
  
class Aspirant extends Student {
  constructor(firstName, lastName, group, averageMark, scenWorks) {
    super(firstName, lastName, group, averageMark);
    this.scenWorks = scenWorks;
  }

  printInfo() {
    return this.firstName + " " + this.lastName + " " + this.group + " " + this.averageMark + ' Has scientific work: ' + this.scenWorks;
  }
  getScholarship() {
    if(this.averageMark == 5) {
      return '8000 грн';
    } else {
      return '7000 грн';
    }
  }
}

const student1 = new Student("Andriy", "First", "QA-20", '5');
student1.printInfo();

let aspirant1 = new Aspirant("Igor", "Second", "QA-20", '4.5', '"Heart"');
aspirant1.printInfo();


const people = [
  new Student("Andriy", "First", "QA-20", 5),
  new Student("Sergiy", "None", "QA-21", 4.2),
  new Aspirant("Igor", "Second", "QA-20", 5, '"Heart"'),
  new Student("Lana", "False", "QA-20", 5),
  new Aspirant("Ronni", "True", "QA-21", 3.6, '"Body"'),
];

for (const student of people) {
  console.log(student.printInfo() + " сума стипендії: " + student.getScholarship());
}
