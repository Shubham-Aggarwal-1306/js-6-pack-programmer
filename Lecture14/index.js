let a = "Hello World";

let b = a;

console.log(b);
console.log(a);

a = 20;


console.log(a);
console.log(b);


const c = {
    name: "John",
    age: 20
};
 
const d = c;

console.log(d);
console.log(c);

c.age = 30;

console.log(c);
console.log(d);


const RomanReigns = {
    name: "Roman Reigns",
    income: 1000,
    quote: () => {
        console.log(`I am Roman Reigns and my income is ${this.income}`);
    }
};


const SethRollins = {
    name: "Seth Rollins",   
    income: 1000,
    quote: () => {
        console.log(`I am Seth Rollins and my income is ${this.income}`);
    }
}

function Star(weight, height) {
    this.weight = weight;
    this.height = height;
}

const JohnCena = new Star(100, 6);

console.log(JohnCena);

console.log(JohnCena.constructor);