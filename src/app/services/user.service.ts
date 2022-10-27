import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { RegistrationPayload,loginPayload } from "../interface/user"
import { apiResponse } from '../interface/poll';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService,
    private http: HttpClient) { }



  // new user registration
  public registration(user: RegistrationPayload): Observable<apiResponse> {
    return this.apiService.request('post', 'signup', user)
  }


  // login after registration
  public login(user: loginPayload): Observable<apiResponse> {
    return this.apiService.request('post', 'signin', user)
  }
}
