import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"
import { Router } from '@angular/router';
/* import { ApiusuariorolService } from '../services/apiusuariorol.service';
import { UsurioRol } from '../Models/UsuarioRol'
import { reply } from '../Models/reply' */



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    validatingForm: FormGroup;
    public listUsuarios = [];


  constructor(
    private router: Router,
    // private apiusuarioRol: ApiusuariorolService
  ) { }

  optionsSelect: Array<any>;
  ngOnInit() {


    this.validatingForm = new FormGroup({

      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalLast: new FormControl('', Validators.required),
      signupFormModalSchoolId: new FormControl('', Validators.required),
      signupFormModalSchoolGmail: new FormControl('', Validators.required),
      signupFormModalPassword: new FormControl('', Validators.required),
      
    });


    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
    ];
  }
  model: any = {};

  

  get signupFormModalName() {
    return this.validatingForm.get('signupFormModalName');
  }

  get signupFormModalLast() {
    return this.validatingForm.get('signupFormModalLast');
  }

  get signupFormModalSchoolId() {
    return this.validatingForm.get('signupFormModalSchoolId');
  }

  get signupFormModalSchoolGmail() {
    return this.validatingForm.get('signupFormModalSchoolGmail');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }


  gotoLogin(){
    this.router.navigate(['/']);
  }


}




