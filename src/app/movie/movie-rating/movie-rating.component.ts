import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from '../models/movie.model';

export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MovieRatingComponent implements OnInit {
  movie!: Movie;

  @Input('rating') private rating: any = this.movie?.rating;
  @Input('startCount') public starCount: number = 5;
  @Input('color') public color: string  = 'accent';
  @Output() public ratingUpdate = new EventEmitter();

  private snackBarDuration: number = 2000;
  public ratingArr: number[] = [];

  constructor(private snacBar: MatSnackBar) { }

  ngOnInit(){
    for(let index = 0; index < this.starCount; index++){
      this.ratingArr.push(index)
    }
  }

  onClick(rating: number){
    console.log(rating);
    this.snacBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdate.emit(rating);
    return false;
  }

  showIcon(index:any){
    if(this.rating >= index + 1){
      return 'star';
    } else {
      return 'star_border';
    }
  }

}