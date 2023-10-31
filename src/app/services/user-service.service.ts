import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsersList() {
    return this.http.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
  }

}
