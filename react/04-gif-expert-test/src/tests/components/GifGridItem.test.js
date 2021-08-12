import { GifGridItem } from '../../components/GifGridItem';

//Importar para que funcione enzyme
import { shallow } from 'enzyme';

//Importar para poder utilizar JSX
import React from 'react';

describe('Pruebas de GifGridItem', () => {

    const title = 'Título';
    const url = 'http://urlprueba.com';
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

    test('Mostrar correctamente el componente a través de un snapshot sin parámetros', () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
        //Cambiar algo en el componente para probar que no pasa el test. Luego dejar como estaba.
    });

    test('Mostrar correctamente el componente a través de un snapshot con parámetros', () => {
        //Mover fuera de los tests para no repetir cada vez
        // const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
        expect(wrapper).toMatchSnapshot();
        //Utilizar u en caso de querer actualizar el snapshot
        //Cambiar title o url para probar que no pasa el test. Luego dejar como estaba.
    });

    test('Mostrar correctamente el título', () => {
        //Mover fuera de los tests para no repetir cada vez
        // const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

        //Buscamos <p> porque ahí debe mostrarse el título
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Validar que la imagen tengo la url y el alt', () => {
        //Buscamos <img> porque ahí debe mostrarse la imagen
        const img = wrapper.find('img');

        //Validar por comparación de texto en la propiedad de la etiqueta
        // console.log(img.html('src'));
        // expect(img.html('src').includes(url)).toBe(true);
        // expect(img.html('alt').includes(title)).toBe(true);

        //En lugar de utilizar html() y validar como string se puede utilizar props() y acceder directamente a las propiedades de la etiqueta
        // expect(img.props().src).toBe(url);
        // expect(img.props().alt).toBe(title);

        //También se puede utilizar prop('<atributo>')
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Validar que el div tenga la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        
        //Obtener las clases
        const className = div.prop('className');
        // console.log(className);

        //Validar con prop('<atributo>') y comparar por texto
        // expect(className.includes('animate__fadeIn')).toBe(true);

        // Validar por clase directamente
        expect(div.hasClass('animate__fadeIn')).toBe(true);

    });    
})
