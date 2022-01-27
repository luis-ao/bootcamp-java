const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}
const restar = (numero1, numero2) => {
    return numero1 - numero2;
}
const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
}
const dividir = (numero1, numero2) => {
    return numero1 / numero2;
}
const mostrarResultado = (operacion, numero1, numero2, resultado) => {
    const respuesta = document.createElement("h3");
    respuesta.textContent = `La ${operacion} de ${numero1} y ${numero2} es ${resultado}`;
    document.body.appendChild(respuesta);
}

export {
    sumar,
    restar,
    multiplicar,
    dividir,
    mostrarResultado
}

/* OTRA FORMA
export const dividir = (numero1, numero2) => {
    return numero1 / numero2;
} */

