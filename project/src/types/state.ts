import {Film} from './film';

export type State = {
  currentGenre: string;
  films: Film[];
  limitCounter: number;
  filmNumberLimit: number;
}
