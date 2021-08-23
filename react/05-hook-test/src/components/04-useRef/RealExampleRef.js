import React, { useState } from 'react';
import './styles.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    // Agregar el state para controlar la visibilidad del componente MultipleCustomHooks
    const [show, setShow] = useState(false);

    return (
        <>
            <h1>RealExampleRef</h1>  
            <hr />

            {/* Agregar un botón para hacer el toogle del componente MultipleCustomHooks */}
            {/* Luego del toogle agregar el setTimeOut al hook useFetch para hacer que demore */}
            {/* Para generar el error hay que mostrar la frase, solicitar la siguiente y ahí mismo ocultar; esto causa que el componente sea desmontado pero el proceso fetch sigue ejecutándose y al concluir ya no tiene un componente a quien devolver la respuesta */}
            {/* Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. */}
            <button className="btn btn-primary" onClick={() => setShow(!show)}>Mostrar/ocultar</button>

            {/* <MultipleCustomHooks /> */}

            {/* Controlar el componente a través del state show */}
            { show && <MultipleCustomHooks /> }
        </>
    )
}
