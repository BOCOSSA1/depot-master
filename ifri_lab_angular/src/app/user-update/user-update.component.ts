import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  validateForm: FormGroup;
  userList : Array<Personne> = [];
  keyParam: string;
  personneSubmit: Personne= null;
  
//mode: number = 0;

  constructor(private activateRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm(this.personneSubmit);

    this.keyParam = this.activateRoute.snapshot.params['username'];
    console.log("parametre"+this.keyParam);
    this.authService.getUserByUsername(this.keyParam)
    .subscribe((data: Personne)=>{
       this.personneSubmit = data;
       console.log(this.personneSubmit);
       console.log(this.personneSubmit.nom);
       console.log(this.personneSubmit.prenom);
       console.log(this.personneSubmit.typePersonne);
       console.log(this.personneSubmit.role);

       this.initForm(this.personneSubmit);
       
    }
    

    );
   // console.log("azerty  "+this.personneSubmit);


   
  }

  initForm(personneSubmit: Personne): void{

    this.validateForm = this.formBuilder.group({
      nom: [(this.personneSubmit != null)? this.personneSubmit.nom:null, [Validators.required]],
      prenom: [(this.personneSubmit != null)? this.personneSubmit.prenom:null, [Validators.required]],
      sexe: [(this.personneSubmit != null)? this.personneSubmit.sexe:null, [Validators.required]],
      email: [(this.personneSubmit != null)? this.personneSubmit.email:null, [Validators.required]],
      telephone: [(this.personneSubmit != null)? this.personneSubmit.telephone:null, [Validators.required]],
      typePersonne: [(this.personneSubmit != null)? this.personneSubmit.typePersonne:null, [Validators.required]],
      matricule: [(this.personneSubmit != null)? this.personneSubmit.matricule:null, [Validators.required]],
      username: [(this.personneSubmit != null)? this.personneSubmit.username:null, [Validators.required]],
      password: [(this.personneSubmit != null)? this.personneSubmit.password:null],
      //repassword: [(this.personneSubmit != null)? this.personneSubmit.repassword:null, [Validators.required]],
      
      role: [(this.personneSubmit != null)? this.personneSubmit.role:null]

    });
  }

  onCreate(){
    const formData = this.validateForm.value;
    console.log(FormData)
    this.personneSubmit.nom = formData.nom;
    this.personneSubmit.prenom = formData.prenom;
    this.personneSubmit.sexe = formData.sexe;
    this.personneSubmit.email = formData.email;
    this.personneSubmit.telephone = formData.telephone;
    this.personneSubmit.username = formData.username;
    this.personneSubmit.password = formData.password;
    this.personneSubmit.role = formData.role;


    this.authService.updateUser(formData)
    .subscribe((user: Personne)=>{

    });
    this.router.navigateByUrl('/menu/user-list')
  }


}
