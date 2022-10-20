import { Component, OnInit } from '@angular/core';
import { PollsService } from 'src/app/services/polls.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-polls',
  templateUrl: './view-polls.component.html',
  styleUrls: ['./view-polls.component.css']
})
export class ViewPollsComponent implements OnInit {
  search:string=''
  limit: any = 5;
  page: any = 1;
  currentPage: number = 1;
  collectionSize: number = 0;
  public pollData: any = [];
  constructor(private pollService: PollsService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getPollList();
  }

  getPollList() {
    this.pollService.getPolls(this.search, this.limit, this.page).subscribe((res) => {
      if (res.success) {
        this.pollData = res.response;
        this.collectionSize = res.count;
      }
    })
  }
  onShow() {
    let options = {};
    let search = {};

  }

}
