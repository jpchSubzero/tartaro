import { NgModule } from '@angular/core';

import { 
  NbThemeModule, 
  NbSidebarModule, 
  NbLayoutModule, 
  NbButtonModule, 
  NbIconModule, 
  NbCardModule, 
  NbSelectModule, 
  NbInputModule, 
  NbMenuModule, 
  NbAccordionModule
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [],
  imports: [
    NbThemeModule.forRoot(),    
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,    
    NbCardModule,
    NbIconModule,
    NbSelectModule,
    NbInputModule,
    NbMenuModule.forRoot(),
    NbAccordionModule,
    NbEvaIconsModule,
  ],
  exports: [
    NbThemeModule,    
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,    
    NbCardModule,
    NbIconModule,
    NbSelectModule,
    NbInputModule,
    NbMenuModule,
    NbAccordionModule,
    NbEvaIconsModule,

  ]
})
export class NebularModule { }
