import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { 
//   NbThemeModule, 
//   NbSidebarModule, 
//   NbLayoutModule, 
//   NbButtonModule, 
//   NbIconModule, 
//   NbCardModule, 
//   NbSelectModule, 
//   NbInputModule, 
//   NbMenuModule, 
//   NbAccordionModule
// } from '@nebular/theme';

// import { NbEvaIconsModule } from '@nebular/eva-icons';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './components/posts/posts.component';
import { NebularModule } from './components/nebular/nebular.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminComponent,
    MenuComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SmartTableModule,
    BrowserAnimationsModule,
    NebularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
