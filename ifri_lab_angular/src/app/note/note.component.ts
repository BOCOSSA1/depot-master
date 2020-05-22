import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ue } from '../models/ue';
import { Ec } from '../models/ec';
import { Etudiant } from '../models/etudiant';
import { EcService } from '../services/ec.service';
import { EtudiantService } from '../services/etudiant.service';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpErrorResponse } from '@angular/common/http';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { UeService } from '../services/ue.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  validateForm: FormGroup;
  ecs: Array<Ec> = [];
  ues: Array<Ue> = [];
  etudiants: Array<Etudiant> = [];
  note: Note;


  constructor(private formBuilder: FormBuilder,
    private ecService: EcService,
    private ueService: UeService,
    private etuService: EtudiantService,
    private message: NzMessageService,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.initForm();

    this.ueService.getUe().subscribe(
      (data: Array<Ue>) => {
        this.ues = data;
        console.log(this.ues)
      }
    );
    this.ecService.getEc().subscribe(
      (data: Array<Ec>) => {
        this.ecs = data;
        console.log(this.ecs)
      }
    );

    this.etuService.getEtudiant().subscribe(
      (data: Array<Etudiant>) => {
        this.etudiants = data;
        console.log(this.etudiants)
      }
    );

  }



  initForm() {
    this.validateForm = this.formBuilder.group({
      //noteId:[null, [Validators.required]],
      note: [null, [Validators.required]],
      noteDate: ['', Validators.required],
      ec: ['', Validators.required],
      etudiant: ['', Validators.required]
    })

  }

  onsave() {

    const formData = this.validateForm.value;
    console.log(formData);


    this.note = new Note(null, formData.note, formData.noteDate, formData.ec, formData.etudiant);


    console.log(this.note);

    this.noteService.saveNote(this.note).subscribe(
      (data: Note) => {
        this.createMessage('success', 'Enregistrement effectué avec succès !');
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

  onResetForm(){
    this.initForm();
  }

}
