import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private host:string = "http://localhost:8080";

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private jwtToken=null;
  

  constructor(private http: HttpClient) { }

  getNote(){
    if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/note/list");
  }

  listNoteById(noteId:number){
    return this.http.get(this.host+"/note/"+noteId);
  }

  saveNote(formData){
    return this.http.post(this.host + "/note/save", formData, {headers: this.httpHeaders});

  }
  

  deleteNote(noteId: number){
    return this.http.delete(this.host + '/note/delete/'+ noteId, {headers: this.httpHeaders});

  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }
}
