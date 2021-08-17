import React, { useRef } from 'react';

import './styles.css';

export const FocusScreen = () => {

    // Agregar useRef luego de probar el select()
    const inputNameRef = useRef();
    console.log(inputNameRef);

    const handleClick = () => {
        // Permite darle focus al elemento seleccionado
        // document.querySelector('#name').focus();

        // Permite darle focus al elemento seleccionado pero también seleccionar todo el contenido por lo que resulta mejor que simplemente focus
        // document.querySelector('#name').select();

        // Usamos el inputNameRef para referirnos al elemento directamente
        inputNameRef.current.select();
        console.log(inputNameRef);
    };

    return (
        <>
            <h1>Focus screen</h1>
            <hr />

            <input 
                // Usamos el inputNameRef para crear una referencia al elemento
                ref={inputNameRef}
                id="name"
                className="form-control mb-3" 
                placeholder="Ingrese un nombre"
                type="text" 
            />
            <input 
                id="email"
                className="form-control mb-3" 
                placeholder="Ingrese un email"
                type="email" 
            />

            <button
                className="btn btn-outline-primary"
                onClick={handleClick}
            >Focus</button>
        </>
    )
}
