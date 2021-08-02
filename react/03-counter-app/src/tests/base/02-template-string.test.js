import { getSaludo } from '../../base/02-template-string';

//Importar para poder tener sugerencias de métodos
import '@testing-library/jest-dom';

//Quitar los clg del archivo a probar porque se van a ejecutar también
//Exportar la o las funciones que queremos probar
describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo() debe retornar Hola <nombre>', () => {
        const nombre = 'Juan Pablo';

        //Validar directamente la función
        // expect(getSaludo(nombre)).toBe(`Hola ${nombre}`);

        const resultado = getSaludo(nombre);
        console.log(`Resultado: ${resultado}`);
        expect(resultado).toBe(`Hola ${nombre}`);

    })    

    //Agregar un parámetro por defecto a la función
    test('getSaludo() debe retornar Hola Carlos', () => {
        const resultado = getSaludo();
        console.log(`Resultado: ${resultado}`);
        expect(resultado).toBe(`Hola Carlos`);        
    })
    
})
