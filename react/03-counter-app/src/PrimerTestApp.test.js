//Configurar el index para que renderice PrimerTestApp y verificar

//Snippet -> imr
import React from 'react';

//Librería de react para testing
//Desabilitado por el cambio a enzyme
// import { render } from "@testing-library/react";

import PrimerTestApp from "./PrimerTestApp";

import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas del componente <PrimerTestApp />>', () => {

    //Una vez instalado y configurado Enzyme ya no funcionan las pruebas a través de la librería de react
    // test('Debe mostrar el mensaje <variable>', () => {
    //     const saludo='Saludos, Juan Manuel';

    //     //Obtener un wrapper a través de testing-libray
    //     // TypeError: expect(...).toBeInTheDocument is not a function, error porque falta configurar src/setupTests.js
    //     // const wrapper = render(<PrimerTestApp saludo = { saludo }/>);
    //     // expect(wrapper.getByText(saludo)).toBeInTheDocument();

    //     //Obtener directamente la función del wrapper a través de destructuración
    //     // TypeError: expect(...).toBeInTheDocument is not a function, error porque falta configurar src/setupTests.js
    //     const { getByText } = render(<PrimerTestApp saludo = { saludo }/>);
    //     expect(getByText(saludo)).toBeInTheDocument();

    //     //Hacer fallar, la información que presenta no es muy completa por lo que es mejor Enzyme
    //     expect(getByText(saludo + 'sss')).toBeInTheDocument();        
    // })

    //Validar un componente
    test('Debe mostrar <PrimerTestApp /> correctamente', () => {
        const saludo='Saludos, Juan Manuel';

        const wrapper = shallow(<PrimerTestApp saludo = { saludo } />);

        expect(wrapper).toMatchSnapshot();
    })
    
    //Validar información en compoonentes html
    test('Debe mostrar el subtítulo enviado en props', () => {
        const saludo='Saludos, Juan Manuel';
        const subtitulo='Tu configuración está lista';

        const wrapper = shallow(<PrimerTestApp saludo = { saludo } subtitulo = { subtitulo }/>);

        //Se puede buscar por tag (p, h1, div), por id (#uno, #tabla1) o clase (.container, .resaltado)
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);
    })
    
})
