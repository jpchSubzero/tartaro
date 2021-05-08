(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Supersoldado'
    }

    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);

    let { nombre, clave, poder } = avenger;

    console.log(nombre);
    console.log(clave);
    console.log(poder);

    const extraer = (avenger: any) => {
        const { nombre, clave } = avenger;

        console.log(`${nombre} alias ${clave}`);
    }

    extraer(avenger);

    const extraerSimple = ( {nombre, clave}: any ) => {
        console.log(`${nombre} alias ${clave}`);
    }

    extraerSimple(avenger);

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);

    const [thorDestructurado, ironmanDestructurado, spidermanDestructurado] = avengers;

    console.log(thorDestructurado);
    console.log(ironmanDestructurado);
    console.log(spidermanDestructurado);

    const [thorDestructurado1, , spidermanDestructurado1] = avengers;

    console.log(thorDestructurado1);
    console.log(spidermanDestructurado1);

    const extraerArreglo = (avengers: string[]) => {
        console.log(avengers[0]);
        console.log(avengers[1]);
        console.log(avengers[2]);
    }

    extraerArreglo(avengers);

    const extraerArreglo1 = ([thorDestructurado2, , spidermanDestructurado2]: string[]) => {
        console.log(thorDestructurado2);
        console.log(spidermanDestructurado2);
        }

    extraerArreglo1(avengers);    

})();