// import React, { useState } from 'react';

// Quitar referencia a useState y agregar a useForm
import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effect.css';

// Copiar del SimpleForm y agregar el campo password
// Crear un custom hook para manejar el formulario. Esto es importante porque no es competencia del componente manejar la información sino solo presentarla
export const FormWithCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    // });

    // const { name, email, password } = formState;

    // const handleInputChange = ({ target }) => {
    //     handleInputChange({ 
    //         ...formValues,
    //         [target.name]: target.value
    //     });
    // };

    // Reemplazamos la lógica basada en state del componente por el custom hook useForm. Los nombres pueden cambiar pero deben mantener la posición respecto al hook.
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    // Agregar el useEffect para probar que se puede trabajar con el custom hook
    useEffect(() => {
        console.log('efecto de email');
    }, [email]);

    // Declarar la función que va a manejar el form
    const handleSubmit = (e) => {

        // Agregar para evitar que se refresque
        e.preventDefault();
        console.log(formValues);
    };

    return (
        // <>

        // Convertir el Fragment en form para probar el submit
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>  
            <hr />

            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    name="name"
                    placeholder="Ingrese un nombre"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                ></input>
            </div>

            <div className="form-group">
                <input 
                    type="email" 
                    className="form-control"
                    name="email"
                    placeholder="Ingrese un email"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }
                ></input>
            </div>

            <div className="form-group">
                <input 
                    type="password" 
                    className="form-control"
                    name="password"
                    placeholder="Ingrese un password"
                    autoComplete="off"
                    value={password}
                    onChange={ handleInputChange }
                ></input>
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
        {/* Convertir el Fragment en form para probar el submit */}
        {/* </> */}
        </form>
    )
}
