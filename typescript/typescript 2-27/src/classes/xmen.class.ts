function imprimirConsola(constructorClase: Function) {
    console.log(constructorClase);
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('Decorador de método: ' + propertyKey);
    };
}

@imprimirConsola  
export class Xmen {
    constructor(public nombre: string, public clave: string) {
    }

    @enumerable(true)
    imprimir() {
        console.log(`Impresión: ${this.nombre} - ${this.clave}`);        
    }
}