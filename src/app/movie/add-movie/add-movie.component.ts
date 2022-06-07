import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Genres } from '../models/movie.model';
import { MovieService } from '../services/movie-service.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  genres$!: Observable<Genres[]>;
  selectedGenreValue: any = [];
  genreArray: any = [];
  submitted = false;

  movieForm = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required],
    genre: this.fb.array([], [Validators.required]),
    releaseYear: ['', Validators.required],
    story: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private movieService: MovieService,
    private navbarServise: NavbarService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.navbarServise.title.next('Add Movie');
    this.getGenres();
  }

  addMovie() {
    this.submitted = true;
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe((res) => {
        console.log(res);
        this.movieForm.reset();
        this.router.navigate(['/']);
        this.movieService.getAllMovie();
      });
    }
  }

  getGenres() {
    this.genres$ = this.movieService.getGenre();
    console.log(this.genres$);
  }

  changeSelection(data: any) {
    const genre: FormArray = this.movieForm.get('genre') as FormArray;

    if (data.target.checked) {
      genre.push(new FormControl(data.target.value));
    } else {
      const index = genre.controls.findIndex(
        (x) => x.value === data.target.value
      );
      genre.removeAt(index);
    }
    console.log(genre.value);
  }

  resetForm() {
    this.movieForm.reset();
  }
}
