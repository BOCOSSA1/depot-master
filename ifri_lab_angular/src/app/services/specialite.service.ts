import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  private host:string = "http://localhost:8080/specialite";

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private jwtToken=null;
  
  constructor(private http: HttpClient) { }

  getSpecialite(){
    if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host + '/list');
  }

  listSpecialteByCode(code: string){
    return this.http.get(this.host+"/"+code);
  }


  saveSpecialite(formData) {
    return this.http.post(this.host + '/save', formData,{headers: this.httpHeaders});
  }
  
  deleteSpecialite(code: string){
    return this.http.delete(this.host + '/delete/'+ code, {headers: this.httpHeaders});
  }

  
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }
}
