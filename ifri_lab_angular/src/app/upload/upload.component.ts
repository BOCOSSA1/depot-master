import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as Papa from "papaparse";
import { AnneeAcademique } from '../models/annee-academique';
import { AnneeAcademiqueService } from '../services/annee-academique.service';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpErrorResponse } from '@angular/common/http';
import { SpecialiteService } from '../services/specialite.service';
import { Specialite } from '../models/specialite';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { Ec } from '../models/ec';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiant } from '../models/etudiant';
import { EcService } from './../services/ec.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  csv = 'IM,intenet multimédia\nGL,Géni logiciel';
  ec: Ec;
  etudiant: Etudiant;
  notes: Note[] = [];
  donnees = [];
  bjs=[];
  validateForm: FormGroup;
  constructor(private noteService: NoteService,
    private message: NzMessageService,
    private fb: FormBuilder,
    private ecService: EcService,
    private etService: EtudiantService) { }

  ngOnInit() {
    const res = Papa.parse(this.csv);
    console.log(res);
    this.validateForm = this.fb.group({
      file: ['', Validators.required],
      
    })

  }

  upload(e) {
    const file = e.target.files[0];
    Papa.parse(file,{
      complete: (response)=>{
        const data = response.data;
        data.forEach(d => {
          let newObj:any= {};
          newObj.note = d[0];
          newObj.noteDate = d[1];
          this.ecService.listEcById(d[2] as number).subscribe(res => {
            console.log(res)
            newObj.ec = res;

            this.etService.listEtudiantById(d[3] as number).subscribe(res => {
              newObj.etudiant = res;

              this.notes.push(new Note(null,newObj.note, new Date(newObj.noteDate), newObj.ec, newObj.etudiant));
            });
          });
          
  

        });
      
      }


    });

  }

  
  onSubmit() {
    this.notes.forEach(note => {
      this.noteService.saveNote(note)
      .subscribe((data: Note) => {
        console.log("okoookoookoo" + data);
        this.createMessage('success', 'contact enregistre avec succès')
      },
        (error: HttpErrorResponse) => {
          this.createMessage('error', 'erreur d\'enregistrement');

        }
      )
    });
    
  }

  createMessage(type: string, sms: string): void {
    this.message.create(type, sms);
  }
  }
/**
 * upload(e) {
    const file = e.target.files[0];
    Papa.parse(file,{
      complete: (response)=>{
        const data = response.data;
        data.forEach(d => {
          let newObj:any= {};
          newObj.code = d[0];
          newObj.specialite = d[1];
          
          this.specialites.push(new Specialite(newObj.code, newObj.specialite));

        });
      
      }


    });

  }
 */

 ///An other comment

 /**
  * csv = 'IM,intenet multimédia\nGL,Géni logiciel';

  notes: Note[] = [];
  donnees = [];
  bjs=[];
  validateForm: FormGroup;
  constructor(private noteService: NoteService,
    private message: NzMessageService,
    private fb: FormBuilder) { }

  ngOnInit() {
    const res = Papa.parse(this.csv);
    console.log(res);
    this.validateForm = this.fb.group({
      file: ['', Validators.required]
    })
  }

  upload(e) {
    const file = e.target.files[0];
    Papa.parse(file,{
      complete: (response)=>{
        const data = response.data;
        data.forEach(d => {
          let newObj:any= {};
          newObj.note = d[0];
          newObj.noteDate = d[1];
          newObj.ec = d[2];
          newObj.etudiant = d[3];
          
          this.notes.push(new Note(null,newObj.note, newObj.noteDate, newObj.ec, newObj.etudiant));

        });
      
      }


    });

  }

  onSubmit() {
    this.notes.forEach(note => {
      this.noteService.saveNote(note)
      .subscribe((data: Note) => {
        console.log("okoookoookoo" + data);
        this.createMessage('success', 'contact enregistre avec succès')
      },
        (error: HttpErrorResponse) => {
          this.createMessage('error', 'erreur d\'enregistrement');

        }
      )
    });
    
  }

  createMessage(type: string, sms: string): void {
    this.message.create(type, sms);
  }
  */