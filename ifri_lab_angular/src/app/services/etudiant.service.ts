import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private host: string = "http://localhost:8080";

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private jwtToken = null;


  constructor(private http: HttpClient) { }

  getEtudiant() {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/etudiant/list", { headers: this.httpHeaders });
  }

  listEtudiantById(etudiantId: number) {
    return this.http.get(this.host + "/etudiant/" + etudiantId);
  }

  /*
    
  
    saveUe(formData){
      console.log(formData);
      return this.http.post(this.host + '/save', formData, {headers: this.httpHeaders});
  
    }
   
  
    deleteUe(ueId: number){
      return this.http.delete(this.host + '/delete'+ ueId, {headers: this.httpHeaders});
  
    }
    */
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }


}
