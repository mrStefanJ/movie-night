import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie-service.service';
import { FormControl } from '@angular/forms';
import { MovieLikeService } from '../services/movie-like.service';
import { WishToWatch } from '../models/wishToWatch.model';
import { ToastrService } from 'ngx-toastr';

const GENRE_OPTIONS = [
  'Action',
  'Adventure',
  'Comedy',
  'Sci-Fi',
  'Animation',
  'Western',
];

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px)' }),
            stagger(
              '50ms',
              animate(
                '500ms ease-in',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            ),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [animate('500ms', style({ opacity: 0, transform: 'rotate(90deg)' }))],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
})
export class MovieListComponent implements OnInit {
  public resGenre!: any;
  public resName!: string;

  allMovies$!: Observable<Movie[]>;

  loadingMovies!: Array<Number>;

  searchFilter?: string;

  moveName = new FormControl('');
  moveGenre = new FormControl('');

  constructor(
    private moviesService: MovieService,
    private navbarService: NavbarService,
    private movieWishList: MovieLikeService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadingMovies = new Array(16).fill(0).map((n, index) => index);
    this.loadMovies();
    this.navbarService.title.next('Movie Night');
  }

  loadMovies() {
    this.allMovies$ = this.moviesService.getAllMovie();
  }

  addToCard(movie: WishToWatch) {
      this.movieWishList.addWishToWatchMovie(movie).subscribe({
        next: res => {
          console.log(res)
          this.toastr.success('Add to wish to watch!', 'Movie');
          this.movieWishList.getWishListTowatch();
        },
        error: err => {
          console.log(err);
          this.toastr.warning('You have already add','Movie')
        }
      });
  }
}
