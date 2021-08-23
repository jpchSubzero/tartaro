// Este hook sirve para manejar los valores de elementos de formularios
import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    // Se puede devolver directamente el state y la función para manejar el evento pero eso hace que el return se vuelva un poco confuso por lo cual resulta más claro declarar la función
    // return [ 
    //     values, 
    //     ({ target }) => {
    //         setValues({ 
    //             ...values,
    //             [target.name]: target.value
    //         });        
    //     }
    // ];

    // Declara la función para que el return sea un poco más fácil de comprender
    const handleInputChange = ({ target }) => {
        setValues({ 
            ...values,
            [target.name]: target.value
        });        
    };

    // Agregar la funcionalidad de reset (limpiar campo) cuando se trabaje con los reducers en el ejercicio de TODO. En este caso no sirve el initialState.
    // Hay que hacerlo accesible retornándolo junto con values, handleInputChange
    const handleReset = () => {
        setValues(initialState);        
    };


    return [values, handleInputChange, handleReset];
}
