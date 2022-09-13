const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    btn1.classList.add("buttonMouseOver");
    btn1.style.padding = "0px";
});
btn1.addEventListener("mouseover", () => {
    btn1.style.background = "black";
});