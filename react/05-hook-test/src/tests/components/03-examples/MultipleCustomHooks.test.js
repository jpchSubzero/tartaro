import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

// Permite realizar implementaciones falsas
jest.mock('../../../hooks/useFetch');

// Importar después de probar con useFetch
jest.mock('../../../hooks/useCounter');

describe('Pruebas con MultipleCustomHooks', () => {
    // Sin beforeEach presenta el error: TypeError: Cannot destructure property 'state' of '(0 , _useCounter.useCounter)(...)' as it is undefined.
    // En cada test creamos el snapshot, el beforeEach se ejecuta antes que se realice cada uno de ellos. Si utilizamos useCounter.mockReturnValue en cada prueba ya no muestra ese error
    beforeEach( () => {
        useCounter.mockReturnValue({
            state: 10,
            increment: () => {},

            // Podemos omitirlas porque no las estamos utilizando al inicio
            // decrement: () => {},
            // reset: () => {},
        });
    });

    test('Debe mostrarse correctamente', () => {
        // Luego de agregar jest.mock en la segunda prueba, agregar el mockeo del hook useFetch con la información que esperamos recibir, en este caso data, loading y error. En este caso no importa la data ya que para eso se probó el hook useFetch en otra prueba
        useFetch.mockReturnValue({
            loading: true,
            error: null,
            data: null              
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar información', () => {
        // Al agregar el jest.mock se produce un error: 
        // TypeError: Cannot destructure property 'loading' of '(0 , _useFetch.useFetch)(...)' as it is undefined. 
        // En el componente en la parte de:
        // const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
        // Esto es porque al mockear el hook useFetch ya no utiliza la implementación del componente y debemos proveerle una nueva. jest.mock afecta a todo el archivo de pruebas y hay que corregir en la anterior
        useFetch.mockReturnValue({
            loading: false,
            error: null,
            data: [{
                quote_id: 1,
                quote: "Frase",
                author: "Author",
                series: "Serie"
            }]
        });
        
        const wrapper = shallow(<MultipleCustomHooks />);
        console.log(wrapper.html());

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert').exists()).toBe(false);

        // Agregar al p de quote la clase className="mb-0" para poder rastrear su contenido en la prueba
        expect(wrapper.find('.mb-0').text().trim()).toBe('Frase');
        expect(wrapper.find('figcaption').text().trim()).toBe('Author');
    });

    // Agregar <h3>{ counter }</h3> después del <hr /> para probar el useCounter
    test('Debe mostrar correctamente el counter', () => {
        useFetch.mockReturnValue({
            loading: false,
            error: null,
            data: [{
                quote_id: 1,
                quote: "Frase",
                author: "Author",
                series: "Serie"
            }]
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('h3').text().trim()).toBe('10');
    });
    
})
