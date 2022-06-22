import { AuthService } from './../../Services/auth.service';
import { User } from 'src/app/Models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    surname: null,
    username: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  user!: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    const  { name, surname, username } = this.form;

    this.authService.register(name, surname, username).subscribe({
      next: (data) => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (e) => {
        this.errorMessage = e.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

export class RegisterForm {
  myRegForm = new FormControl('');
}