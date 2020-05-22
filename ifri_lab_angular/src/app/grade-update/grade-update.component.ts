import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GradeService } from '../services/grade.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../models/grade';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-grade-update',
  templateUrl: './grade-update.component.html',
  styleUrls: ['./grade-update.component.css']
})
export class GradeUpdateComponent implements OnInit {
  gradeList: Array<Grade> = [];
  keyParam: number;
  gradeSubmit: Grade = null;
  validateForm: FormGroup;
  grade: Grade;
  constructor(private fb: FormBuilder,
    private gradeService: GradeService,
    private message: NzMessageService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.makeForm();
    this.keyParam = this.activateRoute.snapshot.params['gradeId'];
    console.log(this.keyParam);
    this.gradeService.listGradeById(this.keyParam).subscribe(
      (data: Grade) => {

        this.gradeSubmit = data;
        console.log(this.gradeSubmit);
        console.log(this.gradeSubmit.gradeId);
        console.log(this.gradeSubmit.gradeLibelle);
        
        this.makeForm();
      }
    );
  }
  makeForm(): void{
    this.validateForm = this.fb.group({
      gradeId: [(this.gradeSubmit !=null)? this.gradeSubmit.gradeId: null, [Validators.required]],
      gradeLibelle: [(this.gradeSubmit !=null)? this.gradeSubmit.gradeLibelle: null, [Validators.required]]

    });
  }

  onsave(): void {
  
    const formData = this.validateForm.value;
    console.log("donnée du form")
    console.log(formData)

      this.gradeSubmit.gradeId = formData.gradeId;
      this.gradeSubmit.gradeLibelle = formData.gradeLibelle;

    this.gradeService.saveGrade(this.gradeSubmit).subscribe(
      (grade: Grade) => {
        console.log("donnée après subscribe");
        console.log(grade);
        this.createMessage('success', 'grade modifier avec succès');
        this.validateForm.reset();
      },
      (error: HttpErrorResponse) => {
        this.createMessage('error', 'erreur d\'enregistrement');

      }
    )
  
  this.router.navigateByUrl('/menu/save/grade-list');
}
createMessage(type: string, sms: string): void {
  this.message.create(type, sms);
}
}