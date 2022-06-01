import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  friends?: User[];
  name='';
  surname='';
  username='';
  rank_id='';
  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveFriends(this.route.snapshot.params['username']);
  }

  retrieveFriends(username:string):void{
    this.userService.getFriendsByUsername(username).subscribe(
      {
        next: (data)=>{
          this.friends=data;
        },
        error: (e)=>console.log(e)
      }
    );
  }

}
