console.log("Le script est lancé!");

const btn1 = document.getElementById('btn1');
btn1.addEventListener("mouseover", () => {
    btn1.classList.toggle("buttonMouseOver");});
    btn1.style.color = 'red';

function addTile () {
    const tile = document.createElement("div");
    const tileContent = {
        title:"Première recette !",
        no:1};
    const newContent = document.createTextNode(`#${tileContent.no} : ${tileContent.title} `);
    
    
    /* ci-dessous instancier un bouton dans l'invocation elle-même */
    const tileButton = document.createElement("button");
    tileButton.classList = '.headerButton';
    tileButton.id = 'nextButton';
    console.log(tileButton);
    tile.innerHTML = `<h1> TEST 
                        <button class="headerButton" id="btn1btnNext">Suivant</button>
                    </h1>`;


        /* FIN ZONE DE TRAVAIL */
        tile.classList = '.topbar';
        tile.appendChild(newContent);
        tile.appendChild(tileButton);
    // Attaching the new elements to the div
    const currentDiv = document.getElementById("secondZone");
    currentDiv.appendChild(tile);}

const btn2 = document.getElementById('btn2');
btn2.addEventListener("click",() => {
    addTile();
    console.log("click2");});