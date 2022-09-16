console.log("Le script est lancé!");

const btn1 = document.getElementById('btn1');
btn1.addEventListener("mouseover", () => {
    btn1.classList.toggle("buttonMouseOver");});

    
function addTile () {
    const tile = document.createElement("div");
    const tileContent = {
        title:"New temp Div Here",
        no:1};
    const newContent = document.createTextNode(`Affichage Titre : ${tileContent.title} et affichage numéro ${tileContent.no}`);
    tile.appendChild(newContent);
    // Attaching the new elements to the div
    const currentDiv = document.getElementById("secondZone");
    currentDiv.appendChild(ntile);}
    
const btn2 = document.getElementById('btn2');
btn2.addEventListener("click",() => {
    addTile();
    console.log("click2");});