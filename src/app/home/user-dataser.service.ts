import { Injectable } from '@angular/core';
import { UserData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class UserDataserService {
  public users:UserData[]=[];
  getUser(): UserData[]{
      return this.users;
  }
  Register(users:UserData){
    this.users.push(users);
  }
  constructor() { }
}
