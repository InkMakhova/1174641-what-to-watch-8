import {UserProcess} from '../../types/state';
import {AuthorizationStatus, initialUser} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeUser,
  requireAuthorization,
  requireLogout} from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: initialUser,
  isDataLoaded: false,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      const authorizationStatus = action.payload;
      state.authorizationStatus = authorizationStatus;
      state.isDataLoaded = true;
    })
    .addCase(requireLogout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(changeUser, (state, action) => {
      const user = action.payload;
      state.user = user;
    });
});

export {userProcess};
