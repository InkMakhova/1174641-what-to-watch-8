import {AuthorizationStatus} from '../const';
import {Film} from './film';
import {User} from './user';
import {FilmReview} from './film-review';

// export type State = {
//   currentGenre: string;
//   promoFilm: Film;
//   films: Film[];
//   currentFilm: Film;
//   similarFilms: Film[];
//   comments: FilmReview[];
//   limitCounter: number;
//   filmNumberLimit: number;
//   authorizationStatus: AuthorizationStatus,
//   isDataLoaded: boolean,
//   user: User,
// }

export type FilmsData = {
  films: Film[];
  promoFilm: Film;
  isDataLoaded: boolean,
}

export type FilmListProcess = {
  currentGenre: string;
  limitCounter: number;
  filmNumberLimit: number;
}

export type FilmInfoProcess = {
  currentFilm: Film;
  similarFilms: Film[];
  comments: FilmReview[];
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User;
}
