function sum(a, b, callback) {
    const result = a + b;
    callback(result);
}

function displaySum(result) {
    const h1 = document.querySelector('h1');
    h1.innerText = result;
}

sum(20, 30, displaySum);
sum(30, 130, alert);


const arr= [1,2,3];

arr.forEach(() => {
    console.log('Hello');
});

const a = [1,2,3,4,5];

function calculator(arr = [], callback) {
    let result = 0;
    arr.forEach((value) => {
        result += value;
    });
    callback(result);
}