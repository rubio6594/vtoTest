import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginFacade } from 'src/app/common-app/+state/loginFacade';

@Component({
  selector: 'app-app-page-outlet',
  templateUrl: './app-page-outlet.component.html',
  styleUrls: ['./app-page-outlet.component.scss']
})
export class AppPageOutletComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: MatSidenav | undefined;

  constructor(private loginFacade: LoginFacade) { }

  ngOnInit(): void {
  }

  doLogout() {
    this.loginFacade.doLogout();
  }

}
