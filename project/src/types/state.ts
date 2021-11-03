import {AuthorizationStatus} from '../const';
import {Film} from './film';

export type State = {
  currentGenre: string;
  promoFilm: Film;
  films: Film[];
  limitCounter: number;
  filmNumberLimit: number;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}
