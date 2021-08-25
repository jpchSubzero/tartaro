import React from 'react';
import { shallow } from 'enzyme';


import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { mockTodos } from '../../fixtures/mockTodos';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';

describe('Pruebas en TodoListItem', () => {
    // Crear los atributos que necesita el componente
    const idx = 0;
    const todo = mockTodos[idx];
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(<TodoListItem key={idx} todo={todo} idx={idx} handleToggle={handleToggle} handleDelete={handleDelete} />);

    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe llamar la función handleDelete', () => {
        // Simulamos el click
        wrapper.find('button').simulate('click');
                
        // Validar que se ejecutó la función asociada al click, en este caso handleDelete. Esta utiliza el id del todo. Esto solo valida que se llamó. No es necesario validar el resultado ya que eso lo hace todoReducer y ya fue validado
        expect(handleDelete).toHaveBeenCalledWith(mockTodos[idx].id);
    });
    
    test('Debe llamar la función handleToggle', () => {
        wrapper.find('p').simulate('click');
                
        // Validar que se ejecutó la función asociada al click, en este caso handleToggle. Esta utiliza el id del todo. Esto solo valida que se llamó
        expect(handleToggle).toHaveBeenCalledWith(mockTodos[idx].id);
    });
    
    test('Debe mostrar el texto correctamente en el <p>', () => {
        expect(wrapper.find('p').text().trim()).toBe(`${idx + 1}. ${ todo.desc }`);
    });

    test('Debe tener la clase complete si el todo está hecho', () => {
        const todo = {...mockTodos[idx], done:true};
        const wrapper = shallow(<TodoListItem key={idx} todo={todo} idx={idx} handleToggle={handleToggle} handleDelete={handleDelete} />);

        console.log(wrapper.html());
        expect(wrapper.find('p').hasClass('complete')).toBe(true);

        const todo1 = {...mockTodos[idx], done:false};
        const wrapper1 = shallow(<TodoListItem key={idx} todo={todo1} idx={idx} handleToggle={handleToggle} handleDelete={handleDelete} />);

        console.log(wrapper1.html());
        expect(wrapper1.find('p').hasClass('complete')).toBe(false);
    });
    
});

// Tarea 1
// Debe mostrarse correctamente
// Debe llamar la función handleDelete
// Debe llamar la función handleToggle
// Debe mostrar el texto correctamente en el <p>

