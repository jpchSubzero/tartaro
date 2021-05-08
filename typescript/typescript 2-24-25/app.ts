(() => {

    class Avenger {
        nombre: string = 'Sin nombre';
        equipo: string = 'Sin equipo';
        nombreReal: string = 'Sin nombre';
        puedePelear: boolean = false;
        peleasGanadas: number = 0;
    }

    class Avenger1 {
        nombre: string;
        equipo: string;
        nombreReal?: string;
        puedePelear: boolean;
        peleasGanadas: number;

        constructor(
            nombre: string,
            equipo: string,
            nombreReal: string,
            puedePelear: boolean,
            peleasGanadas: number,
        ) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
    
        }
    }

    class Avenger2 {
        constructor(
            public nombre: string,
            public equipo: string,
            public nombreReal?: string,
            public puedePelear?: boolean,
            public peleasGanadas?: number,
        ) { }
    }

    const antman: Avenger = new Avenger();
    antman.nombre = 'Scott';
    console.log(antman);

    const ironman = new Avenger1(
        'Ironman',
        'Avengers',
        'Tony',
        true,
        10
    );
    console.log(ironman);

    const thor = new Avenger2(
        'Thor',
        'Avengers',
        'Thor Odinson'
    );
    console.log(thor);

})();