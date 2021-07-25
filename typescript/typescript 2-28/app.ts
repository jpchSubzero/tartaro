(() => {

    const sumar = (a: number, b: number): number => a + b;

    const nombre = (): string => 'Hola';

    function permitir():boolean {
        console.log('Permitir');
        return false;
    }

    const obtenerSalario = (nombre: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (permitir()) {
                resolve(nombre);
            } else {
                reject(nombre);
            }
        });
    }

    console.log(sumar(5, 6));

    console.log(nombre);

    obtenerSalario('Juan Pablo').then(s => console.log(s.toUpperCase())).catch(x => console.error(x));
})();