import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  id!: number;
  movie!: Movie;
  movieSub$!: Subscription;

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.movieSub$ = this.movieService.getMovieById(this.id).
    subscribe(movie => {
     this.movie = movie;
     this.navbarService.title.next(movie.name);
      console.log(this.movie);
    });
  }

  ngOnDestroy(): void {
    this.movieSub$?.unsubscribe();    
  }
}
