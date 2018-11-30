import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  active = false;
  constructor(private dialog: MatDialog) { }


  openAuthDialog() {
    const ref = this.dialog.open(RegistrationDialogComponent, {panelClass: 'auth-custom-dialog'});
  }

}
