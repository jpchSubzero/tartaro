"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviando a: ${xmen.nombre}`);
    };
    const enviarMision1 = (xmen) => {
        console.log(`Enviando a: ${xmen.nombre}`);
    };
    const enviarMision2 = (xmen) => {
        console.log(`Enviando a: ${xmen.nombre}`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 200
    };
    const cypclops = {
        nombre: 'Scott',
        edad: 30
    };
    enviarMision(wolverine);
    enviarMision1(wolverine);
    enviarMision2(cypclops);
})();
