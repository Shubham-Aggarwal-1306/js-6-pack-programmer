class MyClass {
    #a = 1;
    #b = 2;

    constructor(value1, value2) {
        this.#a = value1;
        this.#b = value2;
    }
    print() {
        console.log(this.#a, this.#b);
    }
}

const obj = new MyClass(3, 4);

console.log(obj.a);

class Electronics {
    #input;
    #output;
    #name;

    constructor(input, output, name, plugType) {
        this.#input = input;
        this.#output = output;
        this.#name = name;
    }

    print() {
        console.log(this.#input, this.#output, this.#name);
    }
}

class Charger extends Electronics {
    #plugType;

    constructor(plugType, input, output, name) {
        super(input, output, name);
        this.#plugType = plugType;
    }
}

const charger = new Electronics(5, 10, 'Charger', 'Type-C');
const hardDisk = new Electronics(10, 20, 'Hard Disk', 'USB');

const hpCharger = new Charger('Type-C', 5, 10, 'HP Charger');

hpCharger.print();