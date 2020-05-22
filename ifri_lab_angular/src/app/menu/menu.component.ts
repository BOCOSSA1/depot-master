import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = false;
  user: any = null;
  constructor(public authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.authService.user;
  }

  onLogout(){
    this.authService.logOut();
    this.router.navigateByUrl('/logOut');
  }

}
