import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginAdmin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }
  get controls() { return this.loginAdmin.controls; }

  onSubmit() {
    if (this.loginAdmin.valid) {
      this.userService.login(this.loginAdmin.value).subscribe((res) => {
        if (res.success) {
          this.router.navigate(['dashboard']);
        } else {
          console.log(res.msg);
        }
      },
        (err) => {
          console.log(err);
        }
      )
    }
  }



}
