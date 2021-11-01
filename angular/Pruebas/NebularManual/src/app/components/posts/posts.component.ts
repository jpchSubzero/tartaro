import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PostsResponse } from 'src/app/interfaces/post-response.interface';
import { UsersResponse } from 'src/app/interfaces/user-response.interface';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title = 'Posts Admin';

  source: LocalDataSource = undefined!; // add a property to the component

  settings:any = undefined!;

  selectedItem:string = '5';
  query:string = '';

  loading = true;
  data:PostsResponse = undefined!;

  constructor(private postsService:PostsService) {
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.postsService.getUsers().subscribe((response:PostsResponse) => {
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
        title: {
          title: 'Título',
          filter: {
            type: 'completer',
            config: {
              completer: {
                data: this.data?.data,
                searchFields: 'title',
                titleField: 'title',
                placeholder: 'Ingrese un título...',
              },
            },
          },
        },
        body: {
          title: 'Post',
          filter: {
            type: 'completer',
            config: {
              completer: {
                data: this.data?.data,
                searchFields: 'body',
                titleField: 'body',
                placeholder: 'Ingrese un post...',
              },
            },
          },
        },
        user_id: {
          title: 'User Id',
          filter: {
            type: 'completer',
            config: {
              completer: {
                data: this.data?.data,
                searchFields: 'user_id',
                titleField: 'user_id',
                placeholder: 'Ingrese un id de usuario...',
              },
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
        field: 'title',
        search: query
      },
      {
        field: 'body',
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

