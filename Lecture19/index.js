const arr = []

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            arr.push({ name: 'John' })
            if (arr.length > 0) {
                resolve("Data fetched successfully")
            } else {
                reject("Data not found")
            }
        }, 2000)
    })
}

fetchData().then((data) => {
    console.log(data)
    console.log(arr)
}).catch((err) => {
    console.log(err)
    console.log(arr)
}).finally(() => {
    console.log("Finally block")
})
