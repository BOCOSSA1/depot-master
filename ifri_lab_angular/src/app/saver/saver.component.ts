import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saver',
  templateUrl: './saver.component.html',
  styleUrls: ['./saver.component.css']
})
export class SaverComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSaveGrade(){
    this.router.navigateByUrl('/menu/save/grade');
  }

  onSaveAnnee(){
    this.router.navigateByUrl('/menu/save/annee');
  }

  onSaveSemestre(){
    this.router.navigateByUrl('/menu/save/semestre');
  }

  onSaveSpecialite(){
    this.router.navigateByUrl('/menu/save/sem-grade');
  }

  onSaveEc(){
    this.router.navigateByUrl('/menu/save/ec');
  }
  onSaveUe(){
    this.router.navigateByUrl('/menu/save/ue');
  }
  onSaveNote(){
    this.router.navigateByUrl('/menu/save/note');
  }
 
  onSaveFiliere(){
    this.router.navigateByUrl('/menu/save/specialite')
  }

}
