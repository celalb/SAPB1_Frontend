import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { LoginUser } from '../models/loginUser';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private token: any;
  decodedToken: any;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  UserName: string;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    this.autoAuthUser();
    return this.isAuthenticated;
  }
  getUserName() {
    return this.UserName;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(username: string, passw: string) {
    const authData: LoginUser = { userName: username, password: passw };
    this.http
      .post(environment.apiUrl + '/user/signup', authData)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(username: string, passw: string, returnUrl: string) {
    const authData: LoginUser = { userName: username, password: passw };
    let lheaders = new HttpHeaders();
    lheaders = lheaders.append('Content-Type', 'application/json');
    this.http.post(environment.apiUrl + '/auth/login', authData, { headers: lheaders })
    .subscribe(data => {
        this.token = data;
        const now = new Date();
        if (this.token) {
          const expiresInDuration = 1000;
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000);
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.UserName = username;
          this.authStatusListener.next(true);
          this.saveAuthData(data, expirationDate, username);
          //  this.alertifyService.success('Sisteme giriş yapıldı');


          this.router.navigateByUrl(returnUrl);
        }
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();

    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.UserName = authInformation.UserName;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
   
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigateByUrl('/login');
  }

  private setAuthTimer(duration: number) {
    console.log('Setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: any, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }

  private getAuthData() {
    const ltoken = localStorage.getItem('token');
    if (!ltoken) {
      return;
    }
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    return {
      token: ltoken,
      expirationDate: new Date(expirationDate),
      UserName: userId
    };
  }
}
