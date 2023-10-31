import { HttpErrorResponse } from "@angular/common/http";
import { IUser } from "src/app/services/user-service.service"

export interface UserState {
    showPhoneNumber: boolean;
    userList: IUser[];
    currentUser: IUser;
    error: HttpErrorResponse | null ; 

}

// initial user state 
export const InitialUserState: UserState = {
    showPhoneNumber: false,
    userList: [], 
    currentUser: {
        id: -1,
        name: "",
        username: "",
        email: "",
        phone: "",
    },
    error: null
}