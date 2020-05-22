import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Grade } from '../models/grade';
import { GradeService } from '../services/grade.service';
import { SemGrade } from '../models/sem-grade';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { Semestre } from '../models/semestre';
import { SemestreService } from '../services/semestre.service';
import { SpecialiteService } from '../services/specialite.service';
import { Specialite } from '../models/specialite';
import { SemGradePk } from '../models/semGradePk';
import { SemGradeService } from '../services/sem-grade.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sem-grade-up',
  templateUrl: './sem-grade-up.component.html',
  styleUrls: ['./sem-grade-up.component.css']
})
export class SemGradeUpComponent implements OnInit {

  grades: Array<Grade> = [];
  semestres: Array<Semestre> = [];
  specialites: Array<Specialite> = [];
  keyParam: number;
  semGradeSubmit: SemGrade = null;
  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private gradeService: GradeService,
    private message: NzMessageService,
    private semService: SemestreService,
    private semGradeService: SemGradeService,
    private specialiteService: SpecialiteService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.makeForm();
    this.keyParam = this.activateRoute.snapshot.params['id'];
    console.log(this.keyParam);
    this.semGradeService.listSemGradeById(this.keyParam).subscribe(
      (data: SemGrade) => {

        this.semGradeSubmit = data;
        
        this.makeForm();
      }
    );
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
  makeForm(): void{
    this.validateForm = this.fb.group({
      gradeId: [(this.semGradeSubmit !=null)? this.semGradeSubmit.grade: null, [Validators.required]],
      semId: [(this.semGradeSubmit !=null)? this.semGradeSubmit.semestre: null, [Validators.required]],
      specialite: [(this.semGradeSubmit !=null)? this.semGradeSubmit.specialite: null, [Validators.required]]

    });
  }

  onsave(): void {
  
    const formData = this.validateForm.value;
    console.log("donnée du form")
    console.log(formData)

      //this.semGradeSubmit.pk.gradeId = formData.pk.gradeId;
      //this.semGradeSubmit.pk.semId = formData.pk.semId ;
      //this.semGradeSubmit.specialite = formData.specialite;
      

    this.semGradeService.saveSemGrade(this.semGradeSubmit).subscribe(
      (semGrade: SemGrade) => {
        console.log("donnée après subscribe");
        console.log(semGrade);
        this.createMessage('success', 'année modifier avec succès');
        this.validateForm.reset();
      },
      (error: HttpErrorResponse) => {
        this.createMessage('error', 'erreur d\'enregistrement');

      }
    )
  
  this.router.navigateByUrl('/menu/save/sem-grade-list');
}
createMessage(type: string, sms: string): void {
  this.message.create(type, sms);
}


}
