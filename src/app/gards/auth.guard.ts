import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = this.authService.getToken()
    console.log(token)
    
    if(token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]))
      if(tokenDecode.isAdmin && !this.tokenExpired(tokenDecode.exp)) return true
    }

    this.router.navigate(['/login'])
    return false
  }

  private tokenExpired(tokenExp: number): boolean {
    return Math.floor(new Date().getTime() / 1000) >= tokenExp
  }
  // return true
  
  
}
