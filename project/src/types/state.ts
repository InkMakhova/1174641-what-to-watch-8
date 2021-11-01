import {AuthorizationStatus} from '../const';

export type State = {
  currentGenre: string;
  films: [];
  limitCounter: number;
  filmNumberLimit: number;
  authorizationStatus: AuthorizationStatus,
}
