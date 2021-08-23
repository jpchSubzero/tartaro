import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import './styles.css';

export const Memorize = () => {
    const {state, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Memorize</h1>  
            <h2>Counter: <Small value={state}/></h2>  
            <hr />

            <button onClick={() => increment()} className="btn btn-primary me-3">+1</button>

            <button onClick={() => setShow(!show)} className={ show ? 'btn btn-secondary' : 'btn btn-success' }>{ show ? 'Ocultar' : 'Mostrar' }</button>

        </>
    )
}
