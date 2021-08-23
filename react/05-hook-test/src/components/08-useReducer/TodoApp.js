import React, { useEffect, useReducer } from 'react';
import {todoReducer} from './todoReducer';
import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const deleteAction = {
            type: 'delete',
            payload: todoId
        };

        dispatch(deleteAction);        
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });        
    };

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });        
    };

    return (
        <>
            <h1>To-Do App (<small>{todos.length})</small></h1>  
            <hr />
                <div className="row">
                    <div className="col-7">
                        <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
                    </div>
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>


        </>
    )
}

