//Copiar el código de Memorize y quitar el componente Small, dejando con small

import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

// Importar el nuevo helper
import { heavyProcess } from '../../helpers/heavyProcess';

import './styles.css';

export const MemoHook = () => {

    // const {state, increment} = useCounter(10);

    // Cambiar el valor de counter incial a 5000
    const {state, increment} = useCounter(5000);
    const [show, setShow] = useState(true);

    // Crear un falso proceso pesado
    // Luego de que funcione el useMemo mover la función al helper heavyProcess.js ya que no es competencia del componente realizar procesamiento
    // const heavyProcess = (iterations) => {
    //     for (let i = 0; i < iterations; i++) {
    //         console.log('Procesando...');
    //     }

    //     return `${iterations} iteraciones realizadas`;
    // };


    const memoHeavyProcess = useMemo(() => heavyProcess(state), [state]);

    return (
        <>
            <h1>Memorize</h1>  
            <h2>Counter: <small>{state}</small></h2>  

            <hr />

            {/* Cada vez que se hace clic en los botones se dispara heavyProcess y causa más y más consumo de RAM. Esto se puede ver en el administrador de tareas del navegador. */}
            {/* <p>{ heavyProcess(state) }</p> */}

            {/* Utilizamos el useMemo en lugar de la función directamente */}
            <p>{ memoHeavyProcess }</p>

            <button onClick={() => increment()} className="btn btn-primary me-3">+1</button>
            <button onClick={() => setShow(!show)} className={ show ? 'btn btn-secondary' : 'btn btn-success' }>{ show ? 'Ocultar' : 'Mostrar' }</button>
        </>
    )
}
