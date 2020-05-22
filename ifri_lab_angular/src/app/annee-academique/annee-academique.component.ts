import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnneeAcademique } from '../models/annee-academique';
import { AnneeAcademiqueService } from '../services/annee-academique.service';

@Component({
  selector: 'app-annee-academique',
  templateUrl: './annee-academique.component.html',
  styleUrls: ['./annee-academique.component.css']
})
export class AnneeAcademiqueComponent implements OnInit {

  validateForm: FormGroup;
  annee: AnneeAcademique;

  constructor(private formBuilder: FormBuilder,
    private anneeService: AnneeAcademiqueService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.validateForm = this.formBuilder.group({
      anneeEncours:[2000, Validators.required],
      anneeScolaire: ['', Validators.required]
    })
  }

  onsave(){
    
    const formData = this.validateForm.value;
    console.log( "loooooooool"+formData);
    this.annee = new AnneeAcademique(null, formData.anneeEncours, formData.anneeScolaire);

this.anneeService.saveAnnee(this.annee).subscribe(
  (data: AnneeAcademique)=>{
    console.log("log de data"+data);
  });

  this.initForm();
  }

}
