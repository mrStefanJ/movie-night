import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
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
import { FormControl, FormGroup } from '@angular/forms';
import { MovieLike } from '../models/like.model';
import { MovieLikeService } from '../services/movie-like.service';

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
export class MovieListComponent implements OnInit, AfterViewInit {
  public resGenre!: any;
  public resName! : string;
  
  @Input() movieLike!: MovieLike;

  allMovies$!: Observable<Movie[]>;
  loadingMovies!: Array<Number>;

  searchFilter?: string;
  isDrawerOpen?: boolean;

  formFilter!: FormGroup;

  // public moveName: string = '';
  // moveName = new FormControl('');
  // moveGenre = new FormControl('');

  addToList: boolean = false;

  constructor(
    private moviesService: MovieService,
    private navbarService: NavbarService,
    private movielikeServer: MovieLikeService
  ) {}

  ngOnInit() {
    this.loadingMovies = new Array(16).fill(0).map((n, index) => index);
    this.loadMovies();
    this.navbarService.title.next('Movie Night');
  }

  loadMovies() {
    this.allMovies$ = this.moviesService.getAllMovie();
  }

  ngAfterViewInit(): void {
    
  }
  // handleAddToWishlist() {
  //   this.movielikeServer.addWishlist(this.movieLike?.id).subscribe((res) => {
  //     this.addToList = true;
  //   });
  // }

  // handleRemoveFromWishlist() {
  //   this.movielikeServer.removeFromWishlist(this.movieLike?.id).subscribe(() => {
  //       this.addToList = false;
  //     });
  // }
}
