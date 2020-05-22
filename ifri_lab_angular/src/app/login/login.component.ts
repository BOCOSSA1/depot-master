import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mode:number = 0;
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
     /* this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();*/
    }
  }

  constructor(private fb: FormBuilder, private authService: AuthenticationService,
    private router: Router) {}

  ngOnInit(): void {
   
  }
  onLogin(user){
    console.log(user);
    this.authService.login(user)
    .subscribe(resp=> {
      let jwt=resp.headers.get('Authorization');
      //console.log(resp.headers.get('Authorization'));
      this.authService.saveToken(jwt, user);
      this.router.navigateByUrl('/menu');
    },
    err=>{
      this.mode=1;
    })
  }
  onRegister(){
    this.router.navigateByUrl("/register");
  }

}
