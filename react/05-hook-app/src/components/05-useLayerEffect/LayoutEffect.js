// Copiar el código de MultipleCustomHooks, limpiar código, quitar condición ternaria, quitar loading

import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './styles.css';

export const LayoutEffect = () => {
    const { state: counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    // Luego de presentar en clg las medidas de la frase las guardamos en el state
    const [boxSize, setBoxSize] = useState({});

    // Luego de crear el useLayoutEffect es necesario tener una referencia del elemento a revisar. Se puede hacer cono document.querySelector o con el hook
    const pElement = useRef();

    // La sintaxis es igual que useEffect pero se ejecuta después de que se actualizó el DOM.
    // En este caso vamos a observar la cita que esta en un <p> y su valor en quote
    useLayoutEffect(() => {
        console.log('useLayoutEffect');
        console.log(pElement.current.getBoundingClientRect());
        setBoxSize(pElement.current.getBoundingClientRect());
    }, [quote]);

    return (
        <>
            <h1>LayoutEffect Breaking Bad Quotes</h1>
            <hr />

            <figure className="text-end">
                <blockquote className="blockquote">
                    <p ref={pElement}>{ quote }</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    { author }
                </figcaption>

                <button className="btn btn-primary" onClick={() => increment()}>Siguiente frase</button>
            </figure>

            {/* Agregar un <pre> para visualizar las dimensiones sin utilizar la consola */}
            <pre>{ JSON.stringify(boxSize, null, 3) }</pre>
        </>
    )
}
