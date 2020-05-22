import { Component, OnInit } from '@angular/core';
import { AnneeAcademique } from '../models/annee-academique';
import { AnneeAcademiqueService } from '../services/annee-academique.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annee-list',
  templateUrl: './annee-list.component.html',
  styleUrls: ['./annee-list.component.css']
})
export class AnneeListComponent implements OnInit {

  anneeList : Array<AnneeAcademique> = [];
  constructor(private anneeService: AnneeAcademiqueService, private router : Router) { }

  ngOnInit() {
    this.listAnnee();
  }
  listAnnee(){
    this.anneeService.getAnnee().subscribe(
      (data: Array<AnneeAcademique>)=>{
        this.anneeList=data;
      }
    );

  }

  ouvrirModifier(anneeId: number): void {
    this.router.navigate(['menu/save/annee-update/'+anneeId]);
  
  }

  anneeDelete(anneeId: number){
    this.anneeService.deleteAnnee(anneeId).subscribe(
      response=>this.listAnnee()
    );
  }

}
