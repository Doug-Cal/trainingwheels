console.log("Le script est lancé!");

const btn1 = document.getElementById("#btn1");
console.log(btn1); //Check if btn1 is correctly assigned
btn1.addEventListener("click", () => {
    btn1.classList.add("buttonMouseOver");
    console.log("click1");
    });
/*
const btn2 = document.getElementbyId("#btn2");
btn2.addEventListener("click",() => {
    console.log("click2");
    const square = div.getElementbyId("#secondZone");
    console.log(square);
    square.createElement("div", id="tile");
    const tile = square.getElementbyId("#tile");
    console.log(tile);
    //tile.add(<p>tuile ici</p>);
    });
*/