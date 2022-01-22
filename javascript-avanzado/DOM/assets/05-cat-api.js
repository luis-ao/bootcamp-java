let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () => {
    /* fetch ('https://api.thecatapi.com/v1/images/search')
     .then(resp => resp.json()).then(data => {
         console.log(data);

         let imagenGatiyo = document.createElement('img');
         imagenGatiyo.src = data[0].url;
         document.body.appendChild(imagenGatiyo);
     }) */

     fetch ('https://dog.ceo/api/breeds/image/random')
     .then(resp => resp.json()).then(data => {
         console.log(data);

         let imagenGatiyo = document.createElement('img');
         imagenGatiyo.src = data.message;
         document.body.appendChild(imagenGatiyo);
     })
});



// Hace una petición por fetch y nos devuelve una promesa, después .them le pedimos que la procese como JSON, nos devuelve otra promesa y después podemos imprimirla en consola 