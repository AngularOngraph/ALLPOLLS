import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RegistrationPayload, loginPayload } from "../interface/user"
import { apiResponse } from '../interface/poll';
import { requestHandler } from './helper/requestHandler';
import { tokenHandler } from './helper/tokenHandler';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private requestHandler: requestHandler,
    private tokenhandler:tokenHandler,
    ) { }



  // new user registration
  public registration(user: RegistrationPayload): Observable<apiResponse> {
    return this.requestHandler.request('post', 'signup', user)
  }


  // login after registration
  public login(user: loginPayload): Observable<apiResponse> {
    return this.requestHandler.request('post', 'signin', user)
  }

  public logout(): Boolean {
    this.tokenhandler.removeToken();
    return true;
  }
}
