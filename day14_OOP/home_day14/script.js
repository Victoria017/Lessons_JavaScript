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

