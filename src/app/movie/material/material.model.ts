import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  imports: [
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
