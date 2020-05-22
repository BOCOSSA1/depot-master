import { Component, OnInit } from '@angular/core';
import { Specialite } from '../models/specialite';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpecialiteService } from '../services/specialite.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SemGrade } from '../models/sem-grade';

@Component({
  selector: 'app-specialite-update',
  templateUrl: './specialite-update.component.html',
  styleUrls: ['./specialite-update.component.css']
})
export class SpecialiteUpdateComponent implements OnInit {

  specialiteList: Array<Specialite> = [];
  keyParam: string;
  speSubmit: Specialite = null;
  validateForm: FormGroup;
  specialite: Specialite;

  constructor(private fb: FormBuilder,
    private speService: SpecialiteService,
    private message: NzMessageService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.makeForm();
    this.keyParam = this.activateRoute.snapshot.params['code'];
    console.log(this.keyParam);
    this.speService.listSpecialteByCode(this.keyParam).subscribe(
      (data: Specialite) => {

        this.speSubmit = data;
        console.log(this.speSubmit);
        console.log(this.speSubmit.code);
        console.log(this.speSubmit.specialite);
        
        this.makeForm();
      }
    );
  }
  makeForm(): void{
    this.validateForm = this.fb.group({
      code: [(this.speSubmit !=null)? this.speSubmit.code: null, [Validators.required]],
      specialite: [(this.speSubmit !=null)? this.speSubmit.specialite: null, [Validators.required]],
      

    });
  }

  onsave(): void {
  
    const formData = this.validateForm.value;
    console.log("donnée du form")
    console.log(formData)

      this.speSubmit.code = formData.code;
      this.speSubmit.specialite = formData.specialite;

    this.speService.saveSpecialite(this.speSubmit).subscribe(
      (specialite: Specialite) => {
        console.log("donnée après subscribe");
        console.log(specialite);
        this.createMessage('success', 'spécialité modifier avec succès');
        this.validateForm.reset();
      },
      (error: HttpErrorResponse) => {
        this.createMessage('error', 'erreur d\'enregistrement');

      }
    )
  
  this.router.navigateByUrl('/menu/save/specialite-list');
}
createMessage(type: string, sms: string): void {
  this.message.create(type, sms);
}

}
