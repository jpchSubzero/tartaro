"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola';
    const obtenerSalario = (nombre) => {
        return new Promise((resolve, reject) => {
            resolve(nombre);
        });
    };
    console.log(sumar(5, 6));
    obtenerSalario('Juan Pablo').then(s => console.log(s.toUpperCase()));
})();
