import {
  ActionType,
  ChangeFilmNumberLimit,
  ChangeGenreAction,
  ChangeLimitCounter,
  GetFilmsAction,
  ResetFilmNumberLimit
} from '../types/action';
//import films from '../mocks/films';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilms = (): GetFilmsAction => ({
  type: ActionType.GetFilms,
  payload: films,
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
