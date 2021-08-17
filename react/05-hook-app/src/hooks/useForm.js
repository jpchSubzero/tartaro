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


    return [ values, handleInputChange];
}
