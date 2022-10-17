import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PollsService } from 'src/app/services/polls.service';

@Component({
  selector: 'app-add-polls',
  templateUrl: './add-polls.component.html',
  styleUrls: ['./add-polls.component.css']
})
export class AddPollsComponent implements OnInit {
  public pollForm: FormGroup;
  public optionsArray = [this.newChoice()];

  constructor(private fb: FormBuilder, private pollService: PollsService) {
    this.pollForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      options: this.fb.array(this.optionsArray),
    });
  }

  ngOnInit(): void {
  }
  questionsOptions(): FormArray {
    return this.pollForm.get('options') as FormArray
  }

  newChoice(): FormGroup {
    return this.fb.group({
      choices: [''],
    })
  }

  addOptions() {
    this.questionsOptions().push(this.newChoice());
  }

  removeOptions(i: number) {
    this.questionsOptions().removeAt(i);
  }

  savePoll() {
    this.pollService.saveNewPoll(this.pollForm.value).subscribe((res) => {
      if (res.success) {
        console.log(res);
      }
    }, (err) => {
      console.log(err);

    })
  }
}
