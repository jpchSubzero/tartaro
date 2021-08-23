import React, { useEffect, useReducer } from 'react';
import {todoReducer} from './todoReducer';

// Importar el custom hook useForm para manejar el formulario
// Mover a TodoAdd
// import { useForm } from '../../hooks/useForm';

import './styles.css';

// Solución Tarea 3
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {

    // Luego de definir el useReducer, definir el initialState. El reducer se lo crea en un archivo aparte aunque no es necesario hacerlo así.
    // Luego de la validación del campo pasamos esta parte de inicialización a la función init para hacer lo mismo pero de otra forma
    // const initialState = [{
    //     id: new Date().getTime(),
    //     desc: 'Comprar pan',
    //     done: false
    // }];

    // Definición de useReducer
    // const [state, dispatch] = useReducer(reducer, initialState, init);

    // useState sin dispatch ni init. Cambiamos reducer por el que definimos aparte, en este caso todoReducer
    // const [state] = useReducer(todoReducer, initialState);

    // Cambiamos el nombre de state por lo que representa para que sea más fácil de entender. Como es posicional el nombre no es importante
    // const [todos] = useReducer(todoReducer, initialState);

    // Agregar dispatch cuando se vaya a hacer la acción de agregar
    // const [todos, dispatch] = useReducer(todoReducer, initialState);
    
    // Agregamos la función de init para mejorar el rendimiento. Cambiamos el initialState por [] ya que estamos trabajando con un arreglo de tareas
    const init = () => {
        // return [{
        //     id: new Date().getTime(),
        //     desc: 'Comprar pan',
        //     done: false
        // }];        

        // Una vez realizada la persistencia en el localStorage ya no necesitamos tener quemado un valor inicial sino obtener lo que haya almacenado
        // Esto funciona pero tiene el problema de la primera vez, es decir, cuando no hay nada va a devolver null por lo que se debe controlar haciendo que devuelva []
        // return JSON.parse(localStorage.getItem('todos'));

        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    console.log(todos);

    // Crear la función para manejar el agregado de tareas
    // Mover a TodoAdd y quitar addAction y dispatch
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Agregar validación para campo vacío luego de hacer funcional el agregado. Le ponemos un mínimo de 3 porque es dificil que hayan tareas de 2 letras. Luego agregamos la validación respectiva en el campo para que notifique al usuario porque no se está agregando
    //     if (description.trim().length < 3) {
    //         return;
    //     }

    //     console.log('Nueva tarea');

    //     // Crear el objeto de la nueva tarea
    //     const newTodo = {
    //         id: new Date().getTime(),
    //         // desc: 'Nueva tarea',

    //         // Asignamos el valor que debe agregar a partir del "bindeo" con el input
    //         // Con esta asignación ya funciona el agregar tarea pero el input no se limpia. Para corregir esto hay que agregar la funcionalidad en el custom hook useForm y así tener centralizadas las funcionalidades
    //         desc: description,
    //         done: false            
    //     };

    //     // Crear la acción de agregar y el valor (payload)
    //     const addAction = {
    //         type: 'add',
    //         payload: newTodo
    //     };

    //     // dispatch realiza la acción del reducer que establecemos en el addAction con el valor del payload
    //     dispatch(addAction);

    //     // Llamamos al reset del custom hook useForm para limpiar el campo una vez hecho el dispatch
    //     // Luego hay que hacer la validación de campo vacío en esta función
    //     handleReset();
    // };

    // const [formValues, handleInputChange] = useForm({
    //     // Recordar que se debe utilizar el nombre (name) del elemento
    //     description: ''
    // });

    // console.log(formValues);

    // const [{ description }, handleInputChange] = useForm({

    // Agregamos el handle para el reset del campo
    // Movemos al componente TodoAdd
    // const [{ description }, handleInputChange, handleReset] = useForm({
    //     // Recordar que se debe utilizar el nombre (name) del elemento
    //     description: ''
    // });

    // console.log(description);

    // Para persistir la información (guardar en el localStorage) podemos observar que el objeto todos (lista de tareas) tenga cambios y para eso podemos utilizar el useEffect
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        console.log(todoId);

        // Crear la acción de eliminar y asignar el payload (valor9), en este caso el id directamente
        const deleteAction = {
            type: 'delete',
            payload: todoId
        };

        // dispatch realiza la acción del reducer que establecemos en el deleteAction con el valor del payload
        // Al refrescar el navegador o revisar el localStorage se puede ver que también se ha eliminado dado que el useEffect esta observando si cambia "todos" y automáticamente actualiza el localStorage
        dispatch(deleteAction);        
    }

    // Para manejar el estado de la tarea.
    // Crear acción en el hook
    const handleToggle = (todoId) => {

        // Forma resumida de llamar al dispatch
        dispatch({
            type: 'toggle',
            payload: todoId
        });        
    };

    // Agregar manejador de agregar todo
    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });        
    };

    return (
        <>
            {/* <h1>To-Do App</h1>   */}

            {/* Agregar la cantidad de tareas */}
            <h1>To-Do App (<small>{todos.length})</small></h1>  
            <hr />

                {/* <li>Comprar pan</li>
                <li>Comprar queso</li>
                <li>Comprar leche</li>
            <li>Comprar jugo</li> */}

                {/* Utilizar bootstrap para dividir en dos columnas la lista y el formulario de agregar */}
                <div className="row">
                    <div className="col-7">

                        {/* Solución Tarea 3, quitar todo el ul y reemplazar por el TodoList */}
                        {/* <ul> */}
                            {
                                // Solución Tarea 1: Agregar condición ternaria para mostrar un mensaje de no hay datos
                                // todos.length > 0 ?
                                //     todos.map((todo, idx) => 
                                        // <li
                                        //     key={todo.id}
                                        //     className="list-group-item"
                                        // >
                                        //     {/* Después de probar el toggle a través de la consola agregar la condición para manejar la clase */}
                                        //     {/* <p  className={todo.done ? 'complete' : ''} onClick={() => handleToggle(todo.id)}>{idx + 1}. { todo.desc }</p> */}

                                        //     {/* Forma corta de manejar la clase */}
                                        //     <p  className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>{idx + 1}. { todo.desc }</p>
                                        //     {/* <button className="btn btn-primary">Borrar</button> */}

                                        //     {/* Agregar el evento onClick para poder eliminar */}
                                        //     <button className="btn btn-danger" onClick={ () => handleDelete(todo.id)}>Borrar</button>
                                        // </li>

                                        // <TodoListItem todo={todo} idx={idx} handleToggle={handleToggle} handleDelete={handleDelete}/>
                                    // )
                                // :
                                //     <h3>No hay tareas</h3>
                            }
                            {/* </ul>  */}
                            
                            <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
                    </div>

                    {/* <div className="col-5">
                        <h4>Agregar tareas</h4>
                        <hr /> */}

                        {/* Solución Tarea 3, quitar todo el form y reemplazar por el TodoAdd */}
                        {/* <form className="form-group" onSubmit={ handleSubmit }>
                            <input 
                                type="text" 
                                name="description" 
                                placeholder="Ingrese la tarea" 
                                autoComplete="off" 
                                className="form-control" 

                                // Agregamos el manejador del elemento a través del custom hook useForm
                                onChange={ handleInputChange } 

                                // Agregarmos el valor que le corresponde (binding) al elemento. Podría haber sido formValues.description pero por la destructuración queda más sencillo de entender
                                value={ description } 

                                // Agregar para que el usuario sepa que deben ser por lo menos X caracteres
                                minLength="3"
                            />
                            <button type="submit" className="btn btn-outline-primary mt-2 w-100">Agregar</button>
                        </form> */}

                    {/* </div> */}
                    
                    <TodoAdd handleAddTodo={handleAddTodo} />
    
                </div>


        </>
    )
}

// Tarea 1
// Luego de completar el localStorage, agregar un mensaje cuando no haya nada

// Tarea 2
// Implementar el borrado en base a la lógica que se acaba de agregar al reducer para eliminar y este código en el componente:
// const handleDelete = (todoId) => {
//     console.log(todoId);
// }
// Crear la acción
// Crear el dispatch
// Utilizar onClick

// Tarea 3
// Crear un componente TodoList para manejar la lista de tareas (el <ul>). Va a necesitar: todos, handleToggle, handleDelete.
// Crear un componente TodoListItem para manejar cada elemento de la lista de tareas (el <li>). Va a necesitar: todo, idx, handleToggle, handleDelete.

