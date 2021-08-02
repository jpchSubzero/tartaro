//Quitar comentarios y clg
//Quitar el consumo de la promesa porque causaría que ya se resuelva desde la función

import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

const timeout = 500;

describe('Pruebas de archivo 09-promesas', () => {
    //Agregar parámetro done para que la prueba sepa que debe esperar
    //Agregar done() cuando terminan las pruebas (expects) para que sepa que ya terminó todo
    //Agregar .catch() para controlar un error de timeOut que puede darse con done como parámetro
    test('getHeroeByIdAsync() debe retornar un héroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                //Para validar que de error o pase al configurar esta prueba con y sin done, done() y .catch
                // expect(false).toBe(true);

                //id - 1 porque los id van desde 1 y el arreglo data inicia en 0
                expect(heroe).toEqual(heroes[id - 1]);

                done();
 
            })
            .catch(done);
    })

    //Agregar .then() para controlar un error de timeOut que puede darse con done como parámetro
    test('getHeroesByIdAsync() debe retornar un error: No se pudo encontrar el héroe cuando no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .then(done)
            .catch(err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            });
    })

    //Tarea: Debe retornar un error: No se pudo encontrar el héroe cuando no existe y el héroe cuando existe
    test('getHeroesByIdAsync() debe retornar un error: No se pudo encontrar el héroe cuando no existe y el héroe cuando existe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual(heroes[id - 1]);
                done();
            })
            .catch(err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            });
    })
    
})
