const url = "https://catfact.ninja/fact";

const fetchData = () => {
    fetch(url).then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
}

fetchData();

console.log("End of script");