console.log("Le script est lancé!");

const btn1 = document.getElementById('btn1');
btn1.addEventListener("mouseover", () => {
    btn1.classList.toggle("buttonMouseOver");
    });


const btn2 = document.getElementbyId("btn2");
btn2.addEventListener("click",() => {
    console.log("click2");
    const square = div.getElementbyId('secondZone');
    console.log(square);
    square.createElement("div", id="tile");
    const tile = square.getElementbyId("#tile");
    console.log(tile);
    //tile.add('<p>tuile ici</p>');
        tile.addEventListener('mouseover',() => {
        console.log("mouseoveeeeeeer") });
    });

const navigatorMouvement = document.querySelector('body');
navigatorMouvement.addEventListener('mousemove',() => {
    if(btn2){
        console.log(btn2);}
    });

//const mouse = document.querySelector('')