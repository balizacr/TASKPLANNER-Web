import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ApiusuariorolService } from '../services/apiusuariorol.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public listUsuario = [];
    model: any = {};
    public account = "1";
    public url: string = "http://localhost:4242";


  constructor(
      //private apiusuarioRol: ApiusuariorolService,
      private router: Router,
      private _http: HttpClient,

  ) { }

  ngOnInit(): void {
  }

  validation(){

    
      if(this.account==""){
          alert("Debe ingresar un ROL");
      }else{

        //this.router.navigate(['/dashboard']);

        console.log(this.model.name);
        console.log(this.model.password)
        
        let jsonEntry = {"email":this.model.name, "pass":this.model.password};

        var response = this._http.post(this.url + "/login",jsonEntry).subscribe(
            (val) => {
                console.log("POST call successful value returned in body", 
                            val);
            },
    );
    

        

        //this.router.navigate(['/lobby', this.model.name]);
      }
     /*  else if (this.account  == "1"){
          
          this.apiusuarioRol.getUser(this.model.name,"1").subscribe(reply => {
          console.log(reply);
          this.listUsuario = reply.data;
          if(this,this.listUsuario[0] == undefined){
              alert("Usuario o contrasena incorrectas")
              //cambiarlo por un modal
          }else{
              if(this.listUsuario[0].idUsuarioNavigation.nombreUsuario == this.model.name && this.listUsuario[0].idUsuarioNavigation.contraseña == this.model.password){
                      this.router.navigate(['/lobby', this.model.name]);
              }
          }
      });

      }else{
          this.apiusuarioRol.getUser(this.model.name,"2").subscribe(reply => {
          console.log(reply);
          this.listUsuario = reply.data;
          if(this,this.listUsuario[0] == undefined){
              alert("Usuario o contrasena incorrectas")
              //cambiarlo por un modal
          }else{
              if(this.listUsuario[0].idUsuarioNavigation.nombreUsuario == this.model.name && this.listUsuario[0].idUsuarioNavigation.contraseña == this.model.password){
                      this.router.navigate(['/organizer', this.model.name]);
              }
          }
      });
      } */
  }
  
  
  functionStudent(){
    this.account = "1";
}

  functionTeacher(){
      this.account = "2";
  }

  functionAdministrator(){
      this.account = "3";
  }

  gotoSignup(){
    this.router.navigate(['/signup']);

  }
  


}

