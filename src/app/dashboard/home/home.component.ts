import { Component, OnInit, DoCheck, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  @ViewChild('drawer', { static: false }) 
  drawer: MatSidenav;
  @Input() isLoggedin: boolean = true;
 login: string = 'login';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.router.navigate(['/dashboard/state']);
    this.checkForLogin();   
  }

  ngDoCheck() {
    this.checkForLogin();
  }


  checkForLogin() {
    if (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
      this.isLoggedin = false;
      this.login = 'login';
      
    } else {
      this.isLoggedin = true;
      this.login = 'Log out ' + localStorage.getItem('username');    
    }
  }  
 
 operation() {
   if (localStorage.getItem('TOKEN') !== null) {
   localStorage.clear();
   this.router.navigate(['/dashboard/state']);}
   else{
     this.router.navigate(['/login']);
   }
 }

}
