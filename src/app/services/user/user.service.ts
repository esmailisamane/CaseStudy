import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = []; 

  constructor() {}

  register(user: User): Observable<any> {
    this.users.push(user);
    console.log('User registered:', JSON.stringify(user));
    return of({ success: true, message: 'User registered successfully' });
  }
}
