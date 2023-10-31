import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from '../services/user-service.service';
import { Store } from '@ngrx/store';
import { UserPagesActions } from "./store/index"
import { getListOfUsersSelector, getListOfUsersSelectorFailure, getUserByIdSelector, showPhoneNumberSelector } from './store/selectors/user.selector';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  constructor(private userService : UserService, private store: Store) {}

  users!: IUser[];

  selectedUser!: IUser ;

  isDisabled!: boolean; 

  // errorMsg$!: Observable<HttpErrorResponse | null>; 
  errorMsg!: string | undefined ; 

  ngOnInit(): void {

    this.store.dispatch(UserPagesActions.getUsersList())
    
    this.store.select(getListOfUsersSelector).subscribe(
      userList =>  this.users = userList
    )
    
    this.store.select(getListOfUsersSelectorFailure).subscribe(
      error => {
          this.errorMsg = error?.message
      }
    )
  
    this.store.select(showPhoneNumberSelector).subscribe(
      
      showPhoneNumber => {
        console.log("current phone number state "+ showPhoneNumber);
        this.isDisabled = showPhoneNumber
      } 
    )  
    
    this.store.select(getUserByIdSelector).subscribe(
      currentUser => this.selectedUser = currentUser
    )

    
  }

  onToggleButton() {
    this.store.dispatch(UserPagesActions.togglePhoneNumber())
  }

  onSelectUser(id: number) {
    this.store.dispatch(UserPagesActions.selectUser({userID: id}))
  }

  
}
