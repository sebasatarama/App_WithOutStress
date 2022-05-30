import { AddFriendComponent } from './Components/add-friend/add-friend.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsListComponent } from './Components/friends-list/friends-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users/friends/:username', component: FriendsListComponent },
  { path: 'users/addFriend', component: AddFriendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
