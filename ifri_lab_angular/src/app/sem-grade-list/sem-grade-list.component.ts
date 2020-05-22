import { Component, OnInit } from '@angular/core';
import { SemGrade } from '../models/sem-grade';
import { Router } from '@angular/router';
import { SemGradeService } from '../services/sem-grade.service';


@Component({
  selector: 'app-sem-grade-list',
  templateUrl: './sem-grade-list.component.html',
  styleUrls: ['./sem-grade-list.component.css']
})
export class SemGradeListComponent implements OnInit {

  specialiteList : Array<SemGrade> = [];
 
  constructor(private semGradeService: SemGradeService, private router : Router) { }

  ngOnInit() {
    this.listGrade();
  }
  listGrade(){
    this.semGradeService.getSemGrade().subscribe(
      (data: Array<SemGrade>)=>{
        this.specialiteList=data;
        console.log(this.specialiteList)
      }
    );

  }

  ouvrirModifier(id : number): void {
    this.router.navigate(['menu/save/sem-grade-update/'+id]);
  
  }

  semGradeDelete(id: number){
    this.semGradeService.deleteSemGrade(id).subscribe(
      response=>this.listGrade()
    );
  }

}
