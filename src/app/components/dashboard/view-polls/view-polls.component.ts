import { Component, OnInit } from '@angular/core';
import { PollsService } from 'src/app/services/polls.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-polls',
  templateUrl: './view-polls.component.html',
  styleUrls: ['./view-polls.component.css']
})
export class ViewPollsComponent implements OnInit {
public pollData:any = [];
  constructor(private pollService : PollsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPollList();
  }

  getPollList(){
  this.pollService.getPolls().subscribe((res)=>{
    if(res.success){
      this.pollData = res.response;
    }
  })
  }


}
