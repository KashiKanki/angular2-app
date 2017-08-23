import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  public happyText = "I m on vaction";
  public myTodoList = [
  	'Todo 1',
  	'Todo 2',
  	'Todo 3',
  	'Todo 4 - fourth'
  ];

  ngOnInit() {
  	this.happyText = "I m sick not!!";
    this.router.navigate(['/content-part']); // To make content part to laod on page load.
  }

  makeMeHappy(){
  	this.happyText = "Manager is fired!!"
  }

}
