import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { WishesService } from '../../services/wishes.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input()
  terminada:boolean = false;
  @ViewChild(IonList) //Para referirse al sliding como objeto cuando hay uno
  listSliding:IonList;

  // @ViewChild(IonList[]) //Para referirse al sliding como objeto cuando hay varios
  // listSlidingList:IonList[];

  @ViewChild('slidingListEdit') //Para referirse al sliding como uno particular a través de un tag de identificación
  listSlidingEdit:IonList;
  
  constructor(
    public wishesService:WishesService,
    private router:Router,
    private alertController:AlertController
  ) { }

  ngOnInit() {}

  selectedList(list:List) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/aggregate/${list.id}`);      
    } else {
      this.router.navigateByUrl(`/tabs/tab1/aggregate/${list.id}`);      
    }
  }  

  removeList(list:List) {
    this.wishesService.removeList(list);
    this.wishesService.saveStorage();
  }

  async editList(list:List) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cambiar nombre',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
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
            this.listSlidingEdit.closeSlidingItems();
          }
        }, 
        {
          text: 'Actualizar',
          role: '',
          handler: (data) => {
            console.log('Confirm Ok');
            if (data.title.length > 0) {
              this.wishesService.editList(list, data.title);
              this.listSliding.closeSlidingItems();
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
}
