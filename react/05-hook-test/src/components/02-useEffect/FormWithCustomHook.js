import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('efecto de email');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
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
        </form>
    )
}
