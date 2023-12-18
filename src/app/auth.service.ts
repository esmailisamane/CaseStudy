import { Injectable } from '@angular/core';
import { UserLogin } from './models/user/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  
  private currentUser: UserLogin | undefined;

  private users: UserLogin[] = [
    { username: 'admin', password: 'admin' },
    { username: 'user2', password: 'pass2' }
  ];

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
  
    if (user) {
      this.currentUser = user;
      this.isLoggedInSubject.next(true);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.currentUser = undefined;
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  getUsername(): string | undefined {
    return this.currentUser?.username;
  }
}
