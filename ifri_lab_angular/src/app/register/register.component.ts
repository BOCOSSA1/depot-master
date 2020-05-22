import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { User } from '../models/user';

import { NzMessageService } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private host:string = "http://localhost:8080";
  user:any;
  mode:number=0;
  errorMessage:string;
  typeSelected: Selection ;
  loading: boolean = false;
  
    constructor(private fb: FormBuilder, 
                private authService: AuthenticationService,
                private router: Router, 
                private http: HttpClient,
                private message: NzMessageService) {
    }
  
  
    ngOnInit(): void{
     // this.initForm();
    }
    /*
    onRegister(user){
      if ( this.typeSelected == 'etudiant' ) {
        return this.http.post(this.host+"/etudiant", user);
      }else{
        return this.http.post(this.host+"/users", user); 
      }
      
   }*/
   
    onRegister(user){
  

console.log(user.typePersonne)
if(user.typePersonne=="parent" || user.typePersonne=="autorite"){
  this.authService.register(user)
  .subscribe(data=>{
    this.user=data;
    this.mode=1;
    if (this.mode==1) {
      this.router.navigateByUrl('/login');
      setTimeout(() => {
        alert('Conenecté avec succès !');
        //this.loading = false;
      }, 1000);
    }
    
  },err=>{
    this.errorMessage = err.error.message;
    this.mode = 0;
  }
  )
}
if(user.typePersonne=="etudiant"){
  this.authService.etudiant(user)
  .subscribe(data=>{
    this.user = data;
    this.mode=1;
    if (this.mode == 1) {
      this.router.navigateByUrl('/login');
    }
  },err=>{
    this.errorMessage = err.error.message;
    this.mode=0;
  }
  )
    }

  }

    onRegisterEtudiant(user){
      this.authService.etudiant(user)
      .subscribe(data=>{
        this.user = data;
        this.mode=1;
        if (this.mode == 1) {
          this.router.navigateByUrl('/login');
        }
      },err=>{
        this.errorMessage = err.error.message;
        this.mode=0;
      }
      )
    }
  }
