import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    // Agregar el custom hook destructurado. Utilizamos un alias para el state. Probar con cambios en el valor inicial
    // const { state: counter, increment, decrement } = useCounter();

    {/* Resolución de tarea. Agregar reset */}
    const { state: counter, increment, decrement, reset } = useCounter();


    return (
        <>
            {/* <h1>Counter with hook: { 0 }</h1> */}

            {/* Cambiamos el valor quemado por el counter(state) */}
            <h1>Counter with hook: { counter }</h1>
            <hr />

            {/* <button className="btn btn-primary">+1</button>
            <button className="btn btn-secondary">-1</button> */}

            {/* Agregar los eventos del custom hook */}
            {/* Al momento de agregar el factor al hook esta implementación va a fallar porque la función sin parámetros toma por defecto el primer argumento que recibe y en este caso es el evento del click ($event), por esa razón empieza a presentar ObjectObject  */}
            {/* <button className="btn btn-primary" onClick={increment}>+1</button>
            <button className="btn btn-secondary" onClick={decrement}>-1</button> */}

            {/* Para que funcionen los eventos del hook con parámetros debemos especificar que es un callback y no por defecto */}
            {/* Si se envía vacío tomará los valores por defecto */}
            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button className="btn btn-secondary" onClick={() => decrement()}>-1</button>

            {/* Resolución de tarea */}
            <button className="btn btn-success" onClick={() => reset()}>Reset</button>
        </>
    )
}

// Tarea 1
// Crear el botón de reset para que vuelva al valor inicial