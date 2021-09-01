import { TodoList } from "../../../components/08-useReducer/TodoList";
import React from 'react';
import { shallow } from 'enzyme';
import { mockTodos } from '../../fixtures/mockTodos';

const handleToggle = jest.fn();
const handleDelete = jest.fn();

const wrapper = shallow(<TodoList 
    todos = { mockTodos }
    handleToggle = { handleToggle }
    handleDelete = { handleDelete }
/>);

describe('Pruebas en TodoList', () => {
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener el mismo número de elementos que el mock', () => {
        console.log(wrapper.find('TodoListItem').length);
        expect(wrapper.find('TodoListItem').length).toBe(mockTodos.length);
        
        // En este print se pueden ver las propiedades y métodos que genera jest.fn()
        console.log(wrapper.find('TodoListItem').at(0).props());

        // Evaluar si contiene las propiedades que le enviamos: todo, handleToggle y handleDelete
        expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(wrapper.find('TodoListItem').at(0).prop('todo')).toEqual(mockTodos[0]);
    });
});
