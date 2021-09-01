import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { mockTodos } from '../../fixtures/mockTodos';
import { act } from "@testing-library/react";

describe('Pruebas en TodoApp', () => {
    const wrapper = shallow(<TodoApp />);

    // Para poder evaluar si se llamó al local storage definimos una función jest para utilizar setItem
    Storage.prototype.setItem = jest.fn(() => {});

    test('Debe mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot() ;
    });

    test('Debe agregar un todo', () => {
        // shallow() permite testear un componente sin siquiera pasar por el DOM rendering que hace React. La ventaja de este método es que, al no requerir un entorno de navegador para funcionar, es muy rápido.
        // mount() sí realiza un render en el DOM del componente, lo cual nos permite testear interacciones del usuario (eventos).
        // render() lo que hace es devolver la estructura HTML estática resultante del render del componente, y nos permite navegarla a través de un wrapper de la popular librería cheerio.
        // https://medium.com/@p4bloch/testeando-componentes-de-react-con-enzyme-5aa0468a0cab
        const wrapper = mount(<TodoApp />);

        // Esto nos va a presentar el error: Warning: An update to TodoApp inside a test was not wrapped in act(...). Para solventarlo tenemos que importar act pero desde @testing-library/react ya que estamos probando un componente y no un hook
        // No olvidar que buscamos el componente que utilice la función, en este caso TodoAdd
        // wrapper.find('TodoAdd').prop('handleAddTodo')(mockTodos[0]);
        
        // Una vez agregado act podemos llamar directamente a la función
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(mockTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(mockTodos[1]);
        });

        // Validar que en el título del componente se vea el mismo número de elementos agregados
        expect(wrapper.find('h1').text().trim()).toBe('To-Do App (2)');

        // Evaluamos si setItem de local storage fue llamada el mismo número de veces que todos agregados
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe borrarse un todo', () => {
        // Agregar un todo para luego eliminarlo. No olvidar que buscamos el componente que utilice la función, en este caso TodoAdd
        wrapper.find('TodoAdd').prop('handleAddTodo')(mockTodos[0]);
        expect(wrapper.find('h1').text().trim()).toBe('To-Do App (1)');

        // No olvidar que buscamos el componente que utilice la función, en este caso TodoList
        wrapper.find('TodoList').prop('handleDelete')(mockTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('To-Do App (0)');
    });
});
