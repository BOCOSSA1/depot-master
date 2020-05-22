import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelper } from "angular2-jwt";
import { User } from '../models/user';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host: string = "http://localhost:8080";
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private jwtToken = null;
  private roles: Array<any>;
  public user: any = null;

  constructor(private http: HttpClient) {

  }

  login(user) {
    return this.http.post(this.host + "/login", user, { observe: 'response' });
  }

  //registered method
  register(user) {
    return this.http.post(this.host + "/users", user, {
      headers: this.httpHeaders
    });
  }

  createUser(create) {
    return this.http.post(this.host + "/create-users", create, { headers: this.httpHeaders });
  }

  updateUser(formData) {
    console.log(formData);
    return this.http.put(this.host + "/update-user/", formData, {
      headers: this.httpHeaders
    });
  }

  createAutorite(create) {
    return this.http.post(this.host + "/create-autorite", create);
  }
  createAdmin(create) {
    return this.http.post(this.host + "/create-admin", create);
  }

  etudiant(user) {
    return this.http.post(this.host + "/etudiant", user);
  }

  createEtudiant(user) {

    return this.http.post(this.host + "/create-etudiants", user, { observe: 'response' });
  }

  getUser() {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/list-users");
  }


  //to get one user
  getUserByUsername(username: string) {
    return this.http.get(this.host + "/one-user/" + username);
  }


  //delete user
  deleteUser(personneId: number): Observable<object> {
    //if (this.jwtToken==null) this.loadToken();
    return this.http.delete(this.host + "/delete-user/" + personneId, { headers: this.httpHeaders });
  }

  saveToken(jwt: string, user) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
    this.user = user;
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  getTasks() {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/tasks",
      { headers: new HttpHeaders({ 'Authorization': this.jwtToken }) });
  }

  saveTask(task: string) {
    let headers = new HttpHeaders();
    headers.append('authorization', this.jwtToken);
    return this.http.post(this.host + '/tasks', task, { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }



  logOut() {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }

  isAdmin() {
    for (let r of this.roles) {
      if (r.authority == 'ADMIN') return true;
    }
    return false;
  }

  isSuper() {
    for (let r of this.roles) {
      if (r.authority == 'SUPER_ADMIN') return true;

    }
    return false;
  }

  isUser() {
    for (let r of this.roles) {
      if (r.authority == 'USER') return true;
    }
    return false;
  }

  isAuth() {
    for (let r of this.roles) {
      if (r.authority == 'AUTORITE') return true;
    }
    return false;
  }


}
