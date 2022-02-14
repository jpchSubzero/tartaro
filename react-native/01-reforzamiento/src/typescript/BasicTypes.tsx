import React from 'react'

export const BasicTypes = () => {
    let name:string  = 'Juan Pablo';
    let identification:string | number = '0000000011'
    identification = 1100000000;
    const age = 43;
    const active = true;

    // Error al intentar crear un arreglo sin definición de tipo de dato
    // const powers = [];

    // Arreglo de varios tipos de dato
    // const powers:(string | boolean)[] = [];

    const powers:string[] = ['Velocidad', 'Fuerza', 'Volar'];

    return (
        <>
            <h3>Tipos básicos</h3>
            {name} - {identification} - {age} - {(active) ? 'activo' : 'Inactivo'} - {powers.join(', ')}
        </>
    );
}
