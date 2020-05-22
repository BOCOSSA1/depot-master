import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors, NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  private host: string = 'http://localhost:8080';
  create: any;
  mode: number = 0;
  errorMessage: string;
  typeSelected: Selection;

  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private http: HttpClient,
    private message: NzMessageService) {
  }


  ngOnInit(): void {
    // this.initForm();
  }


  onCreate(create) {


    console.log(create.typePersonne)
    console.log(create.role)
    if (create.typePersonne == "etudiant" && create.role == "user") {
      this.authService.createEtudiant(create)
        .subscribe(data => {
          this.create = data;
          this.mode = 1;
          if (this.mode == 1) {
            this.createMessage('success', 'Compte créé avec succès !');

            this.router.navigateByUrl('/menu/user-list');
          }
        }, err => {
          this.errorMessage = err.error.message;
          this.mode = 0;
        }
        )
    }
    else {
      this.authService.createUser(create)
        .subscribe(data => {
          this.create = data;
          this.mode = 1;

          if (this.mode == 1) {

            this.createMessage('success', 'Compte créé avec succès !');
            this.router.navigateByUrl('/menu/user-list');
          }


        }, err => {
          this.errorMessage = err.error.message;
          this.mode = 0;
        }
        );
    }

  }

  createMessage(type: string, sms: string): void {
    this.message.create(type, sms);
  }
  onResetForm() {

  }
}
