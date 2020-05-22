import { Component, OnInit } from '@angular/core';
import { Semestre } from '../models/semestre';
import { SemestreService } from '../services/semestre.service';
import { Router } from '@angular/router';
import { SemGradePk } from '../models/semGradePk';

@Component({
  selector: 'app-semestre-list',
  templateUrl: './semestre-list.component.html',
  styleUrls: ['./semestre-list.component.css']
})
export class SemestreListComponent implements OnInit {

  semestreList : Array<Semestre> = [];
  constructor(private semService: SemestreService, private router : Router) { }

  ngOnInit() {
    this.listSemestre();
  }
  listSemestre(){
    this.semService.getSemestre().subscribe(
      (data: Array<Semestre>)=>{
        this.semestreList=data;
      }
    );

  }

  ouvrirModifier(semId: number): void {
    this.router.navigate(['menu/save/semestre-update/'+semId]);
  
  }

  semestreDelete(semId: number){
    this.semService.deleteSemestre(semId).subscribe(
      response=>this.listSemestre()
    );
  }
}
