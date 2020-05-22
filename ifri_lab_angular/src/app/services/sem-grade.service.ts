import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SemGrade } from '../models/sem-grade';
import { Observable } from 'rxjs';
import { SemGradePk } from '../models/semGradePk';

@Injectable({
  providedIn: 'root'
})
export class SemGradeService {
  private host:string = "http://localhost:8080/semgrade";

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private jwtToken=null;
constructor(private http: HttpClient){}
  getSemGrade(){
    if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/list");
  }

  listSemGradeById(id : number){
    return this.http.get(this.host+"/"+id);
  }
  saveSemGrade(formData){
    console.log(formData);
    return this.http.post(this.host + '/save', formData, {headers: this.httpHeaders});

  }
  deleteSemGrade(id: number){
    return this.http.delete(this.host + '/delete/'+ id, {headers: this.httpHeaders});

  }
 
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }

}
