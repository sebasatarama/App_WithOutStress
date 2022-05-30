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
  currentFriend: User = {};
  CurrentIndex=-1;
  username='';
  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveFriends(this.route.snapshot.params['username']);
  }

  SetActiveFriend(friend:User, index: number):void{
    this.currentFriend=friend;
    this.CurrentIndex=index;
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
