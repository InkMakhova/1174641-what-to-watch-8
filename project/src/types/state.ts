import {AuthorizationStatus} from '../const';
import {Film} from './film';
import {User} from './user';

export type State = {
  currentGenre: string;
  promoFilm: Film;
  films: Film[];
  limitCounter: number;
  filmNumberLimit: number;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  user: User,
}
