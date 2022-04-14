import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title$ = this.navbarService.title;
  
  @Output() open: EventEmitter<boolean> = new EventEmitter();
  
  constructor(
    private navbarService: NavbarService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  clickDrawer(){
    this.open.emit(true);
  }
}
