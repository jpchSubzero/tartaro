import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en LoginScreen', () => {
    const user = {
        id: 1234,
        name: 'Nombre del usuario',
        email: 'usuario@usuario.com'
    };
    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={ { setUser } }>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith(user);
    });
});

// Tarea 1
// Debe mostrarse correctamente
// Debe ejecutar el setUser con el argumento esperado. En este caso:
//     id: 1234,
//     name: 'Nombre del usuario',
//     email: 'usuario@usuario.com'
// porque esta en LoginScreen