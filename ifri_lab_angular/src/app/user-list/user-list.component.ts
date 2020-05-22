import { Component, OnInit } from '@angular/core';
import { ItemData } from './../models/item-data';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Personne } from '../models/personne';
import { Role } from '../models/role';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //userList;
  userList : Array<Personne> = [];
  users = [];
  constructor( private authService: AuthenticationService, private router : Router) { }

  ngOnInit() {
    this.listUser();
  }
  listUser(){
    this.authService.getUser().subscribe(
      (data: Array<Personne>)=>{
       
        this.userList = data;
  
      }
    )
  }

  ouvrirModifier(username: string) {
    this.router.navigate(['menu/user-update/', username]);
    
  }

  deleteUser(personneId: number){
    this.authService.deleteUser(personneId).subscribe(
      response=>this.listUser()
    );
  }




}
