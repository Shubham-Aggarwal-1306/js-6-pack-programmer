const printName = (name, income, male) => {

    let gender = male;
    if (gender) {
        gender = "he";
    }
    else {
        gender = "she";
    }
    console.log(`Hello ${name} your income is ${income}. Gender is ${gender}`);
};

const btn = document.getElementById('btn');

const customTimeout = setTimeout(printName, 5000, "John", 1000, true);

btn.addEventListener('click', () => {
    console.log('Button clicked');
    clearTimeout(customTimeout);
});

const customInterval = setInterval(printName, 1000, "Shubh", 1000, true);

btn.addEventListener('click', () => {
    console.log('Button clicked');
    clearInterval(customInterval);
});



