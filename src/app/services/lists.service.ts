import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List } from '../components/models/list.model';
import { Movie } from '../components/models/movie.model';


const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJiN2ZlYmFkYzFjZTE0OWIzZTllMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY5NTYzMywiZXhwIjoxNjQwOTU0ODMzfQ.myLLkTNu4K37FeKNEDj3MJZyQm5XWZnReX5KK_QiDXo'
  }),
  params: new HttpParams().set('type', 'series')
}

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  apiUrl: string = environment.apiUrl + 'lists';
  movieApi: string = environment.apiUrl + 'movies/find';
  movieRandApi: string = environment.apiUrl + 'movies/random';
  type!: string;
  genre!: string;

  constructor(private Http: HttpClient) { }


  getListRandomWithQuery(): Observable<List[]> {
    // return this.Http.get<List[]>(`${this.apiUrl}${this.type ? "?type=" + this.type : ""}&${this.genre ? "&genre=" + this.genre : ""}`)
    return this.Http.get<List[]>(`${this.apiUrl}`, {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJiN2ZlYmFkYzFjZTE0OWIzZTllMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY5NTYzMywiZXhwIjoxNjQwOTU0ODMzfQ.myLLkTNu4K37FeKNEDj3MJZyQm5XWZnReX5KK_QiDXo'
      }),
    })
    
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.Http.get<Movie>(`${this.movieApi}/${movieId}`, {headers: new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJiN2ZlYmFkYzFjZTE0OWIzZTllMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY5NTYzMywiZXhwIjoxNjQwOTU0ODMzfQ.myLLkTNu4K37FeKNEDj3MJZyQm5XWZnReX5KK_QiDXo'
    })})
  }

  getRandomContent(type: string): Observable<Movie[]> {
    return this.Http.get<Movie[]>(`${this.movieRandApi}?type=${type}`, {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJiN2ZlYmFkYzFjZTE0OWIzZTllMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY5NTYzMywiZXhwIjoxNjQwOTU0ODMzfQ.myLLkTNu4K37FeKNEDj3MJZyQm5XWZnReX5KK_QiDXo'
      }),
    })
  }
}
