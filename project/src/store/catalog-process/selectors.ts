import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getCurrentGenre = (state: State): string => state[NameSpace.catalog].currentGenre;
export const getLimitCounter = (state: State): number => state[NameSpace.catalog].limitCounter;
export const getFilmNumberLimit = (state: State): number => state[NameSpace.catalog].filmNumberLimit;
