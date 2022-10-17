import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService,
    private http: HttpClient) { }



  // new user registration
  public registration(user: Object): Observable<any> {
    return this.apiService.request('post', '/signup', user)
  }


  // login after registration
  public login(user: Object): Observable<any> {
    return this.apiService.request('post', '/signin', user)
  }
}
