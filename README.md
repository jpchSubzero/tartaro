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
- http://ionicframework.com/getting-started/
### 6. Editores recomendados
#### - Atom
 - https://atom.io/
####  - Visual Studio Code
 - https://code.visualstudio.com/
 ####  - StackBlitz (editor Online)
 - https://stackblitz.com/angular
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

- **Operador Spread**
Sirve para propagar los elementos de un arreglo u objeto. [Leer más](https://basarat.gitbook.io/typescript/future-javascript/spread-operator)

	```
	function foo(x, y, z) { }
	var args = [0, 1, 2];
	foo.apply(null, args);

	function foo(x, y, z) { }
	var args = [0, 1, 2];
	foo(...args);
	```	

# Angular 2
## ¿Qué son las Directivas Estructurales?
Las directivas estructurales corresponden a elementos en el HTML que permiten añadir, manipular o eliminar elementos del DOM. Estos elementos, en forma de atributos, se aplican a elementos huéspedes. Al hacer esto, la directiva hace lo que debe hacer sobre el elemento huésped y sus elementos hijos. Estas directivas son fácilmente reconocibles debido a que están antecedidas por un asterisco (*) seguido del nombre de la directiva. [Leer más](https://medium.com/angular-chile/directivas-estructurales-en-angular-33529aa9dd31)

## Componente
Un componente en Angular es un bloque de código re-utilizable, que consta básicamente de 3 archivos: un CSS, un HTML (también conocido como plantilla o en inglés, template) y un TypeScript (en adelante, TS). La carpeta app con la que viene Angular por defecto es un componente, aunque un tanto especial. Pero fíjate que tiene esos 3 mismos archivos. [Leer más](https://www.acontracorrientech.com/entendiendo-los-componentes-en-angular/#:~:text=Un%20componente%20en%20Angular%20es,componente%2C%20aunque%20un%20tanto%20especial.)

- **ngOnChanges:** Este evento se ejecuta cada vez que se cambia un valor de un input control dentro de un componente. Se activa primero cuando se cambia el valor de una propiedad vinculada. Siempre recibe un change data map o mapa de datos de cambio, que contiene el valor actual y anterior de la propiedad vinculada envuelta en un SimpleChange
- **ngOnInit:** Se ejecuta una vez que Angular ha desplegado los data-bound properties(variables vinculadas a datos) o cuando el componente ha sido inicializado, una vez que ngOnChanges se haya ejecutado. Este evento es utilizado principalmente para inicializar la data en el componente.
- **ngDoCheck:** Se activa cada vez que se verifican las propiedades de entrada de un componente. Este método nos permite implementar nuestra propia lógica o algoritmo de detección de cambios personalizado para cualquier componente.
- **ngAfterContentInit:** Se ejecuta cuando Angular realiza cualquier muestra de contenido dentro de las vistas de componentes y justo después de ngDoCheck. Actuando una vez que todas las vinculaciones del componente deban verificarse por primera vez. Está vinculado con las inicializaciones del componente hijo.
- **ngAfterContentChecked:** Se ejecuta cada vez que el contenido del componente ha sido verificado por el mecanismo de detección de cambios de Angular; se llama después del método ngAfterContentInit. Este también se invoca en cada ejecución posterior de ngDoCheck y está relacionado principalmente con las inicializaciones del componente hijo.
- **ngAfterViewInit:** Se ejecuta cuando la vista del componente se ha inicializado por completo. Este método se inicializa después de que Angular ha inicializado la vista del componente y las vistas secundarias. Se llama después de ngAfterContentChecked. Solo se aplica a los componentes.
- **ngAfterViewChecked:** Se ejecuta después del método ngAfterViewInit y cada vez que la vista del componente verifique cambios. También se ejecuta cuando se ha modificado cualquier enlace de las directivas secundarias. Por lo tanto, es muy útil cuando el componente espera algún valor que proviene de sus componentes secundarios.
- **ngOnDestroy:** Este método se ejecutará justo antes de que Angular destruya los componentes. Es muy útil para darse de baja de los observables y desconectar los event handlers para evitar memory leaks o fugas de memoria.

### Ciclo de Vida (Lifecycle)
En Angular, cada componente tiene un ciclo de vida, una cantidad de etapas diferentes que atraviesa. [Leer más](https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688)

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
						ng g c components/<nombre> //g: generate, c: component 
						ng g c components/<nombre> -it -is --flat --skip-tests
								//it: inline template (código HTML dentro del ts)
								//is: inline style (estilo CSS dentro del ts)
								//flat: sin crear carpeta
								//skip-tests: omitir archivos spec de pruebas
```

- **Crear pipe**
	- Generar un pipe por defecto y lo agrega al app.module.ts
```
						ng g p pipes/<nombre> 
```

- **Crear directiva**
	- Generar una directiva por defecto y lo agrega al app.module.ts
```
						ng g d directives/<nombre> 
```
 
- **Crear módulos**
	- Generar un módulo por defecto y lo agrega al app.module.ts, se los agrega en los imports del app.module.
```
						ng g m <nombre> 
```

- **Crear servicio**
	- Generar un servicio por defecto y lo agrega al app.module.ts
```
						ng g s <nombre> 
```

- **Crear guard**
	- Generar un guard por defecto y lo agrega al app.module.ts
```
						ng g g <nombre> 
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

## Pipes
Los pipes son una herramienta de Angular que nos permite transformar visualmente la información, por ejemplo, cambiar un texto a mayúsculas o minúsculas, o darle formato de fecha y hora. [Leer más](https://www.acontracorrientech.com/pipes-en-angular-guia-completa/)
- uppercase y lowercase
- Slice: 1 o 2 parámetros para suprimir caracteres desde o desde - hasta.
- Decimal
- Percent
- Currency
- Json
- Async
- Date  

### Pipes impuros
Un Pipe impuro funciona exactamente igual que uno "normal", solo que son llamados en cada cambio del ciclo de detección, un click, el foco, el cambio del input etc, lo que significa que los datos que se muestren por pantalla van a estar siempre actualizados, cosa que puede no pasar con un Pipe "puro", por defecto todo pipe es puro. [Leer más](https://electroboveda.blogspot.com/2018/11/angular-19-pipes-impuros.html)

- **Sintaxis**
```
						@Pipe({
						  name: 'filtroCompletado',
						  pure: false
						})
```

### Localization
Agregar funciones de localización para traducir nombres, como fechas, al idioma especificado. [Leer más](https://angular.io/guide/i18n)

### DomSanitizer 
Ayuda a prevenir los errores de seguridad de Cross Site Scripting (XSS)desinfectando los valores para que sean seguros de usar en los diferentes contextos DOM. [Leer más](https://runebook.dev/es/docs/angular/api/platform-browser/domsanitizer)

### Bindeo en dos vias
Two-way binding gives components in your application a way to share data. Use two-way binding to listen for events and update values simultaneously between parent and child components. [Leer más](https://angular.io/guide/two-way-binding)

- **Sintaxis**
```
						[(ngModel)]="<variable>"
```

### Directivas
Las directivas son, esencialmente, instrucciones para manipular el DOM. [Leer más](https://www.acontracorrientech.com/directives-en-angular-guia-practica/#:~:text=a%20Angular%20antes.-,%C2%BFQu%C3%A9%20son%20las%20directivas%3F,instrucciones%20para%20manipular%20el%20DOM.)

- **Scope:** El alcance de una directiva está limitada al componente.

- **ngStyle:** Actualiza elementos de estilo HTML.
```
						<some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
						<some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
						<some-element [ngStyle]="objExp">...</some-element>
```

- **NgClass:** Agrega y quita clases CSS a elementos HTML.

```
						<some-element [ngClass]="'first second'">...</some-element>
						<some-element [ngClass]="['first', 'second']">...</some-element>
						<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
						<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
						<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
```

- **NgSwitch:** Seleccionar entre varias opciones.

```
						<span [ngSwitch]="<variable>">
						<p *ngSwitchCase="<condición 1>">

						</p>
						<p *ngSwitchCase="<condición 2>">

						</p>
						
						.
						.
						.
						<p *ngSwitchDefault>
						

						</p>
						</span>
```

- **Rutas hijas:** Rutas internas en una página [Leer más](https://www.acontracorrientech.com/routing-en-angular-guia-completa-parte-5/#t-1609788239241).

### Formularios
[Leer más](https://mugan86.medium.com/formularios-en-angular-diferencias-template-y-reactive-forms-e37af5e30b81)
#### Formularios basados ​​en plantillas (Template Forms)
- FormsModule
- Por convención ubicar primero los tags html y luego angular.
- Se recomienda para formularios cortos y sin bindeo.
- Utilizan el “FormsModule”.
- Son de naturaleza asincrónica.
- La mayor parte de la lógica se basa en la plantilla (HTML).
- Para linkar el form HTML con el componente se utiliza: #<nombre>="ngForm" y se envía como parámetro <nombre> al método que va a procesar el formulario.
- **Propiedades principales:** Cada propiedad permite evaluar o recibir resultados o valores además de generar automáticamente clases en el control de acuerdo a los resultados. [Leer más](https://angular.io/api/forms/NgForm). Ej. ng-untouched, ng-pristine, ng-valid.

```
<input 
_ngcontent-ebt-c45="" 
type="text" 
placeholder="Nombre" 
name="nombre" 
required="" 
minlength="5" 
class="form-control ng-untouched ng-pristine ng-valid" 
ng-reflect-required="" 
ng-reflect-minlength="5" 
ng-reflect-name="nombre" 
ng-reflect-model="Juan Pablo"
>
```
 	- valid: Cuando el control es válido.
	- invalid: Cuando el control es inválido.
	- pending: Cuando el control está pendiente por una acción asíncrona.
	- pristine: Cuando el control no ha sido editado de ninguna manera.
	- touched: Cuando el control ha sido accesado.
	- untouched: Cuando el control no ha sido accesado.

#### Formularios reactivos (Reactive Forms)
- ReactiveFormsModule
- Se recomienda para formularios extensos y con bindeo.
- Utilizan “ReactiveFormsModule”.
- Son de naturaleza sincrónica en su mayoría.
- La lógica reside principalmente en el componente (TS).

## Ionic
Ionic es una estructura tecnológica (Framework) de código abierto que se utiliza en el desarrollo de aplicaciones móviles híbridas, es decir, se combinan el HTML5, CSS y JavaScript dando como resultado aplicaciones con una interfaz amigable e intuitiva para el usuario que luego se comercializan o descargan en plataformas como Android o IOs. [Leer más](https://www.qualitydevs.com/2019/05/31/que-es-ionic-desarrollador-web/)

- **Levantar app**
```
						ionic serve
```

- **Crear nueva página**
```
						ionic g page <path>
```

## Progressive Web Apps (PWA)
Progressive web apps (PWA) o aplicación web progresiva es una solución basada en la web tradicional que todos conocemos, aunque incorpora algunas particularidades que la hacen parecerse a una app nativa para teléfonos móviles y tabletas. Cada proyecto es independiente y el nivel de adaptación de la web al formato app es progresivo, por lo que puede que visitemos un site con una PWA casi idéntica a una app o quizá sea una web con algunos avances. [Leer más](https://www.iebschool.com/blog/progressive-web-apps-analitica-usabilidad/)

## Ionic Storage
Storage is an easy way to store key/value pairs and JSON objects. Storage uses a variety of storage engines underneath, picking the best one available depending on the platform. [Leer más](https://ionicframework.com/docs/v3/storage/)

