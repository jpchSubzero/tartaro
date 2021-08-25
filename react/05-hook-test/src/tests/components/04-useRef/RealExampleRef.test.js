import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Prueba de RealExampleRef', () => {
    const wrapper = shallow(<RealExampleRef />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    
    test('Debe mostrar el componenete MultipleCustomHooks', () => {
        wrapper.find('button').simulate('click');        
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

        wrapper.find('button').simulate('click');        
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
});

// Tarea 1
// Debe mostrarse correctamente
// Debe mostrar el componenete MultipleCustomHooks