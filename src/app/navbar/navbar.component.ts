import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  public happyText = "I m on vaction";
  public myTodoList = [
  	'Todo 1',
  	'Todo 2',
  	'Todo 3',
  	'Todo 4 - fourth'
  ];

  ngOnInit() {
  	this.happyText = "I m sick not!!";
  }

  makeMeHappy(){
  	this.happyText = "Manager is fired!!"
  }

}
