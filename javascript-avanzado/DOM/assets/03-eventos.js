let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector ('#btnMensaje');
let $spanError = document.querySelector('span');

// addEventListener agrega un evento a un elemnto
$btnMensaje.addEventListener('click',function (){
    console.log('No me presiones');
});

// podemos llamar a una función por lo cual no es necesario que sea una funcion anónima, recordando que no debemos color los parentecis
// Keydown cuando presionas una tecla
/* $mensaje.addEventListener('keydown', mostrarConsola);

function mostrarConsola () {
    console.log('escribiste algo');
}; */

// el evento comunmente se encuentra con "e" pero podemos nombrarlo de la forma que queramos
//.target nos esta recuperando lo que escribe el usuario
$mensaje.addEventListener('keydown', (e) => {
    console.log(e.target.value);
    if(e.target.value.length < 3){
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    } else {
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    }
    // console.log(e)
});