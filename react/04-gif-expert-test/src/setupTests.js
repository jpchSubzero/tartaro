//Para utilizar el que viene por defecto con React
// import '@testing-library/jest-dom/extend-expect';

//Configuración de Enzyme
import Enzyme from 'enzyme';
//Para utilizar enzyme con React v.16
// import Adapter from 'enzyme-adapter-react-16';
//Para utilizar enzyme con React v.17
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

//Configuración de EnzymeToJSON
import {createSerializer} from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));