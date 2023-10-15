import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserDataserService } from './user-dataser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: UserDataserService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirect to the login page
      return false;
    }
  }
}
