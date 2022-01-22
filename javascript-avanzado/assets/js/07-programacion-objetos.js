// Clases, molde nos permite crear objetos

class Animal {
    constructor (nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie;
    }

    set setEspecie(especie){
        this.especie = especie;
    }
     
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} </br>`);
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nombre es ${this.nombre} y soy un ${this.especie} </br>`
        return mensaje;
    }
    static saludar(){
        return console.log('Hola, soy un método estático');
    }
}

Animal.saludar();// Al ser estático no nocesitamos crear un objeto para llamarlo y no se hereda a los objtos, sólo vive para la clase 

// hereda los atributos y métodos de la clase que esta usando
const Animal1 = new Animal ('Scooby', 'Perro');
console.log (Animal1);

const Animal2 = new Animal('Pecas', 'Gato');
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = 'Scrappy';//Notación de punto para cambiaar el valor
console.log(Animal1.nombre);
console.log(Animal1);

Animal1.cambiarNombre('Oddie');//método para cambiar el valor
Animal1.presentarse();

// Getters y Setters
// get = obtener el valor de un atributo
// set = Fijar o cambiar el valor de un atributo
// Se utiliza como si fueran atributos
console.log(Animal1.getNombre);
Animal1.setNombre = 'Manchas';
console.log(Animal1.getNombre);
console.log(Animal1);

