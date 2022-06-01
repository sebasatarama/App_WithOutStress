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
  user!: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.registerUser(this.route.snapshot.params['']);
  }

  registerUser(value: User): void {
    this.userService.Register(value).subscribe(
      {
        next: (data) => {
          this.user = data;
        },
        error: (e) => console.log(e)
      }
    );
  }
}

export class RegisterForm {
  myRegForm = new FormControl('');
}