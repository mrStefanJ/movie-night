import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieLikeService {
  private MOVIELIKE_ROOT_URL = 'http://localhost:3000/movieLike';

  constructor(private http: HttpClient) {}

  // display wishlist
  getWishlist() {
    return this.http.get(`${this.MOVIELIKE_ROOT_URL}`)
      .pipe(map((res: any) => {
        let movieIds: any[] = [];

        res.array.forEach((item: { id: any; }) => {
           movieIds.push(item.id); 
        });

        return movieIds;
      }))
  }
  // add wishlist
  addWishlist(movieId: any) {
    return this.http.post(`${this.MOVIELIKE_ROOT_URL}`, {id: movieId });
  }
  // remove wishlist
  removeFromWishlist(movieId: any) {
    return this.http.delete(`${this.MOVIELIKE_ROOT_URL}/${movieId}`);
  }
}
