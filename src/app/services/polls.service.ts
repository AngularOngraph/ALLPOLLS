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
    public getPolls(search: string,limit: number, page: number): Observable<any> {
      return this.apiService.request('get','polls/poll-list?search='
      + search + '&limit=' + limit + '&page=' + page);
    }

 // update poll status
    public updatePollStaus(status:Boolean): Observable<any> {
      return this.apiService.request('post', 'updatePollStaus',{status});
    }

 // delete poll by id
    public deletePolls(id:string): Observable<any>{
      return this.apiService.request('post', 'deletePoll',{id});
    }

 // save new Poll
    public saveNewPoll(payload:Object): Observable<any> {
      return this.apiService.request('post','polls/create-poll',{payload});
    }

// get poll by id
  public getPollById(pollId:string): Observable<any>{
    return this.apiService.request('get', 'polls/get-poll/'+pollId);
  }

// submit poll
  public submitPoll(payload:Object): Observable<any>{
    return this.apiService.request('post', 'polls/submit-poll/',{payload});
  }
// search polls
  public searchPolls(searchQuery: string): Observable<any>{
    return this.apiService.request('get', 'polls/search/'+searchQuery);
  }

// change status
  public changePollStatus(pollId: string): Observable<any>{
    return this.apiService.request('get', 'polls/poll-status/'+pollId);
  }

}
