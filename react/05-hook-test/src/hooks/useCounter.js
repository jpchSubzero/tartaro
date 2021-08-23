// snippet -> rafc y quitar lo que no sirve
import { useState } from 'react';

// Creamos un hook que tiene un valor por defecto
export const useCounter = ( initialState = 10 ) => {
    const [state, setState] = useState(initialState);

    // const increment = () => {

    // Agregar un factor de suma
    const increment = (factor = 1) => {
        // setState(state + 1);

        // Cambiar el 1 por el factor
        setState(state + factor);
    };

    // const decrement = (factor = 1) => {

    // Agregar un factor de resta
    const decrement = (factor = 1) => {
        // setState(state - 1);

        // Cambiar el 1 por el factor
        setState(state - factor);
    };

    // Resolución de tarea. Agregar función de reset
    const reset = () => {
        setState(initialState);
    };
    
    // Hacemos accesibles las propiedades y funciones del hook
    return {
        state,
        increment,
        decrement,

        // Resolución de tarea. Devolver función de reset
        reset
    };
}
