import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { WishToWatch } from '../models/wishToWatch.model';
// import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieLikeService {
  private MOVIELIKE_ROOT_URL = 'http://localhost:3000/wishToWatch';

  constructor(private http: HttpClient) {}

  addWishToWatchMovie(movie: WishToWatch){
    const data = {
      id: movie.id,
      img: movie.image,
      name: movie.name
    };
    return this.http.post<any>(`${this.MOVIELIKE_ROOT_URL}`,data);
  }

  getWishListTowatch(){
    return this.http.get<any>(`${this.MOVIELIKE_ROOT_URL}`);
  }

  removeMove(id: string){
    return this.http.delete<any>(`${this.MOVIELIKE_ROOT_URL}/`+id);
  }
}
