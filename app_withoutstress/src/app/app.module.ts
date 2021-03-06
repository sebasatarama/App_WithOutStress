import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsListComponent } from './Components/friends-list/friends-list.component';
import { FormsModule } from '@angular/forms';
import { AddFriendComponent } from './Components/add-friend/add-friend.component';
import { BuyWsPremiumComponent } from './Components/buy-ws-premium/buy-ws-premium.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    AddFriendComponent,
    BuyWsPremiumComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
