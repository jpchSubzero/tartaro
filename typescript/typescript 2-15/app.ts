(function(){
    let mensaje: string = 'Hola';
    let mensaje1  = 'Hola';
    let numero: number = 123;
    let booleano: boolean = true;
    let hoy: Date = new Date();
    let hoy1 = new Date();

    let sinTipo;
    let tipoLimitado: string | number | Date;

    let spiderman = {
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