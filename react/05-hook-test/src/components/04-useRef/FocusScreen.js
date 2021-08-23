import React, { useRef } from 'react';

import './styles.css';

export const FocusScreen = () => {

    const inputNameRef = useRef();

    const handleClick = () => {
        inputNameRef.current.select();
    };

    return (
        <>
            <h1>Focus screen</h1>
            <hr />

            <input 
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
