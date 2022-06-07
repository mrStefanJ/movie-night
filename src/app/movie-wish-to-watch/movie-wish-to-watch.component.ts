import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieLikeService } from '../movie/services/movie-like.service';

@Component({
  selector: 'app-movie-wish-to-watch',
  templateUrl: './movie-wish-to-watch.component.html',
  styleUrls: ['./movie-wish-to-watch.component.scss'],
})
export class MovieWishToWatchComponent implements OnInit {
  id!: string;
  movie: any = [];

  @Output() closeSideNav = new EventEmitter();

  constructor(
    private moviesService: MovieLikeService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getMoveListToWatch();
  }

  onToggleClose() {
    this.closeSideNav.emit();
  }

  getMoveListToWatch() {
    this.moviesService.getWishListTowatch().subscribe({
      next: (res) => {
        console.log(res);
        this.movie = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeMove(id: string) {
    this.moviesService.removeMove(id).subscribe({
      next: (res) => {
        this.getMoveListToWatch();
        this.toastr.error('You have remove movie from wish to watch', 'Movie');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
