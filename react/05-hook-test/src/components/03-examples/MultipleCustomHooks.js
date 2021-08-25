import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './styles.css';

export const MultipleCustomHooks = () => {
    const { state: counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            <h3>{ counter }</h3>

            {
                loading ? (
                    <div className="alert alert-info text-center">
                        Cargando frase...
                    </div>
                ) : (
                    <figure className="text-end">
                        <blockquote className="blockquote">
                            <p className="mb-0">{ quote }</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            { author }
                        </figcaption>

                        <button className="btn btn-primary" onClick={() => increment()}>Siguiente frase</button>
                    </figure>
                )
            }
        </>
    )
}
