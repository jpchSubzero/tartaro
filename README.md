# Angular
## Instalaciones necesarias
### 1. NodeJS: 
- https://nodejs.org/es/
- Descargar e instalar
### 2. Google Chrome (Recomendado)
- https://www.google.es/chrome/browser/desktop/
- Descargar e instalar
### 3. TypeScript
- http://www.typescriptlang.org/
- npm install -g typescript
- Verificar que versión sea superior a la 1.0
### 4. Angular CLI
- https://cli.angular.io/
- https://github.com/angular/angular-cli
- npm install -g @angular/cli
### 5. Ionic (app móviles hibridas)
http://ionicframework.com/getting-started/
### 6. Editores recomendados
#### - Atom
 - https://atom.io/
####  - Visual Studio Code
 - https://code.visualstudio.com/
### 7. Plugins
#### Visual Studio Code
- Angular 2 TypeScript Emmet
- Angular X Snippets – TypeScript, Html, Angular Material...
- Angular Language Service
- Angular Snippets (VX)
- Angular2-inline
- Bootstrap 4 & Font Awesome snippets
- HTML CSS Support
- JavaScript (ES6) code snippets
- JS-CSS-HTML Formatter
- JSHint
- Material Icon Theme 
- Prettier – Code Formatter
- Terminal
- TSLint
- TypeScript Hero
- TypeScript Importer
#### ATOM
- Angular 2 Type Script Snippets
- Atom Bootstrap3
- Atom Typescript
- File Icons
- Platformio Ide Terminal
- V Bootstrap4
### Notas:
- **-g:** Ejecutar comando como administrador en windows o con sudo en linux.
# Qué es ECMAScript
- ECMAScript específicamente es el estándar que a partir del año 2015 a la actualidad se encarga de regir como debe ser interpretado y funcionar el lenguaje JavaScript, siendo este (JS – JavaScript) interpretado y procesado por multitud de plataformas, entre las que se encuentran los navegadores web, NodeJS u otros ambientes como el desarrollo de aplicaciones para los distintos sistemas operativos que actualmente existen en el mercado. Los responsables de dichos navegadores y JavaScript deben encargarse de interpretar el lenguaje tal como lo fija ECMAScript.
[Leer más](https://openwebinars.net/blog/que-es-ecmascript/)
- La versión más extendida es la ECMAScript 2015 o ECMAScript 6 por lo que se recomienda su uso.
# Qué es TypeScript
En resumen, TypeScript se define como una especie de superset de JavaScript, cuyo resultado final es un código de JavaScript.
[Leer más](https://openwebinars.net/blog/que-es-typescript/). [Introducción](https://khru.gitbooks.io/typescript/content/). [TypeScript Online](https://www.typescriptlang.org/play?#code/Q)
- **Compilar TS:** tsc [nombre del archivo .ts]
- **Crear un componente básico con función anónima autoinvocada**
```
(function(){
.
.
.
})();
```
- **Crear archivo de configuración TS (tsconfig.json):** ```tsc --init```
- **TS en modo listener (cambios detectados automaticamente):** ```tsc -w```
- **Definir variables: ** 
	- let [nobre variable]: [tipo de dato]: Genera variables diferentes por ámbito.
	- var [nobre variable]: [tipo de dato]: No genera variables diferentes por ámbito.
- **Definir constantes:** 
	- const [nobre variable]: Ocupa menos memoria.
- **Excluir directorios de compilación:**  
	- Agregar "exclude": [[Nombre directorio]]
- **Templates literales:**  
	- ``` `${[nombre variable o función]}` ```
- **Funciones de flecha:**  
	- ```const miFuncion6 = (a: number, b: number) => a + b;```
	- No modifican el scope o alcande de las variables en caso de ser una función interna a un objeto.
	```
	const hulk = {
        nombre: 'Hulk',
        smash() {
            //Esta función modifica el scope o alcance y no utilizar las variables de la constante
            setTimeout(function() {
                console.log(`${this.nombre} smash!!!!`);
            }, 1000);
        }
    }

    const hulk1 = {
        nombre: 'Hulk',
        smash() {
            //Esta función no modifica el scope o alcance
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!!`);
            }, 1000);
        }
    }```
- **Promesas:**
	- Las promesas representan un resultado eventual de una operación asincrónica, la primera manera de interactuar con un una promesa o promise es a través del método then el cual registra el callback que recibirá la respuesta o la razón por la cual la promesa no a podido ser cumplida. [Leer más](https://khru.gitbooks.io/typescript/content/promesas.html)
- **Decoradores en TypeScript**
	- Los decoradores (decorators en inglés) son una propuesta para incluir en JavaScript que nos permite añadir anotaciones y metadatos o cambiar el comportamiento de clases, propiedades, métodos, parámetros y accesors. Con TypeScript podemos usarlos activando la propiedad **experimentalDecorators** del tsconfig.json de nuestro proyecto o si decidimos compilar mediante el comando tsc, colocar siempre la opción de --experimentalDecorators ---target ES5. [Leer más](https://ichi.pro/es/anatomia-de-los-decoradores-de-typescript-y-sus-patrones-de-uso-79676637924070)
- **Types e interfaces**
	- Sirven para definir un contrato que puede extenderse. [Leer más](https://medium.com/@jesusmurfontanals/typescript-para-que-sirven-los-types-y-interfaces-y-en-que-se-diferencian-bee0af17fffa)
- **Importación**
	- Incluir clases desde orígenes externos. Las clases deben tener la palabra reservada **export** y la sintaxis de importación es: 
	```
		import { <Nombre de la clase> } from '<Ruta del archivo de la clase>';
	```
- **Backticks (``)**
	- Permiten incluir textos largos y con saltos de línea. Ej.
	```
	`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`	
	```
- **Referencia a objetos**
	- Con doble llave {{}} para el valor. Ej. alt="{{variable}}"
	- Con corchete en atributo []. Ej. [alt]="variable"

# Angular 2
## ¿Qué son las Directivas Estructurales?
Las directivas estructurales corresponden a elementos en el HTML que permiten añadir, manipular o eliminar elementos del DOM. Estos elementos, en forma de atributos, se aplican a elementos huéspedes. Al hacer esto, la directiva hace lo que debe hacer sobre el elemento huésped y sus elementos hijos. Estas directivas son fácilmente reconocibles debido a que están antecedidas por un asterisco (*) seguido del nombre de la directiva. [Leer más](https://medium.com/angular-chile/directivas-estructurales-en-angular-33529aa9dd31)

## Componente
Un componente en Angular es un bloque de código re-utilizable, que consta básicamente de 3 archivos: un CSS, un HTML (también conocido como plantilla o en inglés, template) y un TypeScript (en adelante, TS). La carpeta app con la que viene Angular por defecto es un componente, aunque un tanto especial. Pero fíjate que tiene esos 3 mismos archivos. [Leer más](https://www.acontracorrientech.com/entendiendo-los-componentes-en-angular/#:~:text=Un%20componente%20en%20Angular%20es,componente%2C%20aunque%20un%20tanto%20especial.)

## Angular CLI
Angular CLI es la forma más cómoda para empezar a desarrollar aplicaciones web, móvil con Angular 2, es una herramienta de linea de comandos que facilita la creación, generación, ejecución, testing, deploy. Lo genial es que es parte de los proyectos oficiales de la gente que hace Angular. [Leer más](https://medium.com/@alvareztech/angular-cli-crear-aplicaciones-con-angular-2-fac1d707f196#:~:text=Angular%20CLI%20es%20la%20forma,la%20gente%20que%20hace%20Angular.)

- **Crear aplicación angular**
```
						ng new my-app
```

- **Instalar paquetes**
```
						npm install
```

- **Ejecutar aplicación**
```
						ng serve -o //-o Para abrir automaticamente el navegador
```

- **Crear component**
	- Generar un componente por defecto y lo agrega al app.module.ts
```
						ng g c components/footer //g: generate c: component 
```
 
## Estructura proyecto Angular
- **e2e:** End to end, pruebas unitarias e integración. [Leer más](https://coryrylan.com/blog/introduction-to-e2e-testing-with-the-angular-cli-and-protractor)
- **node_modules:** Contiene los módulos de los que depende el proyecto únicamente para desarrollo. Depende de package.json.
- **src:** Contine el código de la aplicación.
	- **app:** Contiene los componentes básicos de la aplicación.
		- **app.component.css:** Contiene el estilo aplicado al componente html.
		- **app.component.html:** Contiene el código html del componente.
		- **app.component.spec.css:** Contiene el código para la realización de pruebas.
		- **app.component.ts:** Contiene el código TypeScript.
		- **app.module.ts:** Contiene la definición de todo lo que se va a utilizar en la aplicación. [Leer más](https://robertomiguelz.blogspot.com/2020/02/para-que-sirve-el-archivo-appmodulets.html)
	- **assets:** Contiene los recursos estáticos. Contiene un archivo llamado .gitkeep que previene que la carpeta sea ignorada en caso de estar vacía.
	- **environments:** Contiene la definición de variables de ambiente.
	- **browserslist:** (lista de navegadores) es una herramienta para proyectos frontend (independiente a PostCSS, pero desarrollada por los mismos creadores) que permite automatizar el grado decompatibilidad que tendrán algunas herramientas Javascript o CSS respecto a navegadores como Internet Explorer o versiones antiguas de Chrome, Firefox, Opera, Edge o incluso Node. [Leer más](https://lenguajecss.com/postcss/introduccion/browserslist/)
	- **karma.conf.js:** Contine la configuración para pruebas karma.
	- **main.ts:** Contiene el código de inicio de la aplicación.
	- **polyfills:** Mejora la compatibilidad con navegadores viejos.
	- **style.css:** Contiene el estilo global de la aplicación.
	- **tsconfig.app.json:** Contine especificaciones de TypeScript.
	- **tsconfig.spec.app.json:** Contine especificaciones de TypeScript para pruebas.
	- **index.html:** Página de inicio de la aplicación.
- **gitignore:** Lista archivos o carpetas que no se necesita guardar en git.
- **angular.json:** Configuración de aplicación.
- **package-lock.json:** Archivo generado automáticamente para llevar históricos de package.json.
- **package.json:** Lista de dependencias del proyecto. dev para desarrollo.
- **readme.md:** Descripción de la aplicación.
- **tsconfig.json:** Archivo de configuración de TypeScript.
- **tslint.json:** Controla los estándares de código en TypeScript.	

## Bootstrap
Bootstrap es un framework CSS y Javascript diseñado para la creación de interfaces limpias y con un diseño responsive. Además, ofrece un amplio abanico de herramientas y funciones, de manera que los usuarios pueden crear prácticamente cualquier tipo de sitio web haciendo uso de los mismos. [Leer más](https://axarnet.es/blog/bootstrap)

## Pîpes
Los pipes son una herramienta de Angular que nos permite transformar visualmente la información, por ejemplo, cambiar un texto a mayúsculas o minúsculas, o darle formato de fecha y hora. [Leer más](https://www.acontracorrientech.com/pipes-en-angular-guia-completa/)
- uppercase y lowercase
- Slice
- Decimal
- Percent
- Currency
- Json
- Async
- Date  

