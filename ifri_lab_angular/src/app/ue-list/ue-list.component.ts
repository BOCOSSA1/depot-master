import { Component, OnInit } from '@angular/core';
import { Ue } from '../models/ue';
import { UeService } from '../services/ue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ue-list',
  templateUrl: './ue-list.component.html',
  styleUrls: ['./ue-list.component.css']
})
export class UeListComponent implements OnInit {

  ueList : Array<Ue> = [];
  constructor(
    private ueService: UeService,
    private router : Router) { }

  ngOnInit() {
    this.listUe();
  }

  listUe(){
    this.ueService.getUe().subscribe(
      (data: Array<Ue>)=>{
        this.ueList=data;
        
      }
    );

  }

  ouvrirModifier(ueId: number): void {
    this.router.navigate(['menu/save/ue-update/'+ueId]);
  
  }

  ueDelete(ueId: number){
    this.ueService.deleteUe(ueId).subscribe(
      response=>this.listUe()
    );
  }


}
