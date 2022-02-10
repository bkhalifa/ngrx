import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";

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
  on(createAction('[User] Mask User Name'), state => {
    console.log('Mask User Name state:'+ JSON.stringify(state))
    return {
      ...state,
      maskUserName: !state.maskUserName
    }
  })
);
