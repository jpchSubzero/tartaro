//Quitar los clg
import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser() deber retornar un objeto', () => {
        const resultadoEsperado = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const resultado = getUser();
        console.log(resultado);
        expect(resultado).toStrictEqual(resultadoEsperado);
        
    })
    
    //Tarea: Validar la función getUsuarioActivo()
    test('getUsuarioActivo() deber retornar un objeto', () => {
        const nombre = 'Juan Pablo';

        const resultadoEsperado = {
            uid: 'ABC567',
            username: nombre
        }

        const resultado = getUsuarioActivo(nombre);
        console.log(resultado);
        expect(resultado).toEqual(resultadoEsperado);


    })
    
    
})
