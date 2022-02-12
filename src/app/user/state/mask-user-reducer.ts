import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";
import * as UserActions from './user.actions'
export interface UserState {
  user: User,
  maskUserName: boolean
}

const initialState: UserState = {
 user:null,
 maskUserName: false
}

// selector
const getmaskUserNameState = createFeatureSelector<UserState>('user');

export const getMaskUserName =  createSelector(
  getmaskUserNameState,
  state => state.maskUserName
)

export const maskUserReducer = createReducer<UserState>(
  initialState,
  on(UserActions.maskUserName, state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    }
  })
);
