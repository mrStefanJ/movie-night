import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators'
import { Genres, Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private MOVIE_ROOT_URL = 'http://localhost:3000/movies';
  private GENRE_ROOT_URL = 'http://localhost:3000/genres';

  constructor(
    private http: HttpClient
  ) { }

  //add new movie
  addMovie(movie: Movie){
    return this.http.post(`${this.MOVIE_ROOT_URL}/addMovie`, movie);
  }
  // display all movie
  getAllMovie(){
    return this.http.get<Movie[]>(`${this.MOVIE_ROOT_URL}`).pipe(this.addDelay, catchError(this.handleError));
  }

  //display movie by id
  getMovieById(id: number){
    return this.http.get<Movie>(`${this.MOVIE_ROOT_URL}/` + id);
  }

  addDelay(obs: Observable<any>){
    return obs.pipe(delay(1500));
  }

  // display all genre
  getGenre(){
    return this.http.get<Genres[]>(this.GENRE_ROOT_URL).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('An error occurred:', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, ` +  `body was: ${error.error}`);
    }
    return throwError('Something bad happened. PLease try again later.');
  }
}
