const heading = document.getElementById("heading");
const box1 = document.getElementById("box1");
const btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
    heading.style.color = "red";
    box1.classList.add("classForDiv");
});

box1.addEventListener("mouseover", () => {
    box1.style.backgroundColor = "yellow";
});