import { useFetchImages } from "../../hooks/useFetchImages";
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas con el hook useFetchImages', () => {

    // No se va a hacer match con snapshot ya que no tiene ningún componente a mostrar
    test('Debe de retornar el estado inicial, data vacío y loading true', async () => {

    // Convertir la función async para poder usar waitForNextUpdate
    // test('Debe de retornar el estado inicial, data vacío y loading true', () => {
            // //Copiamos el hook de algún componente donde se utilice, GifGrid
        // const { loading, data:images } = useFetchImages(category);
        // const { loading, data:images } = useFetchImages('saint seiya');
        // console.log(images);

        // Primera prueba, mostrar la data, dará un error porque no hay category
        // Segunda prueba con el error:
        // Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
        // 1. You might have mismatching versions of React and the renderer (such as React DOM)
        // 2. You might be breaking the Rules of Hooks
        // 3. You might have more than one copy of React in the same app

        // Para poder probar el hook se necesita instalar una librería: https://react-hooks-testing-library.com/
        // Instalar: npm install --save-dev @testing-library/react-hooks
        // Una vez instalada quitamos lo anteriormente definido

        // Importamos la librería y utilizamos la función renderHook que recibe una función
        const response = renderHook( () => useFetchImages('saint seiya'));

        // Mostramos la respuesta pero no se puede ver la información porque está envuelta
        console.log(response);

        // Para obtener la respuesta destructuramos response para obtener result y luego result.current para obtener la data y loading
        // const { result } = renderHook( () => useFetchImages('saint seiya'));

        // Agregar el waitForNextUpdate para permiter ejecutar la siguiente prueba sin problemas
        const { result, waitForNextUpdate } = renderHook( () => useFetchImages('saint seiya'));
        const { loading, data } = result.current;

        // Hacemos el update del hook, debe estar después de la destructuración para que mantengan los valores iniciales
        await waitForNextUpdate();

        console.log(loading);
        console.log(data);

        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    });

    // test('Debe retornar un arreglo de imágenes y loading en false', () => {
    // Convertimos la función a asíncrona para poder utilizar waitForNextUpdate ya que devuelve una promesa
    test('Debe retornar un arreglo de imágenes y loading en false', async () => {
            // Importamos waitForNextUpdate para poder esperar el resultado de useEffect
        const { result, waitForNextUpdate } = renderHook( () => useFetchImages('saint seiya'));

        // Esta función permite esperar por las tareas asíncronas del hook, en este caso el useEffect porque getGifs(category) devuelve una promesa
        // Solo llamando la función nos da el error de que el componente no está montado, esto es porque en la prueba anterior fue montado y desmontado, para hacer que funcione se debe cometar el test anterior y cambiar los expect.
        // Para mantener ambas pruebas se puede actualizar en ambas y así completar el ciclo para que no falle
        await waitForNextUpdate();

        const { loading, data } = result.current;

        console.log(loading);
        console.log(data.length);

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });    
})
