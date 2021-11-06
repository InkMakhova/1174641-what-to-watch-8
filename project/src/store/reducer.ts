import {Actions, ActionType} from '../types/action';
import {State} from '../types/state';
import {AuthorizationStatus, FILMS_NUMBER_STEP} from '../const';

const initialPromoFilm = {
  id: 0,
  name:	'',
  posterImage:	'',
  previewImage:	'',
  backgroundImage:	'',
  backgroundColor:	'',
  description: '',
  rating:	0,
  scoresCount:	0,
  director:	'',
  starring: [],
  runTime:	0,
  genre:	'',
  released:	0,
  isFavorite:	false,
  videoLink:	'',
  previewVideoLink:	'',
};

export const initialUser = {
  id: 0,
  email: '',
  name: '',
  avatarUrl: '',
  token: '',
};

const initialState = {
  currentGenre: 'All genres',
  promoFilm: initialPromoFilm,
  films: [],
  currentFilm: initialPromoFilm,
  limitCounter: 1,
  filmNumberLimit: FILMS_NUMBER_STEP,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: initialUser,
} as State;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LoadPromoFilm:
      return {...state, promoFilm: action.payload} as State;
    case ActionType.LoadFilms:
      return {...state, films: action.payload} as State;
    case ActionType.LoadFilm:
      return {...state, currentFilm: action.payload} as State;
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload} as State;
    case ActionType.ChangeLimitCounter:
      return {...state, limitCounter: state.limitCounter + 1} as State;
    case ActionType.ChangeFilmNumberLimit:
      return {...state, filmNumberLimit: state.filmNumberLimit * state.limitCounter} as State;
    case ActionType.ResetFilmNumberLimit:
      return {...state, limitCounter: initialState.limitCounter, filmNumberLimit: initialState.filmNumberLimit} as State;
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      } as State;
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth} as State;
    case ActionType.ChangeUser:
      return {...state, user: action.payload} as State;
    default:
      return state;
  }
};

export {reducer};
