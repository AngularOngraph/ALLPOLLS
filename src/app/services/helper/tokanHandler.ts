import { Injectable } from "@angular/core";

@Injectable()

export class tokenHandler {
    private token: any;
  
    constructor() { }

    public setToken(token: string): void {
        localStorage.setItem("sdasd923hd9dwe", token);
        this.token = token;
    }

    public getToken(): string {
        if (!this.token) {
          this.token = localStorage.getItem("sdasd923hd9dwe");
        }
        return this.token;
    }

    public removeToken(): void {
        this.token = "";
        localStorage.removeItem("sdasd923hd9dwe");
    }
}