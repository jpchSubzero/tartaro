import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './styles.css';

export const LayoutEffect = () => {
    const { state: counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    const [boxSize, setBoxSize] = useState({});

    const pElement = useRef();

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

            <pre>{ JSON.stringify(boxSize, null, 3) }</pre>
        </>
    )
}
