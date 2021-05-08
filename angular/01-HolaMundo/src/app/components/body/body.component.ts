import { Component } from '@angular/core';

@Component({
    selector: 'app-body', //Por convensión se usa app-
    templateUrl: './body.component.html' //Se recomienda de esta forma cuando es poco código html.

})
export class BodyComponent {
    show: boolean = true;

    phrase: any = {
        message: 'I don\'t always test my code But when I do, I do it in production',
        author: 'Juan Pablo Correa'
    }

    characters: string[] = this.phrase.message.split(" ");
}