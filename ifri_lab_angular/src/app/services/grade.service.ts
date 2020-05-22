import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private host:string = "http://localhost:8080";

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private jwtToken=null;
  

  constructor(private http: HttpClient) { }

  getGrade(){
    if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/grade/list");
  }

  listGradeById(gradeId:number){
    return this.http.get(this.host+"/grade/"+gradeId);
  }

  saveGrade(formData){
    console.log(formData);
    return this.http.post(this.host + '/grade/save', formData, {headers: this.httpHeaders});

  }
  saveUp(grade: Grade){
    return this.http.post(this.host +"/grade/update", grade, {headers: this.httpHeaders});
  }

  deleteGrade(gradeId: number){
    return this.http.delete(this.host + '/grade/delete/'+ gradeId, {headers: this.httpHeaders});

  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }


}
