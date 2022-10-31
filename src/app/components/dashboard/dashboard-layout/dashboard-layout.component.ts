import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(private userService :UserService,private router: Router) { }

  ngOnInit(): void {
    
  }

  logout(){
    if(this.userService.logout()){
      this.router.navigate(['/sign-in']);
    }
  }

}

