import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollsService } from 'src/app/services/polls.service';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';

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
  public pollData: any = {};
  public pollSubmitForm: FormGroup;

  constructor(private pollService: PollsService,
     private route: ActivatedRoute,
     private toastr: ToastrService,
     private fb: FormBuilder) { 
      this.pollSubmitForm = this.fb.group({
        userId: [''],
        pollId: [''],
        selectOptId: ['', [Validators.required]]
      });
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.getPollDetails(params.pollId);
       this.pollSubmitForm.patchValue({
        pollId: params.pollId
      });
    })
  }
  selectedIndex(index:string ){
    const elemts = document.querySelectorAll('.option');
    console.log(elemts);
    elemts.forEach((option)=>{
      option.classList.remove('active');
    });
    const elem = document.getElementById(index);
    elem?.classList.add('active');

    this.pollSubmitForm.patchValue({
      selectOptId: index
    });

    // this.activeOpt1= false;
    // this.activeOpt2= false;
    // this.activeOpt3= false;
    // this.activeOpt4= false;

    // if(index == 1){
    //   this.activeOpt1 = true;
    // }else if(index == 2){
    //   this.activeOpt2 = true;
    // }else if(index == 3){
    //   this.activeOpt3 = true;
    // }else if(index == 4){
    //   this.activeOpt4 = true;
    // }
  }

  getPollDetails(pollId:string){
    this.pollService.getPollById(pollId).subscribe((res) => {
      if (res.success) {
        this.pollData = res.response;
        //console.log(res);
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
