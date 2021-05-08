"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Supersoldado'
    };
    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    var extraer = function (avenger) {
        var nombre = avenger.nombre, clave = avenger.clave;
        console.log(nombre + " alias " + clave);
    };
    extraer(avenger);
    var extraerSimple = function (_a) {
        var nombre = _a.nombre, clave = _a.clave;
        console.log(nombre + " alias " + clave);
    };
    extraerSimple(avenger);
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
    var thorDestructurado = avengers[0], ironmanDestructurado = avengers[1], spidermanDestructurado = avengers[2];
    console.log(thorDestructurado);
    console.log(ironmanDestructurado);
    console.log(spidermanDestructurado);
    var thorDestructurado1 = avengers[0], spidermanDestructurado1 = avengers[2];
    console.log(thorDestructurado1);
    console.log(spidermanDestructurado1);
    var extraerArreglo = function (avengers) {
        console.log(avengers[0]);
        console.log(avengers[1]);
        console.log(avengers[2]);
    };
    extraerArreglo(avengers);
    var extraerArreglo1 = function (_a) {
        var thorDestructurado2 = _a[0], spidermanDestructurado2 = _a[2];
        console.log(thorDestructurado2);
        console.log(spidermanDestructurado2);
    };
    extraerArreglo1(avengers);
})();
