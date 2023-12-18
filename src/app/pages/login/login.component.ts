import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';
  isLoggedIn: boolean = false;
  private authSubscription: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }



  login(username: string, password: string): void {
    //console.log('Logging in with:', username, password);
    if (this.authService.login(username, password)) {
      this.router.navigate(['/dashboard']);
    } else {
      //console.log('Login failed');
      this.errorMessage = 'Invalid username or password';
    }
  }
}