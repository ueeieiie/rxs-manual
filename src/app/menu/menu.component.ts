import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  links = [
    {text: 'home', route: '/home'},
    {text: 'flatMap', route: '/flatmap'},
    {text: 'observable', route: '/observable'},
    {text: 'SECRET', route: '/secret'},
    {text: 'subject', route: '/subject'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
