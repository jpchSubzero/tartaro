import React, { useCallback } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';

import './styles.css';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // Quitar la función original
    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    // Crear el useCallback
    // Utilizar el nombre de la función original
    // Agregar la lógica del hook
    // Reemplazar el state por una función anónima
    const incrementar = useCallback(( num ) => {
            setValor( valor => valor + num )
        },
        [setValor]
    );

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}

// Tarea
// Utilizar memo y useCallback para prevenir que se rendericen cada vez los 5 botones