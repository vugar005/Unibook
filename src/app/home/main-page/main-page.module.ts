import { MainPageRoutes } from './main-page.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutes
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent]
})
export class MainPageModule { }
