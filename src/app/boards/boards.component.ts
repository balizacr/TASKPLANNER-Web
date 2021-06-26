import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  @ViewChild('frame') public newboardModal: ModalDirective;
  
    public listUsuarios = [];

    
    public boards = [ {"name":"Board1", "type":"Personal" },
                      {"name":"Board2", "type":"Communal" },
                      {"name":"Board3", "type":"Academic" },
                      ]

    public people = [ {"mail":"danni900g@gmail.com" },
                      {"mail":"elias@gmail.com" },
                      {"mail":"david@gmail.com" },
                      {"mail":"jav@gmail.com" },
                      {"mail":"mel@gmail.com" } ]

    public options = ["Personal","Communal","Academic"]



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

  gotoBoard(){
    this.router.navigate(['/board']);
  }

  newBoard(){

    this.newboardModal.show();

  }


  

}




