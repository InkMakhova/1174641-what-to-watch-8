import {Actions, ActionType} from '../types/action';
import {State} from '../types/state';
import {AuthorizationStatus, FILMS_NUMBER_STEP} from '../const';

const initialState = {
  currentGenre: 'All genres',
  films: [],
  limitCounter: 1,
  filmNumberLimit: FILMS_NUMBER_STEP,
} as State;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LoadFilms:
      return <State>{...state, films: action.payload};
    case ActionType.ChangeGenre:
      return <State>{...state, currentGenre: action.payload};
    case ActionType.ChangeLimitCounter:
      return <State>{...state, limitCounter: state.limitCounter + 1};
    case ActionType.ChangeFilmNumberLimit:
      return <State>{...state, filmNumberLimit: state.filmNumberLimit * state.limitCounter};
    case ActionType.ResetFilmNumberLimit:
      return <State>{...state, limitCounter: initialState.limitCounter, filmNumberLimit: initialState.filmNumberLimit};
    case ActionType.RequireAuthorization:
      return <State>{...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return <State>{...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};
