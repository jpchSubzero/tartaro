import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../../components/09-useContext/NavBar';

describe('Pruebas en NavBar', () => {
    test('Debe presentar correctamente', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper).toMatchSnapshot();
    });
});
