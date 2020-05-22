import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ue } from '../models/ue';
import { Note } from '../models/note';
import { SemGrade } from '../models/sem-grade';
import { Semestre } from '../models/semestre';
import { Grade } from '../models/grade';
import { NoteService } from '../services/note.service';
import { SemGradeService } from '../services/sem-grade.service';
import { UeService } from '../services/ue.service';
import { GradeService } from '../services/grade.service';
import { SemestreService } from '../services/semestre.service';
import { SpecialiteService } from '../services/specialite.service';
import { Specialite } from '../models/specialite';
import { NgxPrintModule } from "ngx-print";

@Component({
  selector: 'app-one-result',
  templateUrl: './one-result.component.html',
  styleUrls: ['./one-result.component.css']
})
export class OneResultComponent implements OnInit {
  ues: Array<Ue> = [];
  noteList: Array<Note> = [];
  semGrades: Array<SemGrade> = [];
  semestres: Array<Semestre> = [];
  semestre: SemGrade;
  specialites: Array<Specialite> = [];
  semGrade: SemGrade;
  grades: Array<Grade> = [];
  validateForm: FormGroup;
  showRecord: boolean = false;
  moyenneUe;
  records = [];
  appreciation: string = "Valider";

  constructor(
    private noteService: NoteService,
    private semGradeService: SemGradeService,
    private ueService: UeService,
    private speService: SpecialiteService,
    private gradeService: GradeService,
    private semService: SemestreService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();

    this.semGradeService.getSemGrade().subscribe(
      (data: Array<SemGrade>) => {
        this.semGrades = data;

        console.log(this.semGrades)
      }
    );
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
        console.log(this.ues)
      }
    );

    this.semService.getSemestre().subscribe(
      (data: Array<Semestre>) => {
        this.semestres = data;

        console.log(this.semGrades)
      }
    );
  }

  initForm() {
    this.validateForm = this.fb.group({
      matricule: [null, Validators.required],
      specialite: ['', Validators.required],
      gradeLibelle: ['', Validators.required],
      semLibelle: ['', Validators.required]
    });
  }


  listResultat() {
    let formNote = this.validateForm.value;
    this.showRecord = true;
    this.noteService.getNote().subscribe(
      (data: Array<Note>) => {
        this.noteList = data;
        const filtered = [];
        this.noteList.forEach(n => {

          if (
            n.etudiant.matricule == formNote.matricule
            && n.ec.ue.sem_Grade.specialite == formNote.specialite.specialite
            && n.ec.ue.sem_Grade.grade.gradeLibelle == formNote.gradeLibelle.gradeLibelle
            && n.ec.ue.sem_Grade.semestre.semLibelle == formNote.semLibelle.semLibelle
          ) {

            filtered.push(n);

          }
        });
        // console.log('for filtre')
        // console.log(filtered);
        let noteObjet = [];

        let mats = [];

        for (let f of filtered) {
          if (!mats.includes(f.ec.ue.ueLibelle)) {
            mats.push(f.ec.ue.ueLibelle);
          }

        }

        const etuByM: any = {};
        for (const m of mats) {
          let obj = [];

          for (let f of filtered) {
            if (f.ec.ue.ueLibelle === m) {
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
            ///console.log(ues)
          }
        }

        //console.log('for etubym')
        //console.log(etuByM)

        let resultat = [];

        for (const el in etuByM) {
          let obj: any = {};
          obj.ueLibelle = el;
          obj.matricule = etuByM[el][0].etudiant.matricule;
          obj.nom = etuByM[el][0].etudiant.nom;
          obj.prenom = etuByM[el][0].etudiant.prenom;
          obj.ue = etuByM[el][0].ec.ue.ueLibelle;
          obj.moyue = etuByM[el].res;
          obj.annee = etuByM[el][0].ec.ue.anneeAcademique.anneeId;
          obj.moyV = etuByM[el][0].ec.ue.moyenneValidation;

          if (obj.moyue.moy >= obj.moyV) {
            this.appreciation = "Valider"
          }
          else {
            this.appreciation = "Non valider"
          }
          obj.appreciation = this.appreciation;
          resultat.push(obj);

          //console.log(this.appreciation);
        }

        //console.log('for resultat')
        console.log(resultat)
        this.records = resultat;

        //this.noteList = filtered;
        //console.log(this.noteList);
      }
    );

  }

}
