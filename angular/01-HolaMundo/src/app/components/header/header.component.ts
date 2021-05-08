import { Component } from '@angular/core';

@Component({
    selector: 'app-header', //Por convensión se usa app-
    // template: `<h1>Header Component</h1>`, //Se recomienda de esta forma cuando es poco código html.
    templateUrl: './header.component.html' //Se utiliza cuando es más código html.

})
export class HeaderComponent {

}