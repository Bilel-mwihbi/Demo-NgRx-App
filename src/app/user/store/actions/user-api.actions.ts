import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/services/user-service.service";


export const getUsersListSuccess = createAction(
    "[User API] Get Users List Success",
    props<{ userList: IUser[]}>()
)
export const getUsersListFailure = createAction(
    "[User API] Get Users List Failure",
    props<{ error: HttpErrorResponse}>()
)