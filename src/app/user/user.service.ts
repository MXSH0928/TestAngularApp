import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  // Root -vs- Component injector
  providedIn: 'root'
})
export class UserService {

  endpoint = 'https://randomuser.me/api/?seed=MyTestWebApi&results=10';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<UserApiResponse>(this.endpoint).pipe(map(res => res.results));
  }

  getUser(id: string): Observable<User> {
    return this.http.get<UserApiResponse>(`${this.endpoint}&id=${id}`).pipe(map(res => res.results[0]));
  }
}
