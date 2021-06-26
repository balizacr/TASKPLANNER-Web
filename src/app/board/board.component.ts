import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
    public listUsuarios = [];
    public months = ["January","February","March","April","May","June","July","August","September","October","Novermber","December"];
    public values = [23,16,45,18,60,20,21,72,23,24,25,26];
    public total = 50;
    public boardNames = ["Personal","Communal","Academic"]
    public boardTypeQuantity = [59,45,23];
    public people = [ {"firts":"Daniel", "last":"García", "mail":"danni900g@gmail.com" },
                      {"firts":"Elias", "last":"Arce", "mail":"elias@gmail.com" },
                      {"firts":"David", "last":"Azofeifa", "mail":"david@gmail.com" },
                      {"firts":"Javier", "last":"Perez", "mail":"jav@gmail.com" },
                      {"firts":"Melisa", "last":"Cordoba", "mail":"mel@gmail.com" } ]


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




