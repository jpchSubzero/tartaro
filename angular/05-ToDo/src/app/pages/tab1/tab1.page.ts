import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
// import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public wishesService:WishesService,
    private router:Router,
    private alertController:AlertController
  ) {
  }

  async addList() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Crear',
          role: '',
          handler: (data) => {
            console.log('Confirm Ok');
            if (data.title.length > 0) {
              this.router.navigateByUrl(`/tabs/tab1/aggregate/${this.wishesService.addList(data.title)}`);
            } else {
              const alert1 = this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error!',
                subHeader: 'Ingreso de información',
                message: 'Debe ingresar un nombre a la nueva lista.',
                buttons: ['OK']
              }).then(x => x.present());    
              return false;          
            }
          }
        }
      ]
    });

    alert.present().then(
      () => {
        const firstInput: any = document.querySelector('ion-alert input');
        firstInput.focus();
        return;
      }
    );    
  }

  // selectedList(list:List) {
  //   this.router.navigateByUrl(`/tabs/tab1/aggregate/${list.id}`);
  // }

}
