import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import './styles.css';

export const Memorize = () => {

    // Utilizamos el hook de counter
    const {state, increment} = useCounter(10);

    // Agregar un state
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Memorize</h1>  
            {/* <h2>Counter: <small>{state}</small></h2>   */}

            {/* Convertir el <small> en el componente <Small /> */}
            <h2>Counter: <Small value={state}/></h2>  
            <hr />

            <button onClick={() => increment()} className="btn btn-primary me-3">+1</button>

            {/* Agregar un botón para utilizar el state show */}
            <button onClick={() => setShow(!show)} className={ show ? 'btn btn-secondary' : 'btn btn-success' }>{ show ? 'Ocultar' : 'Mostrar' }</button>

        </>
    )
}
