import { IUser } from 'src/app/services/user-service.service';
import { UserState } from './../user.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HttpErrorResponse } from '@angular/common/http';

export const selectUserFeatureState = createFeatureSelector<UserState>('users');


export const showPhoneNumberSelector = createSelector(selectUserFeatureState, (state: UserState) : boolean => state.showPhoneNumber )


export const getListOfUsersSelector = createSelector(selectUserFeatureState, (state: UserState) : IUser[] => state.userList )

export const getListOfUsersSelectorFailure = createSelector(selectUserFeatureState, (state: UserState) : HttpErrorResponse | null => state.error )

export const getUserByIdSelector = createSelector(selectUserFeatureState, (state: UserState) : IUser => state.currentUser )

