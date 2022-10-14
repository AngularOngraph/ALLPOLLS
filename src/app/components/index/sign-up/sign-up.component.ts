import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  adminRegister: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router) {    
    this.adminRegister = this.formBuilder.group({
    fullname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,4}$')]),
    email: new FormControl('', [Validators.required,
    Validators.pattern('^[a-zA-Z0-9]{2,}(?:[._]{1}[a-zA-Z0-9]+){0,2}@[a-zA-Z]{2,20}[.]{1}[a-zA-Z]{2,4}(?:[.]{1}[a-zA-Z]+){0,1}$')]),
    password: new FormControl('', [Validators.required,
    Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$#?!@%^&*-]).{8,24}$')]),
    confirmPassword: new FormControl('', [Validators.required])
  },
    ); }

  ngOnInit(): void {
  }
  get registerControls() { return this.adminRegister.controls; }

  onSubmit(){
    console.log(this.adminRegister.value);
    this.router.navigate(['sign-in']);
  }
}
