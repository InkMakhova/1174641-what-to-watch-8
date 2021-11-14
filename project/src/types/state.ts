import {AuthorizationStatus} from '../const';
import {Film} from './film';
import {User} from './user';
import {FilmReview} from './film-review';
import {RootState} from '../store/root-reducer';

export type FilmsData = {
  films: Film[];
  promoFilm: Film;
  currentFilm: Film;
  similarFilms: Film[];
  comments: FilmReview[];
}

export type CatalogProcess = {
  currentGenre: string;
  limitCounter: number;
  filmNumberLimit: number;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User;
  isDataLoaded: boolean;
  favoriteFilms: Film[];
}

export type State = RootState;
