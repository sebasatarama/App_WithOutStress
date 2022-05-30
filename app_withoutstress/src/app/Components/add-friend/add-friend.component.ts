import { UserService } from './../../Services/user.service';
import { User } from './../../Models/user.model';
import { Component, OnInit } from '@angular/core';
import { FriendRequest } from 'src/app/Models/friend-request.model';


@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  friend: FriendRequest={
    username: '',
    hashcode: 0,
    friend_username:'',
  } 

  submitted = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveFriend(): void {
    const data = {
      username: this.friend.username,
      hashcode: this.friend.hashcode,
      friend_username: this.friend.friend_username,
    };

    this.userService.AddFriend(data).subscribe(
      {
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.log(e),
      }
    )
  }
}
