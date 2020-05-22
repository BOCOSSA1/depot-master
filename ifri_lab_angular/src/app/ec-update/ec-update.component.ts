import { Component, OnInit } from '@angular/core';
import { Ec } from '../models/ec';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EcService } from '../services/ec.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Ue } from '../models/ue';
import { UeService } from '../services/ue.service';

@Component({
  selector: 'app-ec-update',
  templateUrl: './ec-update.component.html',
  styleUrls: ['./ec-update.component.css']
})
export class EcUpdateComponent implements OnInit {

  ues: Array<Ue> = [];
  ecList: Array<Ec> = [];
  keyParam: number;
  ecSubmit: Ec = null;
  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private ecService: EcService,
    private ueService: UeService,
    private message: NzMessageService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.makeForm();
    this.ueService.getUe().subscribe(
      (data: Array<Ue>) => {
        this.ues = data;
        console.log(this.ues)
      }
    );
    this.keyParam = this.activateRoute.snapshot.params['ecId'];
    console.log(this.keyParam);
    this.ecService.listEcById(this.keyParam).subscribe(
      (data: Ec) => {

        this.ecSubmit = data;

        this.makeForm();
      }
    );
  }
  makeForm(): void {
    this.validateForm = this.fb.group({
      ecId: [(this.ecSubmit != null) ? this.ecSubmit.ecId : null, [Validators.required]],
      ecCode: [(this.ecSubmit != null) ? this.ecSubmit.ecCode : null, [Validators.required]],
      ecLibelle: [(this.ecSubmit != null) ? this.ecSubmit.ecLibelle : null, [Validators.required]],
      coefficient: [(this.ecSubmit != null) ? this.ecSubmit.coefficient : null, [Validators.required]],
      ue: [(this.ecSubmit != null) ? this.ecSubmit.ue.ueCode : null, [Validators.required]]

    });
  }

  onsave(): void {

    const formData = this.validateForm.value;
    console.log("donnée du form")
    console.log(formData)

    this.ecSubmit.ecId = formData.ecId;
    this.ecSubmit.ecCode = formData.ecCode;
    this.ecSubmit.ecLibelle = formData.ecLibelle;
    this.ecSubmit.coefficient = formData.coefficient;
    this.ecSubmit.ue = formData.ue;

    this.ecService.saveEc(this.ecSubmit).subscribe(
      (ec: Ec) => {
        console.log("donnée après subscribe");
        console.log(ec);
        this.createMessage('success', 'ec modifier avec succès');
        this.validateForm.reset();
      },
      (error: HttpErrorResponse) => {
        this.createMessage('error', 'erreur d\'enregistrement');

      }
    )

    this.router.navigateByUrl('/menu/save/ec-list');
  }
  createMessage(type: string, sms: string): void {
    this.message.create(type, sms);
  }

}
