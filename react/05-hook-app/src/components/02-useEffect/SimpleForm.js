import React, { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // Crear todos los useEffect manualmente para luego proceder a usar el snippet
    // Presenta en consola al renderizar el componente ya que el useEfect es equivalente a componentDidMount, componentDidUpdate y componentWillUnmount
    // El problema es que funciona como el componentDidUpdate y por cada cambio en el DOM se ejecuta.
    // useEffect(() => {
    //     console.log('efecto');
    // });

    // Para restringir la ejecución se necesita las dependencias como parámetro. Al enviar vacío se ejecuta solo al inicio.
    // React ejecuta los hooks en el orden en que se implementan ya que, al no tener un identificador, no sabe cual es cual. Ej. Poner en un condicional true un state
    // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
    // if (true) {
    //     const [state, setState] = useState();
    // }

    useEffect(() => {
        console.log('efecto por cualquier cambio');
    }, []);

    // React recomienda crear un hook por cada dependencia que querramos vigilar. En este caso validar cuando hayan cambios en el state
    useEffect(() => {
        console.log('efecto de formState');
    }, [formState]);

    useEffect(() => {
        console.log('efecto de email');
    }, [email]);
    
    // const handleInputChange = (e) => {

    // Destructuramos el evento para obtener directamente el target
    const handleInputChange = ({ target }) => {
        // console.log(e.target);

        // console.log(e.target.name);
        // console.log(e.target.value);

        // Destructuramos el state y utilizando el name del evento asignamos dinámicamente el valor a la propiedad.
        // Al probar funciona pero el useEffect se dispara por cada tecla ya que react detecta un cambio en el DOM y llama al hook
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
            
            {/* Agregar el componente Message para explicar la función de retorno del useEffect, para lo cual lo ubicamos en un condicional */}
            { (name === '123' ) && <Message />}
        </>
    )
}
