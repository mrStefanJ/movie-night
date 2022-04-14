import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  
  constructor() { }

  @Output() movieName = new EventEmitter();
  @Output() movieGenre = new EventEmitter();

  ngOnInit(): void {
  }

  onCangeName(value:any){
    this.movieName.emit(value);
  }

  onCangeGender(value: any){
    this.movieGenre.emit(value);
  }

  // onCangeGender(value:any){

  // }

}
