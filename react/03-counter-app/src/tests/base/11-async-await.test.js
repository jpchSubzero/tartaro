//Crear/verificar cuenta en giphy para obtener un apiKey
//Quitar la invocación a la función
//Quitar la parte 
    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append( img );
//Agregar un return del url
//Agregar un return del error No existe

import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas del archivo 11-async-await', () => {
    test('Debe retornar el url de la imagen', async () => {
        const url = await getImagen();
        console.log(url);
        //Valida que sea un string la respuesta pero también pasa si viene el error
        expect(typeof url).toBe('string');

        //Validar que la respuesta contenga https://media para saber si es url o el error
        expect(url.includes('https://media')).toBe(true);

    })
})
