import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private baseUrl: string=environment.baseUrl;
  constructor(private http:HttpClient) { }

  getFriendsByUsername(username:any) : Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/friends/${username}`);
  }

  AddFriend(data:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/addFriend`,data);
  }
}
