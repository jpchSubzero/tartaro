import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UsersResponse } from 'src/app/interfaces/user-response.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent implements OnInit {

  title = 'Usuarios Admin';

  source: LocalDataSource = undefined!; // add a property to the component

  settings:any = undefined!;

  selectedItem:string = '5';
  query:string = '';

  loading = true;
  data:UsersResponse = undefined!;

  constructor(private usersService:UsersService) {
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.usersService.getUsers().subscribe((response:UsersResponse) => {
      this.data = response;
      this.source = new LocalDataSource(this.data.data); // create the source
      this.loading = false;
      this.setSettings();
    });
  }

  setSettings() {
    this.settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },    
      columns: {
        id: {
          title: 'ID',
        },
        name: {
          title: 'Nombres',
          filter: {
            type: 'completer',
            config: {
              completer: {
                data: this.data?.data,
                searchFields: 'name',
                titleField: 'name',
                placeholder: 'Ingrese un nombre...',
              },
            },
          },
      },
        email: {
          title: 'Email',
          filter: {
            type: 'completer',
            config: {
              completer: {
                data: this.data?.data,
                searchFields: 'email',
                titleField: 'email',
                placeholder: 'Ingrese un email...',
              },
            },
          },
      },
      gender: {
        title: 'Género',
        filterFunction(cell?: any, search: string = ''): boolean {          
          if (cell === search || search === '') {
            return true;
          } else {
            return false;
          }          
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Seleccionar un género...',
            list: [
              { value: 'female', title: 'Femenino' },
              { value: 'male', title: 'Masculino' },
            ],
          },
        },
      },
      status: {
        title: 'Estatus',
        filterFunction(cell?: any, search: string = ''): boolean {          
          if (cell === search || search === '') {
            return true;
          } else {
            return false;
          }          
        },
        filter: {
          type: 'checkbox',
          config: {
            true: 'active',
            false: 'inactive',
            resetText: 'Limpiar',
          },
        },
      },

      },
      pager: {
        display: true,
        perPage: 5,
      },
      actions: {
        columnTitle: "Acciones"
      },
      noDataMessage: 'No existen coinicidencias'
    };
  
  }


  
  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'name',
        search: query
      },
      {
        field: 'email',
        search: query
      },
    ], false); 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  } 
  
  onPaging() {
    this.source.setPaging(1, parseInt(this.selectedItem), true);
  }

  reset() {
    this.source.reset();
    this.query = '';
  }  

  onRoleDelete(event:any) {
    console.log(event.target);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }    
  }
  
}

