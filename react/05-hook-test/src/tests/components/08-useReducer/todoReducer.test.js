import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { mockTodos } from '../../fixtures/mockTodos';

// Una vez hecho el primer test, mover a un archivo aparte para no tener que copiar y pegar en las demás pruebas
// const mockTodos = [
//     {
//     id: 1,
//     desc: 'Descripción 1',
//     done: false
//     },
//     {
//     id: 2,
//     desc: 'Descripción 2',
//     done: false
//     },
//     {
//     id: 3,
//     desc: 'Descripción 3',
//     done: true
//     },
//     {
//     id: 4,
//     desc: 'Descripción 4',
//     done: false
//     }
// ];

describe('Pruebas en todoReducer', () => {
    test('Debe retornar el estado por defecto (mockTodos)', () => {
        const state = todoReducer(mockTodos, {});
        expect(state).toEqual(mockTodos);
    });

    test('Debe agregar un TODO', () => {
        const addAction = {
            type: 'add',
            payload: {
                id: 5,
                desc: 'Descripción 5',
                done: true
            }
        };

        const state = todoReducer(mockTodos, addAction);
        expect(state.length).toBe(mockTodos.length + 1);
        expect(state).toEqual([...mockTodos, addAction.payload]);
    });
    
    test('Debe borrar un TODO', () => {
        const deleteAction = {
            type: 'delete',
            payload: 3
        };
        const state = todoReducer(mockTodos, deleteAction);
        expect(state.length).toBe(mockTodos.length - 1);

        // Probar que al buscar el elemento eliminado devuelva un arreglo vacío
        expect(state.filter(todo => todo.id === deleteAction.payload)).toEqual([]);
    });
    
    test('Debe hacer el toggle del TODO', () => {
        const toggleAction = {
            type: 'toggle',
            payload: 2
        };
        const state = todoReducer(mockTodos, toggleAction);

        // Probar que al buscar el elemento en state su estado sea igual a la negación del mismo elemento en mockTodos
        expect(state.filter(todo => todo.id === toggleAction.payload)[0].done).toEqual(!mockTodos.filter(todo => todo.id === toggleAction.payload)[0].done);

        // Probar que todos los demás elementos no han cambiado
        expect(state.filter(todo => todo.id !== toggleAction.payload)[0].done).toEqual(mockTodos.filter(todo => todo.id !== toggleAction.payload)[0].done);
    });
    
});

// Tarea 1
// Debe agregar un todo

// Tarea 2
// Debe borrar un TODO
// Debe hacer el toggle del TODO
