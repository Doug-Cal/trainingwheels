console.log("Le script est lancé!");

const btn1 = document.getElementById('btn1');
btn1.addEventListener("mouseover", () => {
    btn1.classList.toggle("buttonMouseOver");});


function addTile () {
    const tile = document.createElement("div");
    const tileContent = {
        title:"Première recette !",
        no:1};
    const newContent = document.createTextNode(`#${tileContent.no} : ${tileContent.title} `);
    tile.appendChild(newContent);
    tile.innerHTML = '<h1> TEST </h1>';
    // Attaching the new elements to the div
    const currentDiv = document.getElementById("secondZone");
    currentDiv.appendChild(tile);}
    
const btn2 = document.getElementById('btn2');
btn2.addEventListener("click",() => {
    addTile();
    console.log("click2");});