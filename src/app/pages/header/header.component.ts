import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit , OnDestroy{
  isNavbarActive = false;
  isLoggedIn = false;
  username: string | undefined;
  private authSubscription: Subscription | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('HeaderComponent ngOnInit called');
    this.authSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if (this.isLoggedIn) {
        this.username = this.authService.getUsername();
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

}
