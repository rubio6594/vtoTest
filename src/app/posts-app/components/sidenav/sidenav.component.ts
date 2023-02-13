import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { navPages } from '../../pages/nav-pages';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input()
  sidenav: MatSidenav | undefined;
  
  navPages = navPages;
  
  constructor() { }

  ngOnInit(): void {
  }

}
