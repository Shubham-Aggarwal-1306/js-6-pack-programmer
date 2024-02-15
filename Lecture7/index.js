const arr = [2, 4, 6, 8, 10];

arr.find((value, index) => {
    console.log(value, index);
    return value === 6;
});

console.log(arr);