import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginFacade } from 'src/app/common-app/+state/loginFacade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loading: boolean = false;

  subcriptions: Subscription = new Subscription;

  loginForm = new FormGroup({
    user: new FormControl(''),
    pass: new FormControl(''),
  });

  constructor(private loginFacade: LoginFacade) { }

  ngOnInit(): void {
    this.subcriptions.add(this.loginFacade.callback$.subscribe((callback) => this.loading = callback === "loading"))
  }

  doLogin() {
    const user = this.loginForm.get('user')?.value || "";
    const pass = this.loginForm.get('pass')?.value || "";
    this.loginFacade.doLogin(user, pass);
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }

}
