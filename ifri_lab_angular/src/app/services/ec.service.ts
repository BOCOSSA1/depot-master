import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcService {
  private host:string = "http://localhost:8080";

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private jwtToken=null;
  

  constructor(private http: HttpClient) { }

  getEc(){
    if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/ec/list");
  }

  listEcById(ecId:number){
    return this.http.get(this.host+"/ec/"+ecId);
  }

  saveEc(formData){
    return this.http.post(this.host + '/ec/save', formData, {headers: this.httpHeaders});

  }
  

  deleteEc(ecId: number){
    return this.http.delete(this.host + '/ec/delete/'+ ecId, {headers: this.httpHeaders});

  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }

  
}
