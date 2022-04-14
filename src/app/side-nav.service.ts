import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor() { }

  private sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open(){
    this.sidenav.opened = true;
    return this.sidenav.open();
  }

  public close(){
    this.sidenav.opened = false;
    return this.sidenav.close();
  }

  public toggle() {
    return this.sidenav.toggle();
  }
}
