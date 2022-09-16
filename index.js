console.log("Le script est lancé!");
let tileNumber = 0;



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
        
        tile.appendChild(tileButton);
    // Attaching the new elements to the div
    const currentDiv = document.getElementById("secondZone");
    currentDiv.appendChild(tile);
}



function step(){
    const recipe = {
        name:"Crumbubble",
        stepNumber :2,
        ingredients:[['apples', 2], ['oranges', 1]],
    }

    const actionTitle = document.getElementById('action').createTextNode(`Ingrédients et ustensiles pour votre ${recipe.name}`);
    const descriptionText = document.getElementById('description');
        descriptionText.createTextNode(`${recipe.ingredients}`);
    const next = document.getElementById('nextStep');
        next.addEventListener('click', () => {
            console.log('next step when clicked')});
    const counter = document.getElementById('stepCounter');
        counter.createTextNode('2/2');
}





const btn1 = document.getElementById('btn1');
    btn1.addEventListener("click", () => {
    btn1.style.color = 'red';
    step()});

const btn2 = document.getElementById('btn2');
    btn2.addEventListener("click",() => {
    if(tileNumber === 0){
    addTile();
    tileNumber++}});