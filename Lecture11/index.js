const input = document.getElementById("userInput");
const btn = document.getElementById("btn");

const btnClick = () => {
    sessionStorage.setItem("inputValue", input.value);
}

btn.addEventListener("click", btnClick);

if (sessionStorage.getItem("inputValue")) {
    alert(sessionStorage.getItem("inputValue"));
}


