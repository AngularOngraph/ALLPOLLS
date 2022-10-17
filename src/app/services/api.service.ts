import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url: string = environment.apiEndPoint;
  private token: any;
  public env: any;

  constructor(private http: HttpClient,
    private router: Router,) {
    this.env = this.getEnv();
  }

  /*
    save token into localStorage as a item with specific key
 */
  private saveToken(token: string): void {
    localStorage.setItem("sdasd923hd9dwe", token);
    localStorage.setItem("abschuendj", "incomplete");
    this.token = token;
  }

  /*
        save env in localstorage
     */
  public saveEnv(val: string): void {
    localStorage.removeItem("env");
    localStorage.setItem("env", val);
    this.env = val;
  }

  /*
        call for fetch env from localStrogae
     */
  public getEnv(): string {
    if (!this.env) {
      this.env = localStorage.getItem("env");
    }
    return this.env;
  }

  /*
        call for fetch token from localStrogae
     */
  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("sdasd923hd9dwe");
    }
    return this.token;
  }

  /*
        fetch user token details
     */
  public getUserDetails() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  /*
        call for check the user session
     */
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }


  public request(
    method: "post" | "get",
    type: string,
    user?: any,
    paramslist?: any
  ) {
    if (type === "login") {
      return this.http
        .post<any>(this.api_url + "users" + type, user, {
          withCredentials: true,
        })
        .pipe(
          map((user) => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem("sdasd923hd9dwe", user.token);
            }

            return user;
          })
        );
    } else {
      let base;
      if (method === "post") {
        if (
          type === "registration" ||
          type === "login" ||
          type === "securityauth"
        ) {
          base = this.http.post<any>(this.api_url + "users" + type, user, {
            withCredentials: true,
          });
        } else {
          base = this.http.post<any>(this.api_url + "users" + type, user, {
            withCredentials: true,
            headers: { Authorization: `Bearer ${this.getToken()}` },
          });
        }
      } else {
        base = this.http.get<any>(this.api_url + "users" + type, {
          headers: { Authorization: `Bearer ${this.getToken()}` },
          withCredentials: true,
          params: paramslist,
        });
      }
      if (type === "login") {
        this.saveEnv("real");
      }
      const request = base.pipe(
        map((data: any) => {
          if (data !== null && data.token) {
            this.saveToken(data.token);
          }
          return data;
        })
      );

      return request;
    }
  }

  public logout(): void {
    this.env = "";
    this.token = "";
    window.localStorage.removeItem("env");
    window.localStorage.removeItem("sdasd923hd9dwe");
    this.router.navigateByUrl("/");
  }

}
