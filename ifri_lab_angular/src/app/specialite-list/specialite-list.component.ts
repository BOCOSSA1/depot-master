import { Component, OnInit } from '@angular/core';
import { Specialite } from '../models/specialite';
import { SpecialiteService } from '../services/specialite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialite-list',
  templateUrl: './specialite-list.component.html',
  styleUrls: ['./specialite-list.component.css']
})
export class SpecialiteListComponent implements OnInit {
  speciliteList: Array<Specialite> = [];
  constructor(private specialiteService: SpecialiteService,
    private router: Router) { }

  ngOnInit() {
    this.listGrade();
  }
  listGrade(){
    this.specialiteService.getSpecialite().subscribe(
      (data: Array<Specialite>)=>{
        this.speciliteList=data;
        console.log(this.speciliteList);
      }
    );

  }

  ouvrirModifier(code: string): void {
    this.router.navigate(['menu/save/specialite-update/'+code]);
  
  }

  speciliteDelete(code: string){
    this.specialiteService.deleteSpecialite(code).subscribe(
      response=>this.listGrade()
    );
  }

}
