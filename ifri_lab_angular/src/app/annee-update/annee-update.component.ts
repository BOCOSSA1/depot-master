import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AnneeAcademique } from '../models/annee-academique';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AnneeAcademiqueService } from '../services/annee-academique.service';

@Component({
  selector: 'app-annee-update',
  templateUrl: './annee-update.component.html',
  styleUrls: ['./annee-update.component.css']
})
export class AnneeUpdateComponent implements OnInit {

  anneeList: Array<AnneeAcademique> = [];
  keyParam: number;
  anneeSubmit: AnneeAcademique = null;
  validateForm: FormGroup;
  annee: AnneeAcademique;
  constructor(private fb: FormBuilder,
    private anneeService: AnneeAcademiqueService,
    private message: NzMessageService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.makeForm();
    this.keyParam = this.activateRoute.snapshot.params['anneeId'];
    console.log(this.keyParam);
    this.anneeService.listAnneeById(this.keyParam).subscribe(
      (data: AnneeAcademique) => {

        this.anneeSubmit = data;
        console.log(this.anneeSubmit);
        console.log(this.anneeSubmit.anneeId);
        console.log(this.anneeSubmit.anneeEncours);
        
        this.makeForm();
      }
    );
  }
  makeForm(): void{
    this.validateForm = this.fb.group({
      anneeId: [(this.anneeSubmit !=null)? this.anneeSubmit.anneeId: null, [Validators.required]],
      anneeEncours: [(this.anneeSubmit !=null)? this.anneeSubmit.anneeEncours: null, [Validators.required]],
      anneeScolaire: [(this.anneeSubmit !=null)? this.anneeSubmit.anneeScolaire: null, [Validators.required]]

    });
  }

  onsave(): void {
  
    const formData = this.validateForm.value;
    console.log("donnée du form")
    console.log(formData)

      this.anneeSubmit.anneeId = formData.anneeId;
      this.anneeSubmit.anneeEncours = formData.anneeEncours;
      this.anneeSubmit.anneeScolaire = formData.anneeScolaire;

    this.anneeService.saveAnnee(this.anneeSubmit).subscribe(
      (annee: AnneeAcademique) => {
        console.log("donnée après subscribe");
        console.log(annee);
        this.createMessage('success', 'année modifier avec succès');
        this.validateForm.reset();
      },
      (error: HttpErrorResponse) => {
        this.createMessage('error', 'erreur d\'enregistrement');

      }
    )
  
  this.router.navigateByUrl('/menu/save/annee-list');
}
createMessage(type: string, sms: string): void {
  this.message.create(type, sms);
}

}
