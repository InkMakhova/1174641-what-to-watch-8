import {
  ActionType,
  ChangeFilmNumberLimit,
  ChangeGenreAction,
  ChangeLimitCounter,
  LoadFilms,
  ResetFilmNumberLimit
} from '../types/action';
import {Film} from '../types/film';

export const loadFilms = (films: Film[]): LoadFilms => ({
  type: ActionType.LoadFilms,
  payload: films,
});

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const changeLimitCounter = (): ChangeLimitCounter => ({
  type: ActionType.ChangeLimitCounter,
});

export const changeFilmNumberLimit = (): ChangeFilmNumberLimit => ({
  type: ActionType.ChangeFilmNumberLimit,
});

export const resetFilmNumberLimit = (): ResetFilmNumberLimit => ({
  type: ActionType.ResetFilmNumberLimit,
});
