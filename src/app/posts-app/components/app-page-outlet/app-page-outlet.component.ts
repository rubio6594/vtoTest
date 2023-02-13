import { MatSidenav } from '@angular/material/sidenav';
import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginFacade } from 'src/app/common-app/+state/loginFacade';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-app-page-outlet',
  templateUrl: './app-page-outlet.component.html',
  styleUrls: ['./app-page-outlet.component.scss']
})
export class AppPageOutletComponent implements OnInit, AfterViewInit {

  sticky: boolean = false;

  menuPosition: number | undefined;

  @ViewChild('stickyMenu') 
  menuElement: MatToolbar | undefined;

  @ViewChild('sidenav')
  sidenav: MatSidenav | undefined;

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(this.menuPosition && windowScroll >= this.menuPosition){
          this.sticky = true;
      } else {
          this.sticky = false;
      }
    }

  constructor(private loginFacade: LoginFacade) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.menuPosition = this.menuElement?._elementRef.nativeElement.offsetTop;
   }, 0)
  }

  doLogout() {
    this.loginFacade.doLogout();
  }

}
