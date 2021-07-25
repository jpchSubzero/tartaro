"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola';
    function permitir() {
        console.log('Permitir');
        return false;
    }
    const obtenerSalario = (nombre) => {
        return new Promise((resolve, reject) => {
            if (permitir()) {
                resolve(nombre);
            }
            else {
                reject(nombre);
            }
        });
    };
    console.log(sumar(5, 6));
    console.log(nombre);
    obtenerSalario('Juan Pablo').then(s => console.log(s.toUpperCase())).catch(x => console.error(x));
})();
