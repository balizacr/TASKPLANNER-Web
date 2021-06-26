import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
    public listUsuarios = [];
    
    public people = [ {"first":"Daniel", "last":"García", "mail":"danni900g@gmail.com" },
                      {"first":"Elias", "last":"Arce", "mail":"elias@gmail.com" },
                      {"first":"David", "last":"Azofeifa", "mail":"david@gmail.com" },
                      {"first":"Javier", "last":"Perez", "mail":"jav@gmail.com" },
                      {"first":"Melisa", "last":"Cordoba", "mail":"mel@gmail.com" } ]


  constructor(
    private router: Router,
  ) { }
  

  optionsSelect: Array<any>;
  ngOnInit() {


    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
    ];

    

  }
  model: any = {};

  gotoDashboard(){
    this.router.navigate(['/dashboard']);
  }

  gotoBoards(){
    this.router.navigate(['/boards']);
  }

  gotoFriends(){
    this.router.navigate(['/friends']);
  }

  gotoLogin(){
    this.router.navigate(['/']);
  }


  

}




