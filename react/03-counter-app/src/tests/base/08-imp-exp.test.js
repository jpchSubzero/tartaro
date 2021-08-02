import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Prueba de archivo 08-imp-exp', () => {
    test('Debe retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);

        //Buscar manualmente el resultado esperado desde el source
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar undefined cuando no existe el id', () => {
        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    //Tarea: Debe retonrar un arreglo con los héroes de DC, basado en filtro
    //Tarea: Debe retornar un arreglo con los héroes de Marvel, basado en length.
    //Tarea: Debe validar si devuelve undefined cuando no existe el owner. Utilizar por lo menos 3 métodos.

    test('Debe retonrar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
    });

    test('Debe retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);        
    });    

    test('Debe retornar undefined cuando no existe el owner', () => {
        const owner = 'Vértigo';
        const heroes = getHeroesByOwner(owner);
        const heroesVacio = [];

        expect(heroes.length).toBe(0);        

        expect(heroes).toEqual(heroesVacio);         

        expect(heroes[0]).toBe(undefined);         
    });

})
