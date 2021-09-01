import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
import React from 'react';
import { shallow } from 'enzyme';
import { mockTodos } from '../../fixtures/mockTodos';

describe('Pruebas en TodoAdd', () => {
    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd 
        handleAddTodo = { handleAddTodo }
    />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
        
    test('No debe llamar a handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        console.log(formSubmit);

        // Llamar directamente produce error de undefined porque necesita el evento (e)
        // formSubmit();

        // Agregamos la funcion que requiere como parámetro. No es necesario que tenga comportamiento, basta que este definida vacía
        formSubmit({preventDefault(){}});

        // Debe ser 0 porque no debe ejecutarse por la validación de que debe haber una descripción (if (description.trim().length < 3))
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });
        
    test('Debe llamar a handleAddTodo', () => {
        wrapper.find('input').simulate('change', {  
            target: {
                value: 'Nueva tarea',
                name: 'description'
            }
        });
        
        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva tarea',
            done: false            
        };
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){} }, newTodo);

        expect(handleAddTodo).toHaveBeenCalledTimes(1);

        // Esto valida que se haya llamado a la función con un parámetro pero aún no tenemos seguridad porque solo le decimos que es un Object
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        
        // Si le pasamos un objeto vacío podemos ver que nos da un error porque si se está llamando con un objeto del tipo de newTodo
        // expect(handleAddTodo).toHaveBeenCalledWith(newTodo);

        // Si le pasamos el objeto newTodo nos da un error porque el id es basado en la fecha y esta cambia en cada ejecución
        // 1630073802119
        // 1630073816222
        // expect(handleAddTodo).toHaveBeenCalledWith({});

        // Al llamarlo con el objeto newTodo y reemplazar su id por un expect de tipo number podemos comparar todas las propiedades obviando el id y solo validar que sea número
        expect(handleAddTodo).toHaveBeenCalledWith({
            ...newTodo,
            id: expect.any(Number)     
        });

        // Validar que el método reset se haya ejecutado al comparar que el value se haya vuelto vacío. No es necesario llamar a reset ya que lo hace dentro del mismo proceso de submit, solo hay que validar el efecto que causa. Para probar se puede comentar el reset en el componente
        expect(wrapper.find('input').prop('value').trim()).toBe('');
    });
        
});

// Tarea 1
// Debe llamar la función handleAddTodo
