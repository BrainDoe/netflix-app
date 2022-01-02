import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../components/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = environment.apiUrl + 'users';

  tokenData: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJiN2ZlYmFkYzFjZTE0OWIzZTllMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY5NTYzMywiZXhwIjoxNjQwOTU0ODMzfQ.myLLkTNu4K37FeKNEDj3MJZyQm5XWZnReX5KK_QiDXo'

  constructor(private router: Router, private http: HttpClient) { }

  login(loginData: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, loginData)
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
    localStorage.setItem('token', this.tokenData);
  }

  getToken() {
    return 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJiN2ZlYmFkYzFjZTE0OWIzZTllMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY5NTYzMywiZXhwIjoxNjQwOTU0ODMzfQ.myLLkTNu4K37FeKNEDj3MJZyQm5XWZnReX5KK_QiDXo'
    // return localStorage.getItem('token')
  }

  // setToken() {
  //   localStorage.setItem('token', this.tokenData);
  // }

  loggedIn(): any {
    if(this.tokenData) {
      const decodedToken = JSON.parse(atob(this.tokenData.split('.')[1]))
      if(decodedToken && !Math.floor(new Date().getTime() / 1000) >= decodedToken.exp) return true
    }
  }

  // private tokenExpired(tokenExp: number): boolean {
    // const tokenDecode = atob(token.split('.')[1])
    // return Math.floor(new Date().getTime() / 1000) >= tokenExp
  // }
}
