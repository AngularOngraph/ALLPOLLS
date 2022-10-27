import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ToastrService } from 'ngx-toastr';
import { PollsService } from 'src/app/services/polls.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-polls-voting',
  templateUrl: './polls-voting.component.html',
  styleUrls: ['./polls-voting.component.css']
})
export class PollsVotingComponent implements OnInit {
  public domain = environment.clientUrl;
  public pollId: string = '';
  public pollData: Object = {};
  public totalVotes: Number = 0;
  public pollQuestion: string = '';
  public pollStatus: boolean = true;
  constructor(private activatedRoute: ActivatedRoute,
    private pollService: PollsService, private toastr: ToastrService,) { }
  // Pie charts
  public pieChartLabels: Label[] = [];
  public pieChartData: any = [
    [],
  ];
  public pieChartType: ChartType = 'pie';
  public pieChartColors: any[] =
    [
      {
        backgroundColor: ['#ED7014', '#8D4004', '#B25600', '#EC9706', '#D16002', '#FF6347', 'C34723', 'D97448', 'FBCEB1', 'B06500'],
        borderColor: '#2c2d30',
        borderWidth: 0,
      }
    ];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.pollId = params.id;
        this.getUniquePoll(params.id);
      }
    });
  }

  getUniquePoll(id: any) {
    this.pollService.getPollById(id).subscribe((res) => {
      if (res.success) {
        this.pollData = res.response
      }
      this.pieChartLabels = [];
      this.pieChartData = [];
      this.pollQuestion = res.response.question;
      this.pollStatus = res.response.status;
      res.response.options.forEach((el: any) => {
        this.pieChartLabels.push(el.value);
        this.totalVotes += el.count;
      });
      res.response.options.forEach((el: any) => this.pieChartData.push(this.getVotingPercentage(this.totalVotes, el.count)));
    }, (err) => {
      console.log(err);
    })
  }

  getVotingPercentage(total: any, vote: any) {

    return Math.round(Number(vote) / Number(total) * 100)
  }

  copyUrl() {
    const elem = document.createElement("input")
    var inputc = document.body.appendChild(elem);
    inputc.value = this.domain + '/submit-poll/' + this.pollId
    inputc.focus();
    inputc.select();
    document.execCommand("copy");
    document.body.removeChild(inputc);
    this.toastr.success("Url Copied!");
  }

  closePoll() {
    this.pollService.changePollStatus(this.pollId).subscribe((res) => {
      if (res.success) {
        this.toastr.success(res.msg);
        this.pollStatus = false;
      }
    })
  }
}
