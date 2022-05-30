import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsListComponent } from './Components/friends-list/friends-list.component';
import { FormsModule } from '@angular/forms';
import { AddFriendComponent } from './Components/add-friend/add-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    AddFriendComponent,
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
