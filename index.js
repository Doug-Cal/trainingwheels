const btn1 = document.querySelector(#btn1);
btn1.addEventListener("click", () => {
    btn1.classList.add("buttonMouseOver");
    btn1.style.padding = "0px";
    console.log("click1");
    });


const btn2 = document.querySelector(#btn2);
btn2.addEventListener("click",() => {
    console.log("click2");
    const square = div.querySelector(#secondZone);
    console.log(square);
    square.createElement("div", id="tile");
    const tile = square.querySelector(#tile);
    console.log(tile);
    tile.add(<p>tuile ici</p>);
});

