import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ue } from '../models/ue';
import { UeService } from '../services/ue.service';
import { NzMessageService } from 'ng-zorro-antd';
import { EcService } from '../services/ec.service';
import { Ec } from '../models/ec';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ec',
  templateUrl: './ec.component.html',
  styleUrls: ['./ec.component.css']
})
export class EcComponent implements OnInit {

  validateForm: FormGroup;
  ues: Array<Ue> = [];
  ec: Ec;


  constructor(private formBuilder: FormBuilder,
    private ueService: UeService,
    private message: NzMessageService,
    private ecService: EcService) { }

  ngOnInit() {
    this.initForm();

    this.ueService.getUe().subscribe(
      (data: Array<Ue>) => {
        this.ues = data;
        console.log(this.ues)
      }
    );

  }



  initForm() {
    this.validateForm = this.formBuilder.group({
      ecCode: ['', [Validators.required]],
      ecLibelle: ['', Validators.required],
      coefficient: [null, Validators.required],
      ue: ['', Validators.required]
    });
  }

  onsave() {

    const formData = this.validateForm.value;
    console.log(formData);


    this.ec = new Ec(null, formData.ecCode, formData.ecLibelle, formData.coefficient, formData.ue);

    console.log(this.ec);

    this.ecService.saveEc(this.ec).subscribe(
      (data: Ec) => {
        this.createMessage('success', 'Enregistrement effectué avec succès');
        console.log(data);
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

  onResetForm() {
    this.initForm();
  }
}
