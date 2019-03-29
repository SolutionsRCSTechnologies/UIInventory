import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FilterBy
} from './global.pipes';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterBy],
  exports: [
    FilterBy
  ]
})
export class GlobalPipesModule { }