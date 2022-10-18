import { Component, OnInit } from '@angular/core';
import { PollsService } from 'src/app/services/polls.service';

@Component({
  selector: 'app-view-polls',
  templateUrl: './view-polls.component.html',
  styleUrls: ['./view-polls.component.css']
})
export class ViewPollsComponent implements OnInit {
public pollData:any = [];
  constructor(private pollService : PollsService) { }

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
