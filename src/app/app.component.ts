import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-night';
  isOpen!: boolean;
  navOpen(){
    this.isOpen = !this.isOpen;
  }
}
