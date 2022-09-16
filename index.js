console.log("Le script est lancé!");

const btn1 = document.getElementById('btn1');
btn1.addEventListener("mouseover", () => {
    btn1.classList.toggle("buttonMouseOver");
    });

const btn2 = document.getElementById('btn2');
btn2.addEventListener("click",() => {
    console.log("click2");
    const square = document.getElementById('secondZone');
    console.log(square);
    square.createElement("div", id="tile", classList ="tile");
    const tile = square.getElementById("#tile");
    console.log(tile);
    //tile.add('<p>tuile ici</p>');
        tile.addEventListener('mouseover',() => {
        console.log("mouseoveeeeeeer") });
    });

/*Réservé pour l'animation des blocs
const navigatorMouvement = document.querySelector('body');
navigatorMouvement.addEventListener('mousemove',() => {
    if(btn2){
        console.log(btn2);}
    });
*/
