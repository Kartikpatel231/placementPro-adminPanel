import { Injectable } from '@angular/core';
import { UserData } from './userData'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataserService {
  public users:UserData;
  isAuthenticated =false;
  getUser(): UserData{
      return this.users;
  }
  constructor( private httpClient:HttpClient) { }
  private baseUrl='http://172.172.233.120:80';
  Register(userData: UserData): Observable<string> {
    const url = `${this.baseUrl}/api/v3/auth/admin/${userData.userName}/${userData.password}`;
    return this.httpClient.post(url, null,{ responseType: 'text' });
  }
  
  login() {
    // Set isAuthenticated to true upon successful login
    this.isAuthenticated = true;
  }

  logout() {
    // Set isAuthenticated to false upon logout
    this.isAuthenticated = false;
  }
  // Check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
