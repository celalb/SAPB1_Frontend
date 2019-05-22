import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AuthService } from './auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ErrorComponent } from './error/error.component';
import { ErrorInterceptor } from './error-interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './auth/login/login.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { NavComponent } from './nav/nav.component';
import { Ng6O2ChartModule } from 'ng6-o2-chart';
import { NgModule } from '@angular/core';
import {PendingChangesGuard} from './guards/pending-changes.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesModule } from './sales/sales.module';
import { SalesorderComponent } from './sales/salesorder/salesorder.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      LoginComponent,
      MaindashboardComponent,
      ErrorComponent
   ],
   imports: [
      BrowserModule, FlexLayoutModule,DragDropModule,
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      
      HttpClientModule,
      LayoutModule,
     
      Ng6O2ChartModule,
      AngularMaterialModule,
      SalesModule
   ],
   providers: [ AuthService,
      PendingChangesGuard,
       { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      ErrorComponent
   ]
})
export class AppModule { }
