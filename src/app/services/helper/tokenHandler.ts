import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class tokenHandler {
    private token: any;

    public setToken(token: string): void {
        localStorage.setItem("sdasd923hd9dwe", token);
        this.token = token;
    }

    /*
      save token into localStorage as a item with specific key
   */
    public saveToken(token: string): void {
        this.setToken(token);
        this.token = token;
    }

    /*
  get token into localStorage as a item with specific key
   */
    public getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem("sdasd923hd9dwe");
        }
        return this.token;
    }
    /*
     remove  token into localStorage 
   */
    public removeToken(): void {
        this.token = "";
        localStorage.removeItem("sdasd923hd9dwe");
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
}