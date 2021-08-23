import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
    const [{ description }, handleInputChange, handleReset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length < 3) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false            
        };

        handleAddTodo(newTodo);
        handleReset();
    };    

    return (
        <>
            <div className="col-5">
                <h4>Agregar tareas</h4>
                <hr />

                <form className="form-group" onSubmit={ handleSubmit }>
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Ingrese la tarea" 
                        autoComplete="off" 
                        className="form-control" 
                        onChange={ handleInputChange } 
                        value={ description } 
                        minLength="3"
                    />
                    <button type="submit" className="btn btn-outline-primary mt-2 w-100">Agregar</button>
                </form>
            </div>
        </>
    )
}
