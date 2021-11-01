import {Film} from './film';
import {AuthorizationStatus} from '../const';

export type State = {
  currentGenre: string;
  films: Film[];
  limitCounter: number;
  filmNumberLimit: number;
  authorizationStatus: AuthorizationStatus,
}
