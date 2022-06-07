import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieWishToWatchComponent } from './movie-wish-to-watch/movie-wish-to-watch.component';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)},
  {path: 'wishToWatch', component: MovieWishToWatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
