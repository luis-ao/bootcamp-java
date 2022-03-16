var heladoCafe = 34;
var heladoChicle = 32;
var heladoChocolate = 30;
var heladoVainilla = 25;
var heladoMoka = 23;
var heladoDurazno = 23;
var heladoLimon = 19;

function filtroPrecios (dinero){
    if (dinero >= 34){
        return "te alcanza para un helado de Café";
    } else if (dinero >= 32 && dinero < 34){
        return "te alcanza para un helado de Chicl";
    } else if (dinero >= 30 && dinero < 32){
        return "te alcanza para un helado de Chocolate";
    } else if (dinero >= 25 && dinero < 30){
        return "te alcanza para un helado de Vainilla";
    } else if (dinero >= 23 && dinero < 25){
        return "te alcanza para un helado de Durazno o de Moka";
    } else if (dinero >= 19 && dinero < 23){
        return "t e alcanza para un helado de Limón";
    } else {
        let dineroCliente = dinero;
        return "tienes " + dineroCliente + " pesos, no te alcanza para un helado";
    }
}

/* FORMULARIO */
const $form = document.querySelector("#formDinero")
$form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    
    const form = new FormData(this)
    const danyDinero = form.get("dany")
    document.write("Dany " + filtroPrecios(danyDinero) + "</br>")
    const jesusDinero = form.get("jesus")
    document.write("Jesús " + filtroPrecios(jesusDinero) + "</br>")
    const martinDinero = form.get("martin")
    document.write("Martín " + filtroPrecios(martinDinero))
}
