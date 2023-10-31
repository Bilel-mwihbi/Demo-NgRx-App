import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user-service.service";
import { UserApiActions, UserPagesActions } from "../index"
import { catchError, map, mergeMap, of } from "rxjs";


@Injectable()
export class UserEffects { 

    constructor(
        private actions$: Actions,
        private userService: UserService
    ){}

    loadUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserPagesActions.getUsersList),
            mergeMap( () => this.userService.getUsersList()
                .pipe(
                    map((users) => UserApiActions.getUsersListSuccess({ userList: users})),
                    catchError(error => of(UserApiActions.getUsersListFailure({ error })))

                )
            )
        )
    })

}