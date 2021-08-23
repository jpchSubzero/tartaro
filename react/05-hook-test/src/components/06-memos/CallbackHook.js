import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import './styles.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // Luego de crear la función creamos el componente ShowIncrement que la recibirá como parámetro
    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    // Reemplazamos la función por el hook
    // No funciona porque solo incrementa una vez y presenta un warning de que falta la dependencia del counter
    // React Hook useCallback has a missing dependency: 'counter'. Either include it or remove the dependency array. You can also do a functional update 'setCounter(c => ...)' if you only need 'counter' in the 'setCounter' call
    // const increment = useCallback(() => {
    //         setCounter(counter + 1);
    //     },
    //     [setCounter]
    // );

    // No funciona porque el counter cambia con cada incremento y otra vez hará que se renderice cada vez
    // const increment = useCallback(() => {
    //         setCounter(counter + 1);
    //     },
    //     [setCounter, counter]
    // );

    // De esta forma evitamos utilizar counter y lo reemplazamos por un callback, es decir, una función anónima que representa a counter
    // const increment = useCallback(() => {
    //         setCounter(c => c + 1);
    //     },
    //     [setCounter]
    // );

    // Para enviar parámetros en el hook
    const increment = useCallback((factor) => {
            setCounter(c => c + factor);
        },
        [setCounter]
    );

    // Se puede utilizar con useEffect para hacer que se ejecute solo cuando cambia una función
    useEffect(() => {
        console.log('useEffect');
    }, [increment]);

    return (
        <>
            <h1>CallbackHook</h1>  
            <hr />            

            <h2>useCallback: { counter }</h2>  

            {/* Esto nos carga el botón de incremento pero cada vez que lo ejecutamos los vuelve a renderizar como se ve en la consola */}
            <ShowIncrement increment={increment}/>
        </>
    )
}
