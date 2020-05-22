import { Component, OnInit } from '@angular/core';
import { Semestre } from '../models/semestre';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SemestreService } from '../services/semestre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-semestre-update',
  templateUrl: './semestre-update.component.html',
  styleUrls: ['./semestre-update.component.css']
})
export class SemestreUpdateComponent implements OnInit {
  semList: Array<Semestre> = [];
  keyParam: number;
  semSubmit: Semestre = null;
  validateForm: FormGroup;
  semestre: Semestre;
  constructor(private fb: FormBuilder,
    private semService: SemestreService,
    private message: NzMessageService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.makeForm();
      this.keyParam = this.activateRoute.snapshot.params['semId'];
      console.log(this.keyParam);
      this.semService.listSemestreById(this.keyParam).subscribe(
        (data: Semestre) => {
  
          this.semSubmit = data;
          console.log(this.semSubmit);
          console.log(this.semSubmit.semId);
          console.log(this.semSubmit.semLibelle);
          
          this.makeForm();
        }
      );
    }
    makeForm(): void{
      this.validateForm = this.fb.group({
        semId: [(this.semSubmit !=null)? this.semSubmit.semId: null, [Validators.required]],
        semLibelle: [(this.semSubmit !=null)? this.semSubmit.semLibelle: null, [Validators.required]]
  
      });
    }
  
    onsave(): void {
    
      const formData = this.validateForm.value;
      console.log("donnée du form")
      console.log(formData)
  
        this.semSubmit.semId = formData.semId;
        this.semSubmit.semLibelle = formData.semLibelle;
  
      this.semService.saveSemestre(this.semSubmit).subscribe(
        (semestre: Semestre) => {
          console.log("donnée après subscribe");
          console.log(semestre);
          this.createMessage('success', 'semestre modifier avec succès');
          this.validateForm.reset();
        },
        (error: HttpErrorResponse) => {
          this.createMessage('error', 'erreur d\'enregistrement');
  
        }
      )
    
    this.router.navigateByUrl('/menu/save/semestre-list');
  }
  createMessage(type: string, sms: string): void {
    this.message.create(type, sms);
  }
}
