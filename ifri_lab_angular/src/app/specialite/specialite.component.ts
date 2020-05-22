import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Specialite } from './../models/specialite';
import { SpecialiteService } from '../services/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {

  validateForm: FormGroup;
  specialite: Specialite;

  constructor(private formBuilder: FormBuilder,
    private specialiteService: SpecialiteService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.validateForm = this.formBuilder.group({
      code:['', Validators.required],
      specialite:['', Validators.required]
    })
  }

  onsave(){
    
    const formData = this.validateForm.value;
    console.log( "loooooooool"+formData);
    this.specialite = new Specialite(formData.code, formData.specialite);

this.specialiteService.saveSpecialite(this.specialite).subscribe(
  (data: Specialite)=>{
    console.log("log de data"+data);
  });

  this.initForm();
  }


}
