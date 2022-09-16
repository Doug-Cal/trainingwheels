console.log("Le script est lancé!");

const btn1 = document.getElementById('btn1');
btn1.addEventListener("mouseover", () => {
    btn1.classList.toggle("buttonMouseOver");
    });

function addTile () {
    // create a new div element
    const newDiv = document.createElement("div");
    // and give it some content
    const newContent = document.createTextNode("New temp Div Here");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    //const currentDiv = document.getElementById("secondZone");
    document.body.main.insertBefore(newDiv, null);}
    const btn2 = document.getElementById('btn2');
btn2.addEventListener("click",() => {
    console.log("click2");
    addTile();
});
    

    



    