import { Component, OnInit } from '@angular/core';
import { Ue } from '../models/ue';
import { HttpErrorResponse } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SemGrade } from '../models/sem-grade';
import { AnneeAcademique } from '../models/annee-academique';
import { UeService } from '../services/ue.service';
import { AnneeAcademiqueService } from '../services/annee-academique.service';
import { NzMessageService } from 'ng-zorro-antd';
import { SemGradeService } from '../services/sem-grade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ue-update',
  templateUrl: './ue-update.component.html',
  styleUrls: ['./ue-update.component.css']
})
export class UeUpdateComponent implements OnInit {

  ues: Array<Ue> = [];
  ueList: Array<Ue> = [];
  annees: Array<AnneeAcademique> = [];
  semGrades: Array<SemGrade> = [];
  keyParam: number;
  ueSubmit: Ue = null;
  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private ueService: UeService,
    private semGradeService: SemGradeService,
    private anneeService: AnneeAcademiqueService,
    private message: NzMessageService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }



  ngOnInit() {
    this.makeForm();
    this.anneeService.getAnnee().subscribe(
      (data: Array<AnneeAcademique>) => {
        this.annees = data;
        console.log('<<<<<<<<' + this.annees);
      }
    );

    this.semGradeService.getSemGrade().subscribe(
      (data: Array<SemGrade>) => {
        this.semGrades = data;
        console.log(this.semGrades);
      }
    );
    this.keyParam = this.activateRoute.snapshot.params['ueId'];
    console.log(this.keyParam);
    this.ueService.listUeById(this.keyParam).subscribe(
      (data: Ue) => {

        this.ueSubmit = data;

        this.makeForm();
      }
    );
  }
  makeForm(): void {
    this.validateForm = this.fb.group({
      ueId: [(this.ueSubmit != null) ? this.ueSubmit.ueId : null, [Validators.required]],
      ueCode: [(this.ueSubmit != null) ? this.ueSubmit.ueCode : null, [Validators.required]],
      ueLibelle: [(this.ueSubmit != null) ? this.ueSubmit.ueLibelle : null, [Validators.required]],
      moyenneValidation: [(this.ueSubmit != null) ? this.ueSubmit.moyenneValidation : null, [Validators.required]],
      anneeAcademique: [(this.ueSubmit != null) ? this.ueSubmit.anneeAcademique : null, [Validators.required]],
      sem_Grade: [(this.ueSubmit != null) ? this.ueSubmit.sem_Grade : null, [Validators.required]],

    });
  }

  onsave(): void {

    const formData = this.validateForm.value;
    console.log('donnée du form');
    console.log(formData);

    this.ueSubmit.ueId = formData.ueId;
    this.ueSubmit.ueCode = formData.ueCode;
    this.ueSubmit.ueLibelle = formData.ueLibelle;
    this.ueSubmit.moyenneValidation = formData.moyenneValidation;
    this.ueSubmit.anneeAcademique = formData.anneeAcademique;
    this.ueSubmit.sem_Grade = formData.sem_Grade;

    this.ueService.saveUe(this.ueSubmit).subscribe(
      (ec: Ue) => {
        console.log('donnée après subscribe');
        console.log(ec);
        this.createMessage('success', 'ue modifier avec succès');
        this.validateForm.reset();
      },
      (error: HttpErrorResponse) => {
        this.createMessage('error', 'erreur d\'enregistrement');

      }
    );

    this.router.navigateByUrl('/menu/save/ue-list');
  }
  createMessage(type: string, sms: string): void {
    this.message.create(type, sms);
  }
  onResetForm() {
      this.makeForm();
  }
}

