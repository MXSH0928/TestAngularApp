import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  // Root -vs- Component injector
  providedIn: 'root'
})
export class UserService {

  endpoint = 'https://randomuser.me/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<UserApiResponse>(`${this.endpoint}?seed=MyTestWebApi&results=10`).pipe(map(res => res.results));
  }

  getUser(id: string): Observable<User> {
    return this.http.get<UserApiResponse>(`${this.endpoint}?seed=MyTestWebApi&results=10`)
    .pipe(map(res => res.results.filter(u => u.id.value === id)))[0];
  }
}
