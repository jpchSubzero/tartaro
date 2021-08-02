// console.log('Prueba 1');


//Snippet -> desc
describe('Pruebas del archivo demo.test.js', () => {
    //Snippet -> test
    test('deben ser iguales los strings', () => {

    // test('Debe ser true', () => {
        //Para hacer fallar el test, no se usa de esta forma
        // const estaActiva = true;
        // if (estaActiva) {
        //     throw new error('No está activo');
        // }
    
        //1. Inicialización
        const mensaje1 = 'Hola mundo';
    
        //2. Estímmulo
        const mensaje2 = `Hola mundo`;
    
        //3. Observar comportamiento
        //Usando .toBe() de Jest
        expect(mensaje1).toBe(mensaje2);
    })    
})
