import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <ul>
            {
                todos.length > 0 ?
                    todos.map((todo, idx) => 
                        // Agregar el key para quitar el warning
                        <TodoListItem key={todo.id} todo={todo} idx={idx} handleToggle={handleToggle} handleDelete={handleDelete}/>
                    )
                :
                    <h3>No hay tareas</h3>
            }
        </ul>    
    )
}
