"use strict";
(function () {
    var mensaje = 'Hola';
    var mensaje1 = 'Hola';
    var numero = 123;
    var booleano = true;
    var hoy = new Date();
    var hoy1 = new Date();
    var sinTipo;
    var tipoLimitado;
    var spiderman = {
        nombre: 'Peter',
        edad: 30
    };
    //    spiderman = {}; //Error porque no se pone valores a propiedades
    spiderman = {
        nombre: 'Miles',
        edad: 18
    };
    sinTipo = mensaje;
    sinTipo = numero;
    sinTipo = hoy;
    sinTipo = booleano;
    tipoLimitado = mensaje;
    tipoLimitado = numero;
    tipoLimitado = hoy;
    //    tipoLimitado = booleano; //No soporta este tipo
    mensaje = '123';
    numero = 123;
    console.log(mensaje);
    console.log(numero);
    console.log(hoy);
    console.log(spiderman);
})();
