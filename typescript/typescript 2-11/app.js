"use strict";
(function () {
    function saludar(nombre) {
        console.log('Hola ' + nombre); // Hola Logan
    }
    function saludarVarios(fruits) {
        console.table(fruits); // Hola Logan
        console.log(fruits); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    var fruits = ["apples", "oranges", "bananas"];
    saludarVarios(fruits);
    saludar(wolverine.nombre);
})();
