//Importar para que funcione enzyme
import { shallow } from 'enzyme';

//Importar para poder utilizar JSX
import React from 'react';

import { AddCategory } from '../../components/AddCategory';

describe('Pruebas de AddCategory', () => {
    //Creamos un función vacía para poder quitar el error de que el componenete requiere una función como parámetro
    // const setCategories = () => {};

    // Cambiamos la función vacía por su equivalente con jest para poder analizarla
    const setCategories = jest.fn();

    //Mover el wrapper ya que se repite
    // const wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks();

        // Reiniciamos el wrapper, cambiamos const por let y dejamos sin inicializar en la definición. Hay que validar si el intellisence sigue funcionando con el wrapper, si no es así inicializarla para no perder esa ayuda
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });

    test('Debe mostrarse correctamente', () => {
        // const wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
        expect(wrapper).toMatchSnapshot();
    });    

    test('Validar que cambie la caja de texto', () => {
        // Agregamos un clg para ver que se ejecute el método del componente
        const input = wrapper.find('input');

        //Es igual que en react pero sin el on, onClick, click, onChange, change

        //Nos dará um error de undefined porque el método utiliza el evento y no se está enviando
        // input.simulate('change');

        //Agregamos un evento para superar el error
        const value = 'Hola mundo';

        // Definimos el objeto tipo evento y como en la función referenciamos el target y el value debemos reconstruir la misma estructura
        // Función del componente: setInputValue(e.target.value);
        // Objeto "evento"
        // { 
        //     target: {
        //         //No se especifica value: value ya que tienen el mismo nombre y js sabe que es una asignación
        //         value
        //     }
        // }

        const evento = { 
            target: {
                value
            }
        };
        input.simulate('change', evento);

        // Agregamos el <p> en el componente para validar si se cambia el inputValue
        // Se puede agregar texto, value + "algo", para hacer fallar la prueba
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('No debe hacer nada con onSubmit', () => {
        // Cambiamos la función vacía por su equivalente con jest para poder analizarla

        // Agregamos un clg para ver que se ejecute el método del componente

        // Creamos una función vacía porque submit requiere preventDefault
        // const preventDefault = () => {};
        // const evento = { 
        //     preventDefault
        // };

        // Forma corta de definir la función vacía
        const evento = { 
            preventDefault(){}
        };

        wrapper.find('form').simulate('submit', evento);

        // No debe hacer nada ya que la función onSubmit valida cuando el inputValue no tiene nada (length > 2) 
        // Si no presenta ya ayuda importar @testing-library/jest-dom
        // Este expect nos devolverá un error de que se ejecutó una vez setCategories(), esto es porque en la prueba anterior se llama a input.simulate('change', evento) y este cambia el valor de inputValue, por lo tanto su longitud ya no es 0. Para ver mejor agregar inputValue al clg de handleSubmit() del componente. Para solucionar el problema se debe reinicializar la prueba con beforeEach()
        expect(setCategories).not.toHaveBeenCalled();
    });

    // Tarea 1
    test('Debe llamar setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo';

        // Simular inputChanges
        wrapper.find('input').simulate('change', { target: { value: value} });

        // Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // Debe haberse llamado setCategories. Se puede agregar el número de veces que se debía haber ejecutado con el evaludador toHaveBeenCalledTimes(<cantidad>)
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);

        // El value del input debe ser vacío
        expect(wrapper.find('input').text().trim()).toBe('');

        // Las validaciones de la tarea funcionan pero no validan si se está usando una función como parámetro en setCategories, para probar hay que cambiar la función setCategories(categs => [inputValue, ...categs]);  del componente por setCategories(234124);  es decir, por una función que recibe números, esto causa que la prueba sea correcta pero en contexto estaría mal. Para probar mejor se puede indicar que el parámetro de la función debe ser una función con expect.any(Function) y el evaluador toHaveBeenCalledWith()
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    })
    
})

// Tarea 1
// Simular inputChanges
// Simular el submit
// Debe haberse llamado setCategories
// El value del input debe ser vacío