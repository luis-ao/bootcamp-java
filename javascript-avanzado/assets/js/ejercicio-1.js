let name = document.getElementById("name");

function getInformation(){
    let usuario = prompt("cuál es tu nombre?");
    name.textContent = "hola " + usuario;
}


