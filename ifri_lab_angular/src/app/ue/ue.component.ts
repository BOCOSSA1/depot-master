import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SemGrade } from '../models/sem-grade';
import { Ue } from '../models/ue';
import { AnneeAcademique } from '../models/annee-academique';
import { UeService } from '../services/ue.service';
import { SpecialiteService } from '../services/specialite.service';
import { AnneeAcademiqueService } from '../services/annee-academique.service';
import { NzMessageService } from 'ng-zorro-antd';
import { SemGradeService } from '../services/sem-grade.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SemGradePk } from './../models/semGradePk';

@Component({
  selector: 'app-ue',
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.css']
})
export class UeComponent implements OnInit {

  validateForm: FormGroup;
  ue: Ue;
  specialite: string;
  sem_Grade: SemGrade;
  //pk: SemGradePk;

  annees: Array<AnneeAcademique> = [];
  semGrades: Array<SemGrade> = [];

  constructor(private formBuilder: FormBuilder,
    private ueService: UeService,
    private anneeService: AnneeAcademiqueService,
    private message: NzMessageService,
    private semGradeService: SemGradeService) { }

  ngOnInit() {
    this.initForm();

    this.anneeService.getAnnee().subscribe(
      (data: Array<AnneeAcademique>) => {
        this.annees = data;
        console.log('<<<<<<<<' + this.annees)
      }
    );

    this.semGradeService.getSemGrade().subscribe(
      (data: Array<SemGrade>) => {
        this.semGrades = data;
        console.log(this.semGrades);
      }
    );

  }



  initForm() {
    this.validateForm = this.formBuilder.group({
      //ueId:[null, [Validators.required]],
      ueCode: [null, [Validators.required]],
      ueLibelle: ['', Validators.required],
      moyenneValidation: [null, [Validators.required]],
      anneeAcademique: ['', [Validators.required]],
      sem_Grade: ['', [Validators.required]],

    })
  }

  onsave() {

    const formData = this.validateForm.value;
    console.log(formData);
    /**
     *
     *
     * this.pk = new SemGradePk(formData.sem_Grade.gradeId, formData.sem_Grade.semId);
        console.log(this.pk)
     *
     */


    //this.sem_Grade = new SemGrade(null, formData.sem_Grade.specialite, );

    // new AnneeAcademique(formData.anneeAcademique.anneeId, formData.anneeAcademique.anneeEncours)
    this.ue = new Ue(null, formData.ueCode, formData.ueLibelle, formData.moyenneValidation,
      formData.anneeAcademique, formData.sem_Grade);


    //console.log(this.ue);

    this.ueService.saveUe(this.ue).subscribe(
      (data: Ue) => {
        this.createMessage('success', 'Enregistrement effetué avec succès!');
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        this.createMessage('error', 'erreur d\'enregistrement');
      }
    )

      ;

    this.initForm();
  }

  createMessage(type: string, sms: string): void {
    this.message.create(type, sms);
  }
  onResetForm() {

  }
}
