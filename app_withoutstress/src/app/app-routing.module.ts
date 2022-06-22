import { RegisterComponent } from './Components/register/register.component';
import { BuyWsPremiumComponent } from './Components/buy-ws-premium/buy-ws-premium.component';
import { AddFriendComponent } from './Components/add-friend/add-friend.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsListComponent } from './Components/friends-list/friends-list.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users/friends/:username', component: FriendsListComponent },
  { path: 'users/addFriend', component: AddFriendComponent },
  { path: 'users/:username/buyPremium', component: BuyWsPremiumComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
