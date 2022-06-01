import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../Services/user.service';
import { User } from 'src/app/Models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-ws-premium',
  templateUrl: './buy-ws-premium.component.html',
  styleUrls: ['./buy-ws-premium.component.css']
})
export class BuyWsPremiumComponent implements OnInit {
  user!: User;

  constructor(private userservice: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setPremium(this.route.snapshot.params['username']);
  }

  setPremium(value: boolean): void {
    this.userservice.SetPremium(value).subscribe(
      {
        next: (data) => {
          this.user.premium = data;
        },
        error: (e) => console.log(e)
      }
    );
  }

}
