import {AuthorizationStatus} from '../const';
import {Film} from './film';
import {User} from './user';
import {FilmReview} from './film-review';

export type State = {
  currentGenre: string;
  promoFilm: Film;
  films: Film[];
  currentFilm: Film;
  similarFilms: Film[];
  comments: FilmReview[];
  limitCounter: number;
  filmNumberLimit: number;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  user: User,
}
