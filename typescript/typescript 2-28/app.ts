(() => {

    const sumar = (a: number, b: number): number => a + b;

    const nombre = (): string => 'Hola';

    const obtenerSalario = (nombre: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve(nombre);
        });
    }

    console.log(sumar(5, 6));

    console.log(nombre);

    obtenerSalario('Juan Pablo').then(s => console.log(s.toUpperCase()));
})();