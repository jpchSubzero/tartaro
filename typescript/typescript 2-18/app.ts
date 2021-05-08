(function(){

    let miFuncion = function (a: string) {
        return a;
    }

    const miFuncion1 = function (a: string) {
        return a.toUpperCase();
    }

    function miFuncion2(a: string) {
        return a;
    }

    const miFuncion3 = (a: string) => a.toUpperCase();

    const miFuncion4 = (a: string) => {
        let xxx = a.toUpperCase();
        xxx += ' asdfasdfasd';
        return xxx;
    }

    const miFuncion5 = function(a: number, b: number) {
        return a + b;
    }

    const miFuncion6 = (a: number, b: number) => a + b;

    const hulk = {
        nombre: 'Hulk',
        smash() {
            //Esta función modifica el scope o alcance y no utilizar las variables de la constante
            setTimeout(function() {
                console.log(`${this.nombre} smash!!!!`);
            }, 1000);
        }
    }

    const hulk1 = {
        nombre: 'Hulk',
        smash() {
            //Esta función no modifica el scope o alcance
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!!`);
            }, 1000);
        }
    }

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