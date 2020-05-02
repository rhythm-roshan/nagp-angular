import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  //title of the application
  pageTitle = "Covid-19 Tracker";

  
  constructor() { }

  /**
   * sets the user name on the header.
   */
  ngOnInit() {    
  
  }



 
  
}
