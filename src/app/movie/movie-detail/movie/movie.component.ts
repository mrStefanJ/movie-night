import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Genres, Movie } from '../models/movie.model';
import { StarRatingColor } from '../movie-rating/movie-rating.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})

export class MovieComponent implements OnInit {
  @Input() movie!: Movie;
  genre! : Genres;

  rating: any = this.movie?.rating;
  starCount:number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  

  constructor(
    private location: Location
  ) {}

  ngOnInit() {
  }

  onRatingChanged(rating: number){
    console.log(rating);
    this.rating = rating;
  }

  goBack() {
    this.location.back();
  }
}
