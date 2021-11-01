import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsHija1Component } from './settings-hija1/settings-hija1.component';
import { SettingsHija2Component } from './settings-hija2/settings-hija2.component';
import { SettingsHija3Component } from './settings-hija3/settings-hija3.component';

const routes: Routes = [
  { 
    path: '', 
    component: SettingsComponent 
  },
  {
    path: 'settingshija1', 
    component: SettingsHija1Component
  },
  {
    path: 'settingshija2', 
    component: SettingsHija2Component
  },
  {
    path: 'settingshija3', 
    component: SettingsHija3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
