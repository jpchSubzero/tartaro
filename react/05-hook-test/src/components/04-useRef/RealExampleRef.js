import React, { useState } from 'react';
import './styles.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h1>RealExampleRef</h1>  
            <hr />

            <button className="btn btn-primary" onClick={() => setShow(!show)}>Mostrar/ocultar</button>

            { show && <MultipleCustomHooks /> }
        </>
    )
}
