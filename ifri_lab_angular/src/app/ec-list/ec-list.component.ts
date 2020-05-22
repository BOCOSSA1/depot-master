import { Component, OnInit } from '@angular/core';
import { Ec } from '../models/ec';
import { EcService } from '../services/ec.service';
import { Router } from '@angular/router';
import { UeService } from '../services/ue.service';

@Component({
  selector: 'app-ec-list',
  templateUrl: './ec-list.component.html',
  styleUrls: ['./ec-list.component.css']
})
export class EcListComponent implements OnInit {

  ecList : Array<Ec> = [];
  constructor(private ecService: EcService,
    private ueService: UeService,
    private router : Router) { }

  ngOnInit() {
    this.listEc();
  }

  listEc(){
    this.ecService.getEc().subscribe(
      (data: Array<Ec>)=>{
        this.ecList=data;
      }
    );

  }

  ouvrirModifier(ecId: number): void {
    this.router.navigate(['menu/save/ec-update/'+ecId]);
  
  }

  ecDelete(ecId: number){
    this.ecService.deleteEc(ecId).subscribe(
      response=>this.listEc()
    );
  }

}
