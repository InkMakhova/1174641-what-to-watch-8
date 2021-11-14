import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {User} from '../../types/user';
import {AuthorizationStatus} from '../../const';
import {Film} from '../../types/film';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getDataLoadedStatus = (state: State): boolean => state[NameSpace.user].isDataLoaded;
export const getUser = (state: State): User => state[NameSpace.user].user;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.user].favoriteFilms;
