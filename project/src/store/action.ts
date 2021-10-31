import {ActionType, ChangeGenreAction, GetFilmsAction} from '../types/action';
import films from '../mocks/films';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilms = (): GetFilmsAction => ({
  type: ActionType.GetFilms,
  payload: films,
});
