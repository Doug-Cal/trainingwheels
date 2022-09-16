console.log("Le script est lancé!");
let tileNumber = 0;

const btn1 = document.getElementById('btn1');
btn1.addEventListener("mouseover", () => {
    btn1.style.color = 'red';});

function addTile () {
    const tile = document.createElement("div");
    const tileContent = {
        title:"Première recette !",
        no:1};
    const tileName = document.createTextNode(`#${tileContent.no} : ${tileContent.title} `);
   
    tile.appendChild(tileName);
    tile.classList = '.topbar';

        const tileButton = document.createElement("button");
        tileButton.classList = '.headerButton';
        tileButton.id = 'nextButton';
        console.log(tileButton);

        
        tile.appendChild(tileButton);
    // Attaching the new elements to the div
    const currentDiv = document.getElementById("secondZone");
    currentDiv.appendChild(tile);}

const btn2 = document.getElementById('btn2');
btn2.addEventListener("click",() => {
    if(tileNumber === 0){
    addTile();
    tileNumber++}});