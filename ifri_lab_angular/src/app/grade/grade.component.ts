import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Grade } from '../models/grade';
import { GradeService } from '../services/grade.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  validateForm: FormGroup;
  grade: Grade;

  constructor(private formBuilder: FormBuilder,
    private gradeService: GradeService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.validateForm = this.formBuilder.group({
      gradeId:[null, Validators.required],
      gradeLibelle:['', Validators.required]
    })
  }

  onsave(){
    
    const formData = this.validateForm.value;
    console.log( "loooooooool"+formData);
    this.grade = new Grade(formData.gradeId, formData.gradeLibelle);

this.gradeService.saveGrade(this.grade).subscribe(
  (data: Grade)=>{
    console.log(data);
  });

  this.initForm();
  }

}
