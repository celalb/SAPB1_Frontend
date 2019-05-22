import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy  {
  isLoading = false;
  message: string;
  returnUrl: string;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  private authStatusSub: Subscription;

  constructor(public authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  });

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );

    /*
    this.activatedRoute.queryParams.subscribe(params=>{
      this.returnUrl = params["returnUrl"]||"";
    });
    */
  }
  get f() { return this.loginForm.controls; }
  onLogin() {
    if (this.loginForm.invalid) {
      return;
  }
    this.authService.login(this.f.username.value, this.f.password.value, "");
    this.isLoading = true;
  }



  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
