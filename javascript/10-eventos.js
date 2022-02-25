/* Eventos del mouse */

const btn = document.querySelector(".btn"); // se crea una constante con la clase que se le dio al boton

btn.addEventListener("click", function(){
    console.log("El boton se ha pulsado");
});
btn.addEventListener("mouseover", function(){
    console.log("El mouse esta sobre el boton");
});
btn.addEventListener("mouseout", function(){
    console.log("El mouse esta fuera del boton");
});

/* Eventos del Teclado */
window.addEventListener("keydown", function(event){
    console.log("pulsando tecla");
    console.log(String.fromCharCode(event.keyCode));//podremos ver que tecla apreto el usuario
});
window.addEventListener("keypress", function(event){
    console.log("tecla pulsada");
});
window.addEventListener("keyup", function (event){
    console.log("Tecla liberada");
});

const video = document.querySelector(".video-1");

video.addEventListener("play", function(){
    console.log("El video ha iniciado");
});
video.addEventListener("seeking", function (){
    console.log("se esta buscando en el video", this.currentTime);
});
video.addEventListener("ended", function(){
    console.log("El video ha terminado");
});

/* Ventana de Alerta */
video.addEventListener("ended", function (){
    alert("Mensaje: /n /n el vídeo ha terminado"); // "/n" añade un salto de línea
});
video.addEventListener("ended", function (){
    let resultado = confirm("¿Deseas ver el vídeo nuevamente?");
    console.log(resultado);
    if(resultado){
        video.play();
    } else {
        window.location = "http://www.google.com";
    }
});
