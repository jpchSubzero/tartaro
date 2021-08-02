//Configurar el index para que renderice CounterApp y verificar

import React from 'react';
import CounterApp from "./CounterApp";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

//Definir para no repetir en cada test
// const wrapper = shallow(<CounterApp />);

//Cambiar a let para poder reinicializar
let wrapper = shallow(<CounterApp />);

describe('Pruebas del archivo CounterApp', () => {
    //Reinicializar variables antes de cada test
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    //Validar el componente
    test('Debe presentar correctamente CounterApp', () => {
        // const wrapper = shallow(<CounterApp />);

        expect(wrapper).toMatchSnapshot();
    });

    //Validar información en compoonentes html
    test('Debe mostrar el value enviado en props', () => {
        const value = 100;

        const wrapper = shallow(<CounterApp value = { value }/>);

        const textovalue = parseInt(wrapper.find('h2').text().trim());
        console.log(textovalue);

        expect(textovalue).toBe(value);
    });

    //Eventos click
    test('Debe incrementar el contador con el botón +1', () => {
        // const wrapper = shallow(<CounterApp />);

        //Buscar botones y de ellos el primero que es el +1
        // const botonAdd = wrapper.find('button').at(0);
        // console.log(botonAdd.html());

        wrapper.find('button').at(0).simulate('click');
        const counterTexto = wrapper.find('h2').text().trim();
        //Como no se pasa parámetro el value por defecto es 0 y al hacer click se hace 1
        expect(counterTexto).toBe('1');
    })

    //Tarea, hacer con botón -1
    test('Debe decrementar el contador con el botón -1', () => {
        wrapper.find('button').at(1).simulate('click');
        const counterTexto = wrapper.find('h2').text().trim();

        //Solución 1
        //Como no se pasa parámetro el value por defecto es 0 y al hacer click se hace -1 pero como se ejecuta el click en la prueba anterior se inicia en 1
        // expect(counterTexto).toBe('0');

        //Solución 2
        //Utilizar beforeEach() que ejecuta algo antes de cada test
        expect(counterTexto).toBe('-1');

    })
    
    //Tarea, hacer con botón reset
    test('Debe resetear el contador al value', () => {
        //Agregar acciones previas para saber si vuelve después de cambios, sino no se puede saber y funciona o no
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        console.log(wrapper.find('h2').text().trim());

        wrapper.find('button').at(2).simulate('click');
        const counterTexto = wrapper.find('h2').text().trim();

        expect(counterTexto).toBe('0');

    })    
})
