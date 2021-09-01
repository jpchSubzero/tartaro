import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en HomeScreen', () => {

        // Esto va a dar un error: TypeError: Cannot destructure property 'user' of '(0 , _react.useContext)(...)' as it is null, porque invocamos el context y no se ha establecido al momento de hacer el snapshot
        // const wrapper = shallow(<HomeScreen />);

        // Para poder utilizar el componente que depende de un contexto se lo hace igual que en renderizado, es decir, en el componente que contiene este elemento. Ver el componente MainApp. El contexto utiliza un state (user, setUser) por lo que debemos definirlos manualmente, en este caso solo necesitamos user. En HomeScreen tenemos un clg con el cual podemos ver si está llegando el user

        const user = {
            name: 'Nombre del usuario',
            email: 'usuario@usuario.com'        
        };

        // const wrapper = shallow(
        //     <UserContext.Provider value={ user }>
        //         <HomeScreen />
        //     </UserContext.Provider>        
        // );

        const wrapper = mount(
            <UserContext.Provider value={ { user }}>
                <HomeScreen />
            </UserContext.Provider>        
        );

    test('Debe mostrar el componente correctamente', () => {
        // Al revisar el snapshot vemos que nos presenta unicamente <HomeScreen />, esto es porque shallow solo trabaja con el componente de más alto nivel y no con los hijos. Es decir, en este caso, no presenta la parte de <pre className="container">{ JSON.stringify(user, null, 3) }</pre>. Para corregir esto debemos cambiar el shallow por el mount
        // Al revisar el snapshot con mount se ve que presenta toda la información del componente incluido el usuario en <pre>
        // Si cambiamos el name o email nos dará error por snapshot
        expect(wrapper).toMatchSnapshot();
    });
    
});
