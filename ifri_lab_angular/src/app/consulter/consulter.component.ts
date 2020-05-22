import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Personne } from '../models/personne';
import { User } from '../models/user';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { SemGradeService } from '../services/sem-grade.service';
import { SemGrade } from '../models/sem-grade';
import { Grade } from '../models/grade';
import { GradeService } from '../services/grade.service';
import { Ue } from '../models/ue';
import { UeService } from '../services/ue.service';
import { Semestre } from '../models/semestre';
import { SemestreService } from '../services/semestre.service';
import { SpecialiteService } from '../services/specialite.service';
import { Specialite } from '../models/specialite';
import { Router } from '@angular/router';
import { EcService } from '../services/ec.service';
import { Ec } from '../models/ec';
import * as _ from "lodash";
import { NgxPrintModule } from "ngx-print";

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {
  ues: Array<Ue> = [];
  ecs: Array<Ec> = [];
  noteList: Array<Note> = [];
  semGrades: Array<SemGrade> = [];
  semestres: Array<Semestre> = [];
  specialites: Array<Specialite> = [];
  semGrade: SemGrade;
  grades: Array<Grade> = [];
  validateForm: FormGroup;
  showRecord: boolean = false;
  appreciation: string = "";
  records = [];
  uniqueColors = [];
  moyenneUe;

  constructor(
    private noteService: NoteService,
    private speService: SpecialiteService,
    private ueService: UeService,
    private gradeService: GradeService,
    private semService: SemestreService,
    private ecService: EcService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.speService.getSpecialite().subscribe(
      (data: Array<Specialite>) => {
        this.specialites = data;

        console.log(this.specialites)
      }
    );



    this.gradeService.getGrade().subscribe(
      (data: Array<Grade>) => {
        this.grades = data;
        console.log(this.grades)
      }
    );

    this.ueService.getUe().subscribe(
      (data: Array<Ue>) => {
        this.ues = data; 
      }
    );


    this.semService.getSemestre().subscribe(
      (data: Array<Semestre>) => {
        this.semestres = data;

        console.log(this.semestres)
      }
    );

  }

  initForm() {
    this.validateForm = this.fb.group({
      specialite: ['', Validators.required],
      gradeLibelle: ['', Validators.required],
      ueLibelle: ['', Validators.required],
      semLibelle: ['', Validators.required]
    });
  }



  listResultat() {
    let formNote = this.validateForm.value;

    this.noteService.getNote().subscribe(
      (data: Array<Note>) => {
        this.noteList = data;
        const filtered = [];

        this.noteList.forEach(n => {
          
          if (
            n.ec.ue.sem_Grade.specialite == formNote.specialite.specialite
            && n.ec.ue.sem_Grade.grade.gradeLibelle == formNote.gradeLibelle.gradeLibelle
            && n.ec.ue.ueLibelle == formNote.ueLibelle.ueLibelle
            && n.ec.ue.sem_Grade.semestre.semLibelle == formNote.semLibelle.semLibelle
          ) {
            filtered.push(n);

          }

        });

        let noteObjet = [];

        let mats = [];

        for (let f of filtered) {
          if (!mats.includes(f.etudiant.matricule)) {
            mats.push(f.etudiant.matricule);
          }
        }

        const etuByM: any = {};
        for (const m of mats) {
          let obj = [];

          for (let f of filtered) {
            if (f.etudiant.matricule === m) {
              obj.push(f);
            }
          }
          etuByM[m] = obj;
        }


        for (let el in etuByM) {
          // Liste des ues
          let ues = [];

          for (let t of etuByM[el]) {
            if (!ues.includes(t.ec.ue.ueId)) {
              ues.push(t.ec.ue.ueId);
            }
          }
          
          etuByM[el].res = {};

          // Parcours des ues
          for (let u of ues) {
            let total = 0;
            let scoef = 0;
            for (let t of etuByM[el]) {
              if (t.ec.ue.ueId == u) {
                total += (t.note * t.ec.coefficient);
                scoef += t.ec.coefficient;
              }
            }
            etuByM[el].res = { total: total, moy: scoef == 0 ? 0 : total / scoef };
          }
        }
        
        console.log('for etubym')
        console.log(etuByM)
       
        let resultat = [];
        
        for (const el in etuByM) {
          let obj: any = {};
          obj.matricule = el;
          obj.nom = etuByM[el][0].etudiant.nom;
          obj.prenom = etuByM[el][0].etudiant.prenom;
          obj.ue = etuByM[el][0].ec.ue.ueLibelle;
          obj.moyue = etuByM[el].res;
          obj.annee = etuByM[el][0].ec.ue.anneeAcademique.anneeId;
          obj.moyV = etuByM[el][0].ec.ue.moyenneValidation;

          if (obj.moyue.moy >= obj.moyV) {
            this.appreciation = "Valider"
          }
          else{
            this.appreciation = "Non valider"
          }
          obj.appreciation = this.appreciation;
          resultat.push(obj);
  
        }

        this.records = resultat;

        console.log(this.records)
        this.showRecord = true;
      }
    );

  }


  ouvrirDetails(ueId: number): void {
    this.router.navigate(['menu/details/' + ueId]);

  }
}
