import { NotFoundComponent } from './home/not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainPageModule } from './home/main-page/main-page.module';
import { HeaderComponent } from './home/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './home/footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RegistrationDialogComponent } from './home/header/registration-dialog/registration-dialog.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      HeaderComponent,
      NotFoundComponent,
      FooterComponent,
     RegistrationDialogComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MainPageModule,
      MatDialogModule
   ],
   providers: [],
   entryComponents: [RegistrationDialogComponent],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
