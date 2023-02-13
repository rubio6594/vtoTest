import { navPages } from '../../pages/nav-pages';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  
  navPages = navPages;

  constructor() { }

  ngOnInit(): void {
  }

}
