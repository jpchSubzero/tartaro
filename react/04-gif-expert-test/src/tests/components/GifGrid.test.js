//Importar para que funcione enzyme
import { shallow } from 'enzyme';

//Importar para poder utilizar JSX
import React from 'react';

import { GifGrid } from '../../components/GifGrid';

//Importamos el hook para poder implementar el mock
import { useFetchImages } from '../../hooks/useFetchImages';
jest.mock('../../hooks/useFetchImages');

describe('Pruebas con el archivo GifGrid', () => {

    // Como category se puso requerido le pasamos de una vez para que no de el error
    const category = 'saint seiya';

    test('Debe ser igual al snapshot en el arranque del componente', () => {
        // Como va a ser con el estado inicial, dejamos el loading en cargando y la data en vacío
        useFetchImages.mockReturnValue({
            data: [],
            loading: true            
        });

        // Al implementar el mock esta prueba va a fallar ya que piensa que hay data desde el hook pero aún no se ha mockeado
        // Para superar hay que agregar antes el mockeo de la data del hook
        const wrapper = shallow(<GifGrid category  = {category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    // Este test es correcto pero depende de la data que enviamos, si cambia la data implica actualizar el snapshot, por lo cual es mejor validar de otra forma
    test('Debe mostrar items cuando se cargan imágenes con useFetchGifs y no mostrar loading. A través del snapshot', () => {
        // Creamos un mock para la data ya que, en este momento, no es de interés probar el hook
        // Como va a ser un estado de información ya cargada, llenamos la data con cualquier valor acorde y el loading en false
        const gifs = [
            {
                id: '1',
                title: 'Gif 1',
                url: 'http://image1'                
            },
            {
                id: '2',
                title: 'Gif 2',
                url: 'http://image2'
            },
            {
                id: '3',
                title: 'Gif 3',
                url: 'http://image3'
            }
        ];

        useFetchImages.mockReturnValue({
            data: gifs,
            loading: false            
        });

        const wrapper = shallow(<GifGrid category  = {category}/>);
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe mostrar items cuando se cargan imágenes con useFetchGifs y no mostrar loading, a través de', () => {
        // Creamos un mock para la data ya que, en este momento, no es de interés probar el hook
        // Como va a ser un estado de información ya cargada, llenamos la data con cualquier valor acorde y el loading en false
        const gifs = [
            {
                id: '1',
                title: 'Gif 1',
                url: 'http://image1'                
            },
            {
                id: '2',
                title: 'Gif 2',
                url: 'http://image2'
            },
            {
                id: '3',
                title: 'Gif 3',
                url: 'http://image3'
            }
        ];

        const loading = false;
        useFetchImages.mockReturnValue({
            data: gifs,
            loading: loading            
        });

        const wrapper = shallow(<GifGrid category  = {category}/>);

        if (!loading) {
            // Validar que no se muestre el Cargando... si loading es false. Esto hacemos buscando el <p> ya que si loading es false no se presenta esa etiqueta
            expect(wrapper.find('p').exists()).toBe(false);

            // Validar que la etiqueta GifGridItem tenga el mismo número de elementos que la data que enviamos
            expect(wrapper.find('GifGridItem').length).toBe(gifs.length);            
        } else {
            // Validar que se muestre el Cargando... si loading es true. Esto hacemos buscando el <p> ya que si loading es true se presenta esa etiqueta
            expect(wrapper.find('p').exists()).toBe(true);

            // Validar que la etiqueta GifGridItem no exista cuando se están cargando los elementos
            expect(wrapper.find('GifGridItem').exists()).toBe(false);            

        }
    });    
    
})
