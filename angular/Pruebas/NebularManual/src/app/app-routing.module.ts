import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: 'users',
    component: AdminComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
