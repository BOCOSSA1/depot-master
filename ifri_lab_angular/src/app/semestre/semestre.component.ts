import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Semestre } from '../models/semestre';
import { SemestreService } from '../services/semestre.service';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent implements OnInit {

  validateForm: FormGroup;
  semestre: Semestre;

  constructor(private formBuilder: FormBuilder,
    private semService: SemestreService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.validateForm = this.formBuilder.group({
      semId:[null, Validators.required],
      semLibelle:['', Validators.required]
    })
  }

  onsave(){
    
    const formData = this.validateForm.value;
    console.log( "loooooooool"+formData);
    this.semestre = new Semestre(formData.semId, formData.semLibelle);

this.semService.saveSemestre(this.semestre).subscribe(
  (data: Semestre)=>{
    console.log("log de data"+data);
  });

  this.initForm();
  }
}