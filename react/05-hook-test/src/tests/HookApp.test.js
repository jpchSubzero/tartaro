import { HookApp } from "../HookApp";
import { shallow } from 'enzyme';

describe('Pruebas del archivo HookApp', () => {
    test('Debe ser igual al snapshot', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
