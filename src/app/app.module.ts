import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainPageModule } from './home/main-page/main-page.module';
import { HeaderComponent } from './home/header/header.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MainPageModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
