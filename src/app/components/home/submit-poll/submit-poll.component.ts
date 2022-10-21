import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollsService } from 'src/app/services/polls.service';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';
 // Initialize the agent at application startup.
 const fpPromise = import('@fingerprintjs/fingerprintjs')
 .then(FingerprintJS => FingerprintJS.load())

@Component({
  selector: 'app-submit-poll',
  templateUrl: './submit-poll.component.html',
  styleUrls: ['./submit-poll.component.css']
})
export class SubmitPollComponent implements OnInit {
  public activeOpt1 :boolean = false;
  public activeOpt2 :boolean = false;
  public activeOpt3 :boolean = false;
  public activeOpt4 :boolean = false;
  public activeOpt :string = '';
  public pollData :any = {};
  public pollSubmitForm :FormGroup;
  private visitorId :string = '';
  public pollActive :boolean = true;
  public userSubmitPoll :boolean = false;


  constructor(private pollService: PollsService,
     private route: ActivatedRoute,
     private toastr: ToastrService,
     private fb: FormBuilder) { 
      this.pollSubmitForm = this.fb.group({
        userId: [''],
        pollId: ['', [Validators.required]],
        selectOptId: ['', [Validators.required]],
        visitorId: ['', [Validators.required]]
      });
    }

  ngOnInit(): void {
    // Get the visitor identifier when you need it.
    fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      this.visitorId = result.visitorId
      this.pollSubmitForm.patchValue({
        // visitorId: this.visitorId
      });
      this.getPollData();
    })
  }
  getPollData(){
    this.route.params.subscribe(params => {
      this.getPollDetails(params.pollId);
      this.pollSubmitForm.patchValue({
       pollId: params.pollId
      });
    })
  }
  selectedIndex(index:string ){
    const elemts = document.querySelectorAll('.option');
    elemts.forEach((option)=>{
      option.classList.remove('active');
    });
    const elem = document.getElementById(index);
    elem?.classList.add('active');

    this.pollSubmitForm.patchValue({
      selectOptId: index
    });
  }

  getPollDetails(pollId:string){
    this.pollService.getPollById(pollId).subscribe((res) => {
      if (res.success) {
        if(!res.response.visitors.includes(this.visitorId)){
          this.pollData = res.response;
          this.pollActive = res.response.status;
          //console.log(res);
        }else{
          this.userSubmitPoll = true;
          //console.log("User already submit poll");
        }
      }
    }, (err) => {
      console.log(err);
    })
  }

  onSubmitPoll(){
    this.pollService.submitPoll(this.pollSubmitForm.value).subscribe((res) => {
      if (res.success) {
        this.toastr.success(res.msg);
      }
    }, (err) => {
      console.log(err);
    })
  }
}
