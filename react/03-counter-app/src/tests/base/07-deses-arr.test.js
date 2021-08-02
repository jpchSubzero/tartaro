import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas de archivo 07-deses-arr', () => {
    test('retornaArreglo debe devolver un arreglo', () => {
        //Desestructurar para no probar el arreglo sino sus elementos
        const [key, value] = retornaArreglo();

        const keyEsperado = 'ABC';
        const valueEsperado = 123;

        expect(key).toBe(keyEsperado);

        //Validar si es string
        expect(value).toBe(valueEsperado);

        expect(typeof key).toBe('string');

        //Validar si es number
        expect(typeof value).toBe('number');

        //Tarea: Validar por clave y valor
        expect([key, value]).toEqual([keyEsperado, valueEsperado]);
    })
    
})
