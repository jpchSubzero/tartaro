import React, { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('efecto por cualquier cambio');
    }, []);

    useEffect(() => {
        console.log('efecto de formState');
    }, [formState]);

    useEffect(() => {
        console.log('efecto de email');
    }, [email]);
    
    const handleInputChange = ({ target }) => {
        setFormState({ 
            ...formState,
            [target.name]: target.value
        });
    };

    return (
        <>
            <h1>UseEffect</h1>  
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
            
            { (name === '123' ) && <Message />}
        </>
    )
}
