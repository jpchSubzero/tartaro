import GifExpertApp from "../GifExpertApp";
import { shallow } from 'enzyme';

describe('Pruebas con el componente GifExpertApp', () => {
    test('Debe ser igual que el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
    // Una vez implementada la categoría por defecto podemos validarla
    test('Debe mostrar una lista de categorías', () => {
        const categories = ['saint seiya', 'one punch', 'dragon ball z'];

        const wrapper = shallow(<GifExpertApp defaultCategories = { categories }/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
   
})
