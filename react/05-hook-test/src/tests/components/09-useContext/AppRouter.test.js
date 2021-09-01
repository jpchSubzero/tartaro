import React from 'react';
import { mount } from 'enzyme';

import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas con AppRouter', () => {
    // const wrapper = mount(<AppRouter />);

    // Agregar el user que necesitan los componentes
    const user = {
        id: 1234,
        name: 'Nombre del usuario',
        email: 'usuario@usuario.com'
    };

    // Agregar el provider para acceder al contexto
    const wrapper = mount(
        <UserContext.Provider value={ { user } }>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        // Al probar directamente con mount y snapshot nos da un error porque varios componentes usan user desde el contexto (HomeScreen, AboutScreen y LoginScreen)
        expect(wrapper).toMatchSnapshot();
    });
    
    // Otra puede que se podría realizar es validar rutas con parámetros pero aún no se está en condiciones
    // No es necesario validar ni switch ni route porque son componentes de react y tuvieron sus pruebas respectivas
});
