import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { tokenHandler } from "./tokenHandler";

@Injectable({
    providedIn: 'root'
  })

export class requestHandler {

    api_url: string = environment.apiEndPoint;

    constructor(private http: HttpClient,
        private tokenhandler: tokenHandler) {
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
                            this.tokenhandler.setToken(user.token);
                        }
                        return user;
                    })
                );
        } else {
            let base;
            if (method === "post") {
                if (
                    type === "registration" ||
                    type === "login"
                ) {
                    base = this.http.post<any>(this.api_url + type, user, {
                        withCredentials: true,
                    });
                } else {
                    base = this.http.post<any>(this.api_url + type, user, {
                        withCredentials: true,
                        headers: { Authorization: `Bearer ${this.tokenhandler.getToken()}` },
                    });
                }
            } else {
                base = this.http.get<any>(this.api_url + type, {
                    headers: { Authorization: `Bearer ${this.tokenhandler.getToken()}` },
                    withCredentials: true,
                    params: paramslist,
                });
            }
            const request = base.pipe(
                map((data: any) => {
                    if (data !== null && data.token) {
                        this.tokenhandler.saveToken(data.token);
                    }
                    return data;
                })
            );

            return request;
        }
    }
}


