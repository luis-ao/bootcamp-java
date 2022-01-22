class Pokemon{
    constructor(nombre, tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }

    // Métodos
    atacar(){
        return console.log(`${this.nombre} está atacando.`);
    }
}

class Pikachu extends Pokemon{
    constructor(nombre, tipo, edad){
        super(nombre, tipo);
        this.edad=edad;
    }

    // Metodos
    evolucionar(){
        return console.log(`${this.nombre} esta evolucionando.`)
    }
}

/* Se puede extender las clases a más de 2 pero no es rocomentable ya que causa más rrores que los que soluciona 

class electrico extends Pikachu {
    constructor(nombre, tipo, edad){
        this.color = color;
    }
} */

const Pikachu1 = new Pikachu('Juan', 'Eléctrico', 3);// Pertenece a la clase Pikachu
console.log(Pikachu1);
Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon('Charmander', 'Fuego');// Pertenece a la clase Pokemon
Pokemon1.atacar();


