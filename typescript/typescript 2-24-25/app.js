"use strict";
(() => {
    class Avenger {
        constructor() {
            this.nombre = 'Sin nombre';
            this.equipo = 'Sin equipo';
            this.nombreReal = 'Sin nombre';
            this.puedePelear = false;
            this.peleasGanadas = 0;
        }
    }
    class Avenger1 {
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    class Avenger2 {
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger();
    antman.nombre = 'Scott';
    console.log(antman);
    const ironman = new Avenger1('Ironman', 'Avengers', 'Tony', true, 10);
    console.log(ironman);
    const thor = new Avenger2('Thor', 'Avengers', 'Thor Odinson');
    console.log(thor);
})();
