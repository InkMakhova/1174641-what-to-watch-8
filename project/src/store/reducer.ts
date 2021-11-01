import {Actions, ActionType} from '../types/action';
import {State} from '../types/state';
import films from '../mocks/films';
import {FILMS_NUMBER_STEP} from '../const';

const initialFilms = films.slice();

const initialState = {
  currentGenre: 'All genres',
  films: initialFilms,
  limitCounter: 1,
  filmNumberLimit: FILMS_NUMBER_STEP,
} as State;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.GetFilms:
      return {...state, films: action.payload};
    case ActionType.ChangeLimitCounter:
      return {...state, limitCounter: state.limitCounter + 1};
    case ActionType.ChangeFilmNumberLimit:
      return {...state, filmNumberLimit: state.filmNumberLimit * state.limitCounter};
    case ActionType.ResetFilmNumberLimit:
      return {...state, limitCounter: initialState.limitCounter, filmNumberLimit: initialState.filmNumberLimit};
    default:
      return state;
  }
};

export {reducer};
