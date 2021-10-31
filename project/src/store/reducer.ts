import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import films from '../mocks/films';

const initialFilms = films.slice();

const initialState = {
  currentGenre: 'All genres',
  films: initialFilms,
} as State;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.GetFilms:
      return {...state, films: action.payload};
    default:
      return state;
  }
};

export {reducer};
