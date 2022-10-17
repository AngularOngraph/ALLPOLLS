import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private apiService: ApiService,
    private http: HttpClient) { }

 // get All Polls List 
    public getPolls(): Observable<any> {
      return this.apiService.request('get', '/getPolls')
    }

 // update poll status
    public updatePollStaus(status:Boolean): Observable<any> {
      return this.apiService.request('post', '/updatePollStaus',{status});
    }

 // delete poll by id
    public deletePolls(id:string): Observable<any>{
      return this.apiService.request('post', '/deletePoll',{id});
    }

 // save new Poll
    public saveNewPoll(payload:Object): Observable<any> {
      return this.apiService.request('post', '/create-poll',{payload});
    }


}
