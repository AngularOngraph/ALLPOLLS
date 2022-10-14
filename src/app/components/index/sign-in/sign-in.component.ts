import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
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
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }
  get controls() { return this.loginAdmin.controls; }

  onSubmit(){
    console.log(this.loginAdmin.value);
    this.router.navigate(['dashboard']);
  }
}
