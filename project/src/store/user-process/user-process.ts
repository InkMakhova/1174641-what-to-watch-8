import {Actions, ActionType} from '../../types/action';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus, initialUser} from '../../const';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: initialUser,
  isDataLoaded: false,
};

const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization: {
      const authorizationStatus = action.payload;
      return {
        ...state,
        authorizationStatus,
        isDataLoaded: true,
      };
    }
    case ActionType.RequireLogout: {
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    }
    case ActionType.ChangeUser: {
      const user = action.payload;
      return {
        ...state,
        user,
      };
    }
    default:
      return state;
  }
};

export {userProcess};
