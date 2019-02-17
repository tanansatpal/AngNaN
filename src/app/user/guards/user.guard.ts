import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@shared/services';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean {
    const url: string = route.path;
    if (this.checkLogin(url)) {
      return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
  }

  checkLogin(url: string): boolean {
    if (this.auth.getAuthToken()) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.auth.returnUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['auth', 'login']).then();
    return false;
  }
}
