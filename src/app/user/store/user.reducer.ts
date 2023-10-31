import { createReducer, on } from "@ngrx/store";
import { UserApiActions, UserPagesActions } from "./index"
import { InitialUserState, UserState } from "./user.state";



export const userReducer  = createReducer(
    InitialUserState,
    on(UserApiActions.getUsersListSuccess, (state, action): UserState => { 
        return {
            ...state,
            userList : action.userList
        }
    }),
    on(UserApiActions.getUsersListFailure, (state, action): UserState => { 
        return {
            ...state,
            userList : [],
            error: action.error
        }
    }),
    on(UserPagesActions.togglePhoneNumber, (state): UserState => {
        return {
            ...state,
            showPhoneNumber: !state.showPhoneNumber
        }
    }),
    on(UserPagesActions.selectUser, (state, action): UserState => {
        return {
            ...state,
            currentUser: state.userList.find(((user) => user.id == action.userID)) || InitialUserState.currentUser
        }
    })
)