import React from 'react';

// Probar con memo pero no funciona porque este componente recibe una función y esa función está en una constante del componente padre y cada vez que se actualiza el padre actualiza la constante que, al ocupar otra dirección de memoria, hace que este componente la tome como un cambio porque en realidad es otra constante.
// Se necesita el useCallback en el padre para que el memo funcione correctamente
export const ShowIncrement = React.memo(({increment}) => {

    console.log('ShowIncrement renderizado');

    return (
        // <button className="btn btn-primary" onClick={() => increment()}>

        // En caso de utilizar parámetros se los pasa como siempre
        <button className="btn btn-primary" onClick={() => increment(5)}>
            Incrementar
        </button>
    )
})

