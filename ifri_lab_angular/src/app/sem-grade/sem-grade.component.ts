import { Component, OnInit } from '@angular/core';
import { SemGrade } from '../models/sem-grade';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SemGradeService } from '../services/sem-grade.service';
import { Grade } from '../models/grade';
import { Semestre } from '../models/semestre';
import { GradeService } from '../services/grade.service';
import { SemestreService } from '../services/semestre.service';
import { Specialite } from '../models/specialite';
import { SpecialiteService } from '../services/specialite.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { SemGradePk } from '../models/semGradePk';

@Component({
  selector: 'app-sem-grade',
  templateUrl: './sem-grade.component.html',
  styleUrls: ['./sem-grade.component.css']
})
export class SemGradeComponent implements OnInit {

  validateForm: FormGroup;
  semGrade: SemGrade;
  grades: Array<Grade> = [];
  grade: Grade;
  semestre: Semestre;
  specialite: string;
  semestres: Array<Semestre> = [];
  specialites: Array<Specialite> = [];

  constructor(private formBuilder: FormBuilder,
    private gradeService: GradeService,
    private semService: SemestreService,
    private message: NzMessageService,
    private specialiteService: SpecialiteService,
    private semGradeService: SemGradeService) { }

  ngOnInit() {
    this.initForm();

    this.gradeService.getGrade().subscribe(
      (data: Array<Grade>)=>{
        this.grades=data;
        console.log(this.grades)
      }
    );
    
    this.semService.getSemestre().subscribe(
      (data: Array<Semestre>)=>{
        this.semestres = data;
      }
    );

    this.specialiteService.getSpecialite().subscribe(
      (data: Array<Specialite>)=>{
        this.specialites = data;
      }
    );
    
  }



  initForm(){
    this.validateForm = this.formBuilder.group({
      
      gradeId:[null, [Validators.required]],
      semId:[null, [Validators.required]],
      specialite:['', Validators.required]
    })
  }

  onsave(){
    
    const formData = this.validateForm.value;
    console.log(formData);
    //console.log(formData.gradeId.gradeId);
    console.log(formData.semId.semId);
   // console.log(formData.specialite.specialite);

    this.semGrade = new SemGrade(null, formData.specialite.specialite, formData.gradeId, formData.semId);
    //this.semGrade = new SemGrade(formData.gradeId.gradeId,formData.semId.semId,formData.specialite.specialite);

    console.log(this.semGrade);

this.semGradeService.saveSemGrade(this.semGrade).subscribe(
  (data: SemGrade)=>{
    //console.log(data);
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

}
