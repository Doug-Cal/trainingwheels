let userName ="001";

const alert = (testUserName) => {
 if(testUserName == '001'){
    return `Hello ${userName}`;
 } else return "unknown";
};


const topBar = document.querySelector("nav");
const test = topBar.addEventListener("mouseover") => {
 alert();
};