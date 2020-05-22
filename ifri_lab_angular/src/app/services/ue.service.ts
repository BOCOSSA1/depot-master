import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ue } from '../models/ue';

@Injectable({
  providedIn: 'root'
})
export class UeService {

  private host:string = "http://localhost:8080/ue";

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private jwtToken=null;
  

  constructor(private http: HttpClient) { }

  getUe(){
    if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/list");
  }

  listUeById(ueId : number){
    return this.http.get(this.host+"/"+ueId);
  }

  saveUe(formData){
    console.log(formData);
    return this.http.post(this.host + '/save', formData, {headers: this.httpHeaders});

  }
 

  deleteUe(ueId: number){
    return this.http.delete(this.host + '/delete/'+ ueId, {headers: this.httpHeaders});

  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }


}
