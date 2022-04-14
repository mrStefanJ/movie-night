import { Component, Input, OnInit, OnChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit, OnChanges {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  @Input() openNav: boolean = true;

  mode = new FormControl('over');
  
  constructor() {  }
  
  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.openNav) {
      this.sidenav.open();
    } else {
      this.sidenav?.close();
    }
  }

  
}
