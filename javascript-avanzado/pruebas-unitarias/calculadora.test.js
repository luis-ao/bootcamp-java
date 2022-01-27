const {sumar} = require("./calculadora");

discribe("Pruebas en el componente claculadora",() => {
    test ("Prueba en la función sumar", () => {
        expect(sumar(3, 5)).toBe(8);
    });
});