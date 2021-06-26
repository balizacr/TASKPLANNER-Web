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


  constructor(
      //private apiusuarioRol: ApiusuariorolService,
      private router: Router,

  ) { }

  ngOnInit(): void {
  }

  validation(){

    
      if(this.account==""){
          alert("Debe ingresar un ROL");
      }else{
        this.router.navigate(['/dashboard']);
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
  


}

