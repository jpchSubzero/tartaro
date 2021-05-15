import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneFilterPipe } from './done-filter.pipe';



@NgModule({
  declarations: [
    DoneFilterPipe
  ],
  exports: [
    DoneFilterPipe
  ],
  imports: [
    CommonModule //Se lo podría quitar si no se usan funciones if, for, etc
  ]
})
export class PipesModule { }
