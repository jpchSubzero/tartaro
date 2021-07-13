"use strict";
(function () {
    var miFuncion = function (a) {
        return a;
    };
    var miFuncion1 = function (a) {
        return a.toUpperCase();
    };
    function miFuncion2(a) {
        return a;
    }
    var miFuncion3 = function (a) { return a.toUpperCase(); };
    var miFuncion4 = function (a) {
        var xxx = a.toUpperCase();
        xxx += ' asdfasdfasd';
        return xxx;
    };
    var miFuncion5 = function (a, b) {
        return a + b;
    };
    var miFuncion6 = function (a, b) { return a + b; };
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            //Esta función modifica el scope o alcance y no utilizar las variables de la constante
            setTimeout(function () {
                console.log(this.nombre + " smash!!!!"); //Falla porque function modificó el scope
            }, 1000);
        }
    };
    var hulk1 = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            //Esta función no modifica el scope o alcance
            setTimeout(function () {
                console.log(_this.nombre + " smash!!!!");
            }, 1000);
        }
    };
    console.log(miFuncion('miFuncion'));
    console.log(miFuncion1('miFuncion1'));
    console.log(miFuncion2('miFuncion2'));
    console.log(miFuncion3('miFuncion3'));
    console.log(miFuncion4('miFuncion4'));
    console.log(miFuncion5(4, 5));
    console.log(miFuncion6(14, 15));
    hulk.smash();
    hulk1.smash();
})();
