import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isShowDiv = false;  

  constructor(private apiService :ApiService) { }

  ngOnInit(): void {
    
  }

  logout(){
    this.apiService.logout();
  }

  


}
