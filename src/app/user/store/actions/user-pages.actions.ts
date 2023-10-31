import { createAction, props } from "@ngrx/store";

export const getUsersList = createAction(
    "[User] Get Users List"
)
export const togglePhoneNumber = createAction(
    "[User] Toggle Phone Number"
);

export const selectUser = createAction(
    "[User] Select User By ID From Users List",
    props<{ userID: number}>()
)