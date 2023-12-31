import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string | undefined = '';
  
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.username = this.authService.getUsername();
  }
}
