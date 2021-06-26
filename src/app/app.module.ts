import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConnectionServiceModule} from 'ng-connection-service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardsComponent } from './boards/boards.component';
import { FriendsComponent } from './Friends/friends.component';
import { BoardComponent } from './board/board.component';
import { SignupComponent } from './signup/signup.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BoardsComponent,
    FriendsComponent,
    BoardComponent,
    SignupComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ConnectionServiceModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'boards', component: BoardsComponent},
      { path: 'friends', component: FriendsComponent},
      { path: 'board', component: BoardComponent},
      { path: 'signup', component: SignupComponent},
  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



