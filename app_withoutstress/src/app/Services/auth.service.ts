import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authAPI: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.authAPI + 'auth/signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(name: string, surname: string, username: string): Observable<any> {
    return this.http.post(
      this.authAPI + 'auth/signup',
      {
        name,
        surname,
        username,
      },
      httpOptions
    );
  }
}
