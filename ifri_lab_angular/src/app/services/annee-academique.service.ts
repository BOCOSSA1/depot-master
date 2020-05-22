import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnneeAcademiqueService {

  private host:string = "http://localhost:8080/annee";

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private jwtToken=null;
  
  constructor(private http: HttpClient) { }

  getAnnee(){
    if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host + '/list');
  }

  listAnneeById(anneeId: number){
    return this.http.get(this.host+"/"+anneeId);
  }


  saveAnnee(formData) {
    return this.http.post(this.host + '/save', formData,{headers: this.httpHeaders});
  }
  
  deleteAnnee(anneeId: number){
    return this.http.delete(this.host + '/delete/'+ anneeId, {headers: this.httpHeaders});
  }

  
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }

}
