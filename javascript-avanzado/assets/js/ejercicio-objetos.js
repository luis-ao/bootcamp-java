/* 
Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.

*/


class Carro{
    velocidad = 0;

    constructor(marca, color, modelo, velocidad, numeroDePuertas){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroDePuertas = numeroDePuertas;

    }

    acelerar(){
        this.velocidad = this.velocidad + 1;
    }

    frenar(){
        this.velocidad = 0;
    }

    reversa(){
        this.velocidad = this.velocidad - 1;
    }

    toString(){
        document.write(`Marca: ${this.marca} Color: ${this.color} Modelo${this.modelo} Velocidad: ${this.velocidad} Numero de puertas: ${this.numeroDePuertas}<br>`);
    }
}

const tsuru = new Carro("mi trokita", "rojo", "tsuru", 0, 4);
console.log(tsuru);

tsuru.acelerar();
tsuru.toString();
tsuru.frenar();
tsuru.toString();
tsuru.reversa();
tsuru.toString();