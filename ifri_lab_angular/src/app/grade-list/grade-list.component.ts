import { Component, OnInit } from '@angular/core';
import { Grade } from '../models/grade';
import { GradeService } from '../services/grade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {
  gradeList : Array<Grade> = [];
  constructor(private gradeService: GradeService, private router : Router) { }

  ngOnInit() {
    this.listGrade();
  }
  listGrade(){
    this.gradeService.getGrade().subscribe(
      (data: Array<Grade>)=>{
        this.gradeList=data;
      }
    );

  }

  ouvrirModifier(gradeId: number): void {
    this.router.navigate(['menu/save/grade-update/'+gradeId]);
  
  }

  gradeDelete(gradeId: number){
    this.gradeService.deleteGrade(gradeId).subscribe(
      response=>this.listGrade()
    );
  }

}



