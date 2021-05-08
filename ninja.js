

// Crear la clase ninja
//agregar un atributo: nombre
//agregar un atributo: salud
//agrega un atributo: velocidad - da un valor predeterminado de 3
//agrega un atributo: fuerza - dé un valor predeterminado de 3
//agrega un método: sayName () - Esto debería registrar el nombre de Ninja en la consola
//agrega un método: showStats () - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
//agrega un método: drinkSake () - Esto debería agregar +10 de salud al Ninja


class Ninja {

    constructor(nombre, salud){ 
        this.nombre = nombre ;
        this.salud = salud || 10;
        this.velocidad = 3 ;
        this.fuerza = 3 ;
    }

    sayName () { 
        console.log("Hola mi nombre es:" + this.nombre);
    }

    showStats () {
        console.log(`nombre: ${this.nombre}, salud: ${this.salud}, velocidad: ${this.velocidad}, fuerza: ${this.fuerza}`);
    }
    drinkSake () {
        this.salud += 10;
        console.log(`El ninja: ${this.nombre}tomo Sake y recupero 10 ptos de salud, su salud actual es: ${this.salud}`);
    }

}
const ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1);

