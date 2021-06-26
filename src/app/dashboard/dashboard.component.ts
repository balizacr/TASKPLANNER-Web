import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

// FRIENDS

    public listUsuarios = [];
    public months = ["January","February","March","April","May","June","July","August","September","October","Novermber","December"];
    public values = [23,16,45,18,60,20,21,72,23,24,25,26];
    
    public boardNames = ["Personal","Communal","Academic"]
    public boardTypeQuantity = [59,45,23];
    public people = [ {"first":"Daniel", "last":"García", "mail":"danni900g@gmail.com" },
                      {"first":"Elias", "last":"Arce", "mail":"elias@gmail.com" },
                      {"first":"David", "last":"Azofeifa", "mail":"david@gmail.com" },
                      {"first":"Javier", "last":"Perez", "mail":"jav@gmail.com" },
                      {"first":"Melisa", "last":"Cordoba", "mail":"mel@gmail.com" } ]


   // BAR CHART 


  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
                        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Quantity' }
                      ];
                    
  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June'];
                    
  public chartColors: Array<any> = [
                        {
                          backgroundColor: [
                            'rgba(8, 156, 101, 0.2)',
                            'rgba(0, 168, 120, 0.2)',
                            'rgba(30, 226, 143, 0.2)',
                            'rgba(43, 173, 219, 0.2)',
                            'rgba(23, 75, 177, 0.2)',
                            'rgba(0, 168, 120, 0.2)'
                          ],
                          borderColor: [
                            'rgba(8, 156, 101, 1)',
                            'rgba(0, 168, 120, 1)',
                            'rgba(30, 226, 143, 1)',
                            'rgba(43, 173, 219, 1)',
                            'rgba(23, 75, 177, 1)',
                            'rgba(0, 168, 120, 1)'
                          ],
                          borderWidth: 2,
                        }
                      ];
                    
                      public chartOptions: any = {
                        responsive: true
                      };
                      public chartClicked(e: any): void { }
                      public chartHovered(e: any): void { }


  // PIE CHART

  public list = [40, 21, 70]
  
  public total = this.calculateTotal();    
  public chartType1: string = 'pie';

  public chartDatasets1: Array<any> = [
    { data: this.list, label: 'Dataset' }
  ];

  public chartLabels1: Array<any> = ['Personal', 'Communal', 'Academic'];

  public chartColors1: Array<any> = [
    {
      backgroundColor: ['#089C65', '#1EE28F', '#174BB1'],
      hoverBackgroundColor: ['#2BADDB', '#2BADDB', '#2BADDB'],
      borderWidth: 2,
    }
  ];

  public chartOptions1: any = {
    responsive: true
  };
  public chartClicked1(e: any): void { }
  public chartHovered1(e: any): void { }




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

  calculateTotal(){
    var number = 0;
    for(let i = 0; i< this.list.length; i++){
        number += this.list[i];
    }

    return number;

  }


  

}




