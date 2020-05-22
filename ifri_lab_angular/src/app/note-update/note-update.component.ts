import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EcService } from '../services/ec.service';
import { Ec } from '../models/ec';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiant } from '../models/etudiant';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-note-update',
  templateUrl: './note-update.component.html',
  styleUrls: ['./note-update.component.css']
})
export class NoteUpdateComponent implements OnInit {

  etudiants: Array<Etudiant> = [];
  ecs: Array<Ec> = [];
  keyParam: number;
  noteSbmit: Note = null;
  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private noteService: NoteService,
    private ecService: EcService,
    private etuService: EtudiantService,
    private message: NzMessageService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.makeForm();
    this.ecService.getEc().subscribe(
      (data: Array<Ec>)=>{
        this.ecs=data;
        console.log(this.ecs)
      }
    );

    this.etuService.getEtudiant().subscribe(
      (data: Array<Etudiant>)=>{
        this.etudiants=data;
        console.log(this.etudiants)
      }
    );
    this.keyParam = this.activateRoute.snapshot.params['noteId'];
    console.log(this.keyParam);
    this.noteService.listNoteById(this.keyParam).subscribe(
      (data: Note) => {

        this.noteSbmit = data;
        
        this.makeForm();
      }
    );
  }
  makeForm(): void{
    this.validateForm = this.fb.group({
      noteId: [(this.noteSbmit !=null)? this.noteSbmit.noteId: null, [Validators.required]],
      note: [(this.noteSbmit !=null)? this.noteSbmit.note: null, [Validators.required]],
      noteDate: [(this.noteSbmit !=null)? this.noteSbmit.noteDate: null, [Validators.required]],
      ec: [(this.noteSbmit !=null)? this.noteSbmit.ec.ecLibelle: null, [Validators.required]],
      etudiant: [(this.noteSbmit !=null)? this.noteSbmit.etudiant.matricule: null, [Validators.required]]

    });
  }

  onsave(): void {
  
    const formData = this.validateForm.value;
    console.log("donnée du form")
    console.log(formData)

      this.noteSbmit.noteId = formData.noteId;
      this.noteSbmit.note = formData.note;
      this.noteSbmit.noteDate = formData.noteDate;
      this.noteSbmit.ec = formData.ec;
      this.noteSbmit.etudiant = formData.etudiant;

    this.noteService.saveNote(this.noteSbmit).subscribe(
      (ec: Note) => {
        
        this.createMessage('success', 'année modifier avec succès');
        this.validateForm.reset();
      },
      (error: HttpErrorResponse) => {
        this.createMessage('error', 'erreur d\'enregistrement');

      }
    )
  
  this.router.navigateByUrl('/menu/save/note-list');
}
createMessage(type: string, sms: string): void {
  this.message.create(type, sms);
}


}
