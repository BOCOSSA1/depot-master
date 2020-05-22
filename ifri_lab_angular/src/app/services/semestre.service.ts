import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Semestre } from '../models/semestre';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  private host:string = "http://localhost:8080";
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private jwtToken=null;
  

  constructor(private http: HttpClient) { }

  getSemestre(){
    if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/semestre/list");
  }

  listSemestreById(semId: number){
    return this.http.get(this.host+"/semestre/"+semId);
  }

  saveSemestre(formData){
    return this.http.post(this.host + '/semestre/save', formData, {headers: this.httpHeaders});

  }
  
  saveUp(formData){
    return this.http.post(this.host +"/semestre/update", formData, {headers: this.httpHeaders});
  }

  deleteSemestre(semId: number){
    return this.http.delete(this.host + '/semestre/delete/'+ semId, {headers: this.httpHeaders});

  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }


}
