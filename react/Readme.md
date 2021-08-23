Introducción de curso
Explicación

Introducción (30min)
¿Qué aprenderemos en esta sección?
¿Qué es React?
Conceptos generales


Componentes de orden superior
Un componente de orden superior (HOC por las siglas en inglés de higher-order component) es una técnica avanzada en React para el reuso de la lógica de componentes. Los HOCs no son parte de la API de React. Son un patrón que surge de la naturaleza composicional de React.
https://es.reactjs.org/docs/higher-order-components.html

Babel
JSX

JS (2h 30min)
¿Qué aprenderemos en esta sección?
Generar la base sobre JavaScript
Constantes y variables Let
Template String
Objetos literales
Arreglos
Desestructruación * (sumamente importante)
Promesas
Fetch API
Ternarios
Async - Await

React (03-counter-app) (2h)
¿Qué veremos en esta sección?
Nuestra primera aplicación - Hola Mundo
Exposiciones sobre los componentes
Creación de componentes (Functional Components)
Propiedades - Props
Impresiones en el HTML
PropTypes
DefaultProps
Introducción general a los Hooks
useState

Componentes, UpperCamelCase
En base a clases y funciones (functional components)
Props
Valores por defecto
PropTypes
hooks
useState

Pruebas unitarias 1 (03-counter-app + base-pruebas) (2h 30 min)
Unit Test 
Patrón AAA (https://geeks.ms/jorge/2018/08/25/unit-testing-y-el-patron-aaa/)
Arrange (Organizar/Inicializa) => inicializa los objetos y establece los valores de los datos que vamos a utilizar en el Test que lo contiene.
Act (Actuar) => realiza la llamada al método a probar con los parámetros preparados para tal fin.
Assert (Confirmar/Comprobar) => comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.
Primero probar la ruta crítica (core de la app)
¿Qué veremos en esta sección?
Introducción a las pruebas
AAA
Arrange - Arreglar
Act - Actuar
Assert - Afirmar
Primeras pruebas
Jest
Expect
toBe
Enzyme

Unitarias: prueba de piezas sueltas (rueda, ratón, varillas) y de integración: como reaccionan las piezas en conjunto (ruedas en carro, ratón en computadora, columna de edificio)
Características
1. Fáciles de escribir
2. Fáciles de leer
3. Confiables
4. Rápidas
5. Principalmente unitarias

Mitos falsos
Hacen que el programa no tenga errores (solo prueban en función de la lógica que use el desarrollador, lo que no se toma en cuenta no se puede saber si está bien)
Las pruebas no pueden fallar (puede estar mal configurada la prueba y a pesar de estar bien el programa dar un falso positivo)
Hacen lenta la aplicación (no porque no se integra en la app)
Perdida de tiempo (no porque dan más seguridad y confianza)
Hay que probar todo (No probar cosas que no son responsabilidad del desarrollador como librerías de terceros)

npm run test
Ejecuta todos los archivos .test.js
Por defecto se instala Jest para las pruebas
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern. (Permite seleccionar una prueba (archivo) específica)
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
 
 import '@testing-library/jest-dom'; Sirve para presentar sugerencias de métodos
 
Instalar siempre como dependencia de desarrollo (--save-dev) para que no se agregue al build. 
 
Enzyme React v.16 https://enzymejs.github.io/enzyme/
Aún no tiene soporte para la versión 17 de react
1. Downgrade del proyecto
2. Versión Beta. https://github.com/wojtekmaj/enzyme-adapter-react-17

setupTests.js
import Enzyme from 'enzyme';
//Para utilizar enzyme con React v.16
// import Adapter from 'enzyme-adapter-react-16';
//Para utilizar enzyme con React v.17
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

EnzymeToJSON
npm install --save-dev enzyme-to-json

setupTests.js
import {createSerializer} from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

Al ejecutar el test genera un archivo de snapshot (src/__snapshots__/<archivo>.snap), es una "fotografía" del resultado de la renderización del componente

// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Pruebas de archivo <PrimerTestApp />> Debe mostrar <PrimerTestApp /> correctamente 1`] = `
<Fragment>
  <h1>
    Saludos, Juan Manuel
  </h1>
  <p>
    Soy un subtítulo
  </p>
</Fragment>
`;

Contra esta información comprobará el test, en caso de que el snapshot deba ser reemplazado por un nuevo resultado se debe presionar u
Snapshot Summary
 › 1 snapshot failed from 1 test suite. Inspect your code changes or press `u` to update them. 
 
 
¿Qué veremos en esta sección?
Custom Hooks
Fetch hacia un API
Comunicación entre componentes
Clases de CSS
Animaciones
Enviar métodos como argumentos
Crear listados
keys
Giphy 

04-gif-expert-app (2h)
Estructura de archivos según react. https://es.reactjs.org/docs/faq-structure.html
Estructura de archivos según hackernoon: https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

Publish
Aprender cómo realizar backups a repositorios de Git
Subir nuestro repositorio a GitHub
Uso de Github Pages
Desplegar nuestra aplicación de React
- Generar build de producción de nuestra aplicación
- Renonbrar build a docs para que lo maneje git
- Agregar ./ a los href o src si no esta en la raiz


¿Qué veremos en esta sección?
Seguir el camino de las pruebas
Pruebas en componentes específicos
Pruebas en componentes de forma individual
Pruebas con customHooks
Esperar cambios en un customHook
Simular eventos en inputs y formularios
Simular llamadas a funciones
Evaluar si existen elementos en el componente


¿Qué veremos en esta sección?
Profundizar en el tema de los Hooks
Crear otros customHooks
useState
useCounter - Personalizado
useEffect y sus precauciones
useRef
useFetch - Personalizado + optimizaciones
useLayoutEffect
Memo
useMemo
useCallback

¿Qué veremos en esta sección?
useReducer
Reducers
Teoría de un reducer
	Un reducer es una función que toma 2 valores y devuelve 1 valor.
	https://zeroidentidad.gitbook.io/react-puro-19/13-hook-usereducer/que_es_reducer
	1. Es una función común y corriente
		```
		const <nombre> = () => {}
		```
	2. Debe ser una función pura
		2.1 No debe tener efectos secundarios. Todo se debe resolver sin llamar otras funciones. Esas tareas podrían fallar y causar que no funcione correctamente el reducer.
		2.2 Debe realizar solo tareas síncronas
		2.3 Debe retornar siempre un nuevo estado. No mutar.
		2.4 No debe llamar ni localStorage ni sessionStorage. Esto sería un efecto secundario. Estas tareas podrían fallar y causar que no funcione correctamente el reducer.
		2.5 No debe requerir más que una acción que puede tener un argumento.
		
		```
			// Ejemplo de lista de tareas (TO-DO).
			
			const initialTodos = [{
				id: 1,
				todo: 'Comprar pan',
				done: false
			}];
			
			const todoReducer = (state = initialTodos, action) => {
				return state;
			}
			
			let todos = todoReducer();
			
			console.log(todos);
			
			// Salida a consola
			[{...}]
			0: {id: 1, todo: "Comprar pan", done: false}
			length: 1
		```
	3. Debe retornar un nuevo estado
	4. Usualmente sólo recibe dos argumentos
		- El valor inicial (initialState) y la acción a ejecutar
Aplicación de TODOs
CRUD local

¿Qué veremos en esta sección?
Context
Provider
Context.Provider
https://es.reactjs.org/docs/context.html#contextprovider

useContext
Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor de contexto actual. El valor actual del contexto es determinado por la propiedad value del <MyContext.Provider> ascendentemente más cercano en el árbol al componente que hace la llamada.
https://es.reactjs.org/docs/hooks-reference.html#usecontext

React Router
	- https://reactrouter.com/web/guides/quick-start
	- Si presenta vulnerabilidades se pueden corregir utilizando:
		- npm audit fix
	- Si presenta error: unable to resolve dependency tree, utilizar:
		- npm audit fix	--force
Links y NavLinks
CreateContext
SPA ( Single Page Application )