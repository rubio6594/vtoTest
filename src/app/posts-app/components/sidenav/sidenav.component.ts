import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { menuPages } from '../../definitions/menu-pages';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input()
  sidenav: MatSidenav | undefined;
  
  menuPages = menuPages;
  
  constructor() { }

  ngOnInit(): void {
  }

}
