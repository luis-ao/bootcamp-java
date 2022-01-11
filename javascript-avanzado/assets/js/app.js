let titel = document.getElementById("title");

console.log(titel);
titel.textContent = "Este texto esta escrito desde Javascript" /* Al ser un elemento único lo podemos utilizar como singular */

/* let parrafos = document.getElementsByTagName("p")
console.log(parrafos); /* Nos arroja los parrafos en arreglos 

parrafos[0].textContent = "Parrafos escritos desde Javascript" /* Tenemos que llamar a los arreglos para poder realizar cambios 

for(let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = "Parrafo " + "Escrito desde javascript";
}  */

let email = document.getElementById("email");
let password = document.getElementById("password");

function getInformation() {
    console.log(email.value);
    console.log(password.value);
}