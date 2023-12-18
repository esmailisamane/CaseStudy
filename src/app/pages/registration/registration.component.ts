// registration.component.ts

import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator.bind(this)]]
    });
  }

  passwordValidator(control: AbstractControl) {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const isValid = regex.test(control.value);
    //console.log('Password validation:', isValid);
    return isValid ? null : { invalidPassword: true };
  }
  

  onSubmit() {
    if (this.registrationForm.valid) {
      const user: User = this.registrationForm.value as User;

      this.userService.register(user).subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registrationForm.get(fieldName);
  
    if (!field) {
      return false;
    }
  
    return field.invalid && (field.dirty || field.touched);
  }
}
